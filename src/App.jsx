import { Fragment, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

function App() {
  const [toDoList, setToDoList] = useState([])
  const addToDoHandler= toDo => {
    setToDoList([...toDoList, toDo])
  }

  return (
    <Fragment>
      <Header />
      <ToDoInput addToDo={addToDoHandler} />
      <ToDoList toDoList= {toDoList} />
    </Fragment>
  )
}

export default App