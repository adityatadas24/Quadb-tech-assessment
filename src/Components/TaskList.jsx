import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletetask, imptask, toggletask } from "../Redux/Actions/TaskActions";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import "./style.css";
import { Button } from "react-bootstrap";


const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);


  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deletetask(id));
  }

  function toggleTask(id) {
    dispatch(toggletask(id));
  }

  function importantTask(id) {
    dispatch(imptask(id));
  }

  const completedTasks = tasks.filter((task) => task.complete);
  const importantTasks = tasks.filter((task) => task.imp);

  return (
    <div>
      {tasks.length !== 0 ? (
        <div>
          {tasks.map((task) => (
            <div style={{ display: "flex" }} key={task.id}>
              <div>
                {task.id && task.complete > 0 ? (
                  ""
                ) : (
                  <div className="taskData">
                    {" "}
                    <div style={{ display: "flex", gap: "18px" }}>
                      <input
                        type="checkbox"
                        checked={task.complete}
                        onChange={() => toggleTask(task.id)}
                      />
                      <p
                        style={{
                          textDecorationLine: task.complete
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {task.task}
                      </p>
                    </div>
                    <p onClick={() => importantTask(task.id)}>
                      {task.imp ? <FaStar/> : <FaRegStar/>}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}

          <br />

          {completedTasks.length > 0 && (
            <div>
                <hr />
              <h1>Completed</h1>
              {tasks.map((task) => (
                <div style={{ display: "flex" }} key={task.id}>
                  <div>
                    {(task.id && task.complete) > 0 ? (
                      <div className="taskData">
                      {" "}
                      <div style={{ display: "flex", gap: "18px" }}>
                        <input
                          type="checkbox"
                          checked={task.complete}
                          onChange={() => toggleTask(task.id)}
                        />
                        <p
                          style={{
                            textDecorationLine: task.complete
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {task.task}
                        </p>
                      </div>
                      <div style={{ display: "flex",justifyContent:'center', alignItems:'center', gap: "18px" }}>
                    <Button variant="danger" onClick={() => handleDelete(task.id)}>
                          Delete
                        </Button>
                        <p onClick={() => importantTask(task.id)}>
                        {task.imp ? <FaStar/> : <FaRegStar/>}
                    </p>
                    </div>
                    </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <br />
          {importantTasks.length > 0 && (
            <div>
                <hr />
              <h1>Important</h1>
              {tasks.map((task) => (
                <div style={{ display: "flex" }} key={task.id}>
                  <div>
                    {(task.id && task.imp) > 0 ? (
                      <div className="taskData">
                    {" "}
                    <div style={{ display: "flex", gap: "18px" }}>
                      <input
                        type="checkbox"
                        checked={task.complete}
                        onChange={() => toggleTask(task.id)}
                      />
                      <p
                        style={{
                          textDecorationLine: task.complete
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {task.task}
                      </p>
                    </div>
                    <div style={{ display: "flex",justifyContent:'center', alignItems:'center', gap: "18px" }}>
                    <Button variant="danger" onClick={() => handleDelete(task.id)}>
                          Delete
                        </Button>
                        <p onClick={() => importantTask(task.id)}>
                        {task.imp ? <FaStar/> : <FaRegStar/>}
                    </p>
                    </div>
                  
                  </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="task" style={{ marginTop: "50px" }}>
          No tasks
        </div>
      )}
    </div>
  );
};

export default TaskList;
