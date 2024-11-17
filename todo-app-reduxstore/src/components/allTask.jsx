import React from "react";

const AllTask = ({
  taskContainer,
  setTaskContainer,
  setTaskCompleted,
  taskCompleted,
  taskStatuses,
  setTaskStatuses,
}) => {
  const handleCheckBoxChange = (item, idx) => {
    const updatedStatus = {
      ...taskStatuses,
      [idx]: !taskStatuses[idx],
    };

    setTaskStatuses(updatedStatus);

    if (!taskStatuses[idx]) {
      setTaskCompleted([...taskCompleted, item]);
    } else {
      setTaskCompleted(taskCompleted.filter((task) => task !== item));
    }
  };
  console.log("taskCompleted", taskCompleted);

  return (
    <div className="allTask">
      <div className="taskList">
        <ul>
          {taskContainer.map((item, idx) => {
            return (
              <li style={{ listStyle: "none" }} key={idx}>
                <input
                  type="checkbox"
                  checked={!!taskStatuses[idx]}
                  onChange={() => {
                    handleCheckBoxChange(item, idx);
                  }}
                />
                <span
                  style={{
                    padding: "4px",
                    textDecoration: taskStatuses[idx] ? "line-through" : "",
                  }}
                >
                  {item}
                </span>
                <button>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllTask;
