import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../Redux/Actions/TaskActions";
import "./style.css";
import { Button } from "react-bootstrap";


const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addtask({ task }));
      setTask("");
    }
  }

  return (
    <div className="taskInput w-full">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add Task"
          />
        </div>
        <div className="">
          <Button  className="  btn btn-success " type="submit">ADD Task</Button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
