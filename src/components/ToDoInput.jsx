export default function ToDoInput(props) {
  const formHandler= e => {
    e.preventDefault()
    props.addToDo(e.target[0].value)
  }
  return (
    <form className="container" onSubmit={formHandler}>
      <input type="text" placeholder="Your To Do..." />
      <button type="submit">Submit</button>
    </form>
  ) 
}
