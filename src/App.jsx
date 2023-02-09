import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

const BASE_URL = "https://todos-crud.academlo.tech/"

function App() {

  const [tasks, setTasks] = useState([])

  const getAllTasks = () => {
    axios.get(`${BASE_URL}todos/`)
    .then((res) => setTasks(res.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <div className="App">
      <h1>To-Do's</h1>

      <form>
        
      </form>

      <section>
        {
          tasks.map((task) => (
            <article>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <h4>{task ? "Complete" : "In progress"}</h4>              
            </article>
          ) )
        }
      </section>
    </div>
  )
}

export default App
