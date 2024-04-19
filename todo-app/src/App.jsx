import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState();

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    if(newTask !== ""){
      setTasks(tasks => [...tasks,newTask]);
      setNewTask("");
    }
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index))
  }
  return (
    <div className="container">
      <div className="input">
        <input type="text" value={newTask} onChange={handleNewTask} placeholder="Enter a task"/>
        <button className="btn btn-info" onClick={addTask}>
          Add
        </button>
      </div>
      <hr />
      <div className="tasks">
        {tasks.length > 0 ? 
          <ul>
            {tasks.map((task, index) => <li key={index}>
              <span className="task">{task}</span> 
              <button className="btn btn-danger" onClick={() => removeTask(index)}>Delete</button>
            </li>)}
          </ul> : 
          <span>No Task.</span>
        }
      </div>
    </div>
  )
}

export default App
