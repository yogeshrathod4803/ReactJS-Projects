import React from "react";

const AllTask = ({
  taskContainer,
  setTaskContainer,
  setCompletedTask,
  completedTask,
  taskStatuses,
  setTaskStatuses,
}) => {
  const handleCheckboxChange = (item, idx) => {
    const updatedStatuses = {
      ...taskStatuses,
      [idx]: !taskStatuses[idx], // Toggle task status
    };
    setTaskStatuses(updatedStatuses);

    if (!taskStatuses[idx]) {
      setCompletedTask([...completedTask, item]); // Add task to completed if checked
    } else {
      setCompletedTask(completedTask.filter((task) => task !== item)); // Remove if unchecked
    }
  };

  return (
    <div className="taskContainer">
      <div className="AllTask">
        {taskContainer.map((item, idx) => (
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 10px",
            }}
            key={idx}
          >
            <input
              type="checkbox"
              checked={!!taskStatuses[idx]} // Handle individual task status
              onChange={() => handleCheckboxChange(item, idx)}
            />
            <li style={{ listStyle: "none" }}>
              <span
                style={{
                  textDecoration: taskStatuses[idx] ? "line-through" : "none",
                }}
              >
                {item}
              </span>
            </li>
            <button
              onClick={() => {
                setTaskContainer(taskContainer.filter((task) => task !== item));
                const updatedStatuses = { ...taskStatuses };
                delete updatedStatuses[idx];
                setTaskStatuses(updatedStatuses);
              }}
            >
              delete
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
