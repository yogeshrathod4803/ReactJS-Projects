import React, { useState } from "react";
import AllTask from "./allTask";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskContainer, setTaskContainer] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [checkCompltedTask, setCheckCompletedTask] = useState(false);
  const [taskStatuses, setTaskStatuses] = useState({});

  const addNEwTask = () => {
    if (task !== "") {
      setTaskContainer([...taskContainer, task]);
      setTask("");
    }
  };

  const handleClick = () => {
    setCheckCompletedTask(true);
  };

  console.log("all task", taskContainer);

  return (
    <div className="mainContainer">
      <div className="todoappContainer">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button onClick={addNEwTask}>Add</button>
      </div>

      <div>
        <div
          className="featureSection"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0 10px 0 10px",
          }}
        >
          <div className="completedTask" style={{ position: "relative" }}>
            <button onClick={handleClick}>Completed</button>
            {checkCompltedTask
              ? completedTask.map((item) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 10px 0 10px",
                      }}
                    >
                      <span>{item}</span>
                    </div>
                  );
                })
              : ""}
          </div>
          <div style={{ position: "" }}>
            <button
              onClick={() => {
                setCheckCompletedTask(false);
              }}
            >
              All task List
            </button>
            {checkCompltedTask ? (
              ""
            ) : (
              <AllTask
                taskContainer={taskContainer}
                setTaskContainer={setTaskContainer}
                setCompletedTask={setCompletedTask}
                completedTask={completedTask}
                setTaskStatuses={setTaskStatuses}
                taskStatuses={taskStatuses}
              />
            )}
          </div>
        </div>

        {/* <PendingTask /> */}
      </div>
    </div>
  );
};

export default Home;
