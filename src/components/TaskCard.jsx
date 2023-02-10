import React from 'react'

const TaskCard = ({task, deleteTask, updateTask, setUpdatingTask, reset}) => {

  const handleChangeCheckbox = (e) => {
    const data = { isCompleted: e.target.checked }
    updateTask(task.id, data)
  }

  const handleClickEdit = () => {
    setUpdatingTask(task)
    reset(task)
    console.log(task)
  }

  return (
    <article>
      <h3 className={task.isCompleted ? "complete" : ""}>{task.title}</h3>
      <p className={task.isCompleted ? "complete" : ""}>{task.description}</p>
      <h4>{task.isCompleted ? "Complete" : "In progress"}</h4>
      <div>
        <input onChange={handleChangeCheckbox} defaultValue={task.isCompleted} type="checkbox" />
      </div>
      <button onClick={() => deleteTask(task.id)}><i className='bx bxs-trash'></i></button>
      <button onClick={handleClickEdit}><i className='bx bx-edit'></i></button>
      <hr />
    </article>
  )
}

export default TaskCard