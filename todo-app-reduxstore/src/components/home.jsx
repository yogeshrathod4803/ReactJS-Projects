import React, { useState } from "react";
import AllTask from "./allTask";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskContainer, setTaskContainer] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState([]);
  const [taskStatuses, setTaskStatuses] = useState({});
  const [completedTaskStatus, setCompletedTaskStatus] = useState(false);

  const AddNewTask = () => {
    if (task !== "") {
      setTaskContainer([...taskContainer, task]);
      setTask("");
    }
  };

  console.log("taskContainer", taskContainer);

  return (
    <div className="mainContainer">
      <div className="todoappContainer">
        <input
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
        <button onClick={AddNewTask}>Add</button>
      </div>
      <div
        className="todoListContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 10px 0 10px",
        }}
      >
        <div className="completedTask" style={{ position: "relative" }}>
          <button
            onClick={() => {
              setCompletedTaskStatus(true);
            }}
          >
            completed Task
          </button>
          {completedTaskStatus
            ? taskCompleted.map((item) => {
                return (
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0 10px 0 10px",
                    }}
                  >
                    {item}
                  </span>
                );
              })
            : ""}
        </div>
        <div className="AllTask">
          <button
            onClick={() => {
              setCompletedTaskStatus(false);
            }}
          >
            All Task
          </button>
          {completedTaskStatus ? (
            ""
          ) : (
            <AllTask
              taskContainer={taskContainer}
              setTaskContainer={setTaskContainer}
              taskCompleted={taskCompleted}
              setTaskCompleted={setTaskCompleted}
              taskStatuses={taskStatuses}
              setTaskStatuses={setTaskStatuses}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
