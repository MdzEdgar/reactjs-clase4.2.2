import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import TaskCard from "./components/TaskCard";

const BASE_URL = "https://todos-crud.academlo.tech/";

const defaultValues = {
  title: "",
  description: "",
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [updatingTask, setUpdatingTask] = useState();

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const dataCreate = { ...data, isCompleted: false };
    if(updatingTask){
      updateTask(updatingTask.id, data)
      setUpdatingTask()
    }else {
      createTask(dataCreate);
    }
    reset(defaultValues);
  };

  const getAllTasks = () => {
    axios
      .get(`${BASE_URL}todos/`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  };

  const createTask = (data) => {
    axios
      .post(`${BASE_URL}todos/`, data)
      .then(() => getAllTasks())
      .catch((err) => console.log(err));
  };

  const deleteTask = (id) => {
    axios
      .delete(`${BASE_URL}todos/${id}/`)
      .then(() => getAllTasks())
      .catch((err) => console.log(err));
  };

  const updateTask = (id, data) => {
    axios
      .patch(`${BASE_URL}todos/${id}/`, data)
      .then(() => {
        getAllTasks();
        console.log("Actualizada");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="App">
      <h1>Todos</h1>

      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="">Title</label>
          <input type="text" {...register("title")} />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea
            id=""
            cols="30"
            rows="10"
            {...register("description")}
          ></textarea>
        </div>
        <button type="submit">{updatingTask ? "Update" : "Create"}</button>
      </form>

      <section>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            setUpdatingTask={setUpdatingTask}
            reset={reset}
          />
        ))}
      </section>
    </div>
  );
}

export default App;