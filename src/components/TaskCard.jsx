import React from 'react'

const TaskCard = ({task, deleteTask, updateStatusTask}) => {

  const handleChangeCheckBox = (e) => {
    const data = { isCompleted: e.target.checked }
    updateStatusTask(task.id, data)
  }

  return (
    <article>
      <h3 className={task.isCompleted ? "complete" : ""} >{task.title}</h3>
      <p className={task.isCompleted ? "complete" : ""} >{task.description}</p>
      <h4>{task.isCompleted ? "Complete" : "In progress"}</h4>
      <div>
        <input onChange={handleChangeCheckBox} type="checkbox" defaultValue={task.isCompleted} />
      </div>
      <button onClick={() => deleteTask(task.id)}><i className='bx bxs-trash'></i></button>
      <hr />
    </article>
  )
}

export default TaskCard