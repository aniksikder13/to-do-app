export default function ToDoInput(props) {
  const formHandler= e => {
    e.preventDefault()
    const toDo= {
      text: e.target[0].value,
      completed: false,
      id: Date.now()
    }
    props.addToDo(toDo)
  }
  
  return (
    <form className="container" onSubmit={formHandler}>
      <input type="text" placeholder="Your To Do..." />
      <button type="submit">Submit</button>
    </form>
  ) 
}