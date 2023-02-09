import React from 'react'

const TaskCard = ({task, deleteTask}) => {
  return (
    <article>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <h4>{task.isCompleted ? "Complete" : "In progress"}</h4>
      <button onClick={() => deleteTask(task.id)}><i className='bx bxs-trash'></i></button>
      <hr />
    </article>
  )
}

export default TaskCard