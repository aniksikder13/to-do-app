import { Fragment, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

function App() {
  const [toDoList, setToDoList] = useState([])

  const addToDoHandler= (toDo) => {
    setToDoList([...toDoList, toDo])
  }

  const completeHandler= (id, isComplete) => {
    if (isComplete) {
      setToDoList(toDoList.map(toDo => toDo.id === id? {...toDo, isComplete: true } : toDo))
    } else {
      setToDoList(toDoList.map(toDo => toDo.id === id? {...toDo, isComplete: false} : toDo))
    }
  }

  const removeHandler= (id) => {
    const filteredToDoList = toDoList.filter(toDo => toDo.id !== id)
    setToDoList([...filteredToDoList])
  }

  return (
    <Fragment>
      <Header />
      <ToDoInput addToDo={addToDoHandler} />
      {
        toDoList.length > 0 && <ToDoList toDoList= {toDoList} remove={removeHandler} complete={completeHandler} />
      }
    </Fragment>
  )
}

export default App