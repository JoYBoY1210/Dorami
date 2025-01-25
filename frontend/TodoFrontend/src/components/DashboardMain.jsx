import React, { useState } from "react";

const DashboardMain = () => {
  
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", description: "Complete the React tutorial.", completed: false },
    { id: 2, title: "Build a Project", description: "Start working on the to-do project.", completed: false },
    { id: 3, title: "Read Documentation", description: "Go through the official React docs.", completed: false },
  ]);

  
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="main p-6">
      
      <div className="flex justify-between items-center w-full mb-6">
        <p className="text-2xl font-semibold">Dashboard</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Task
        </button>
      </div>

      
      <div className="topcards grid grid-cols-1 md:grid-cols-3 pt-6 gap-4">
        <div className="card bg-white rounded-lg shadow-md text-center p-4">
          <p className="text-lg font-semibold text-gray-500">Total Tasks</p>
          <p className="text-3xl font-semibold">{tasks.length}</p>
        </div>
        <div className="card bg-white rounded-lg shadow-md text-center p-4">
          <p className="text-lg font-semibold text-gray-500">Completed Tasks</p>
          <p className="text-3xl font-semibold">
            {tasks.filter((task) => task.completed).length}
          </p>
        </div>
        <div className="card bg-white rounded-lg shadow-md text-center p-4">
          <p className="text-lg font-semibold text-gray-500">Overdue Tasks</p>
          <p className="text-3xl font-semibold">0</p>
        </div>
      </div>

      
      <div className="recent-tasks bg-white rounded-lg p-6 mt-7 shadow-md">
        <p className="text-xl text-slate-800 font-semibold mb-4">
          Recent Tasks
        </p>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="recent-card bg-gray-100 rounded-lg flex items-start p-4 mb-4 shadow-sm"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="w-5 h-5 mt-1 mr-4"
            />
            <div>
              <p
                className={`font-medium text-gray-800 mb-1 ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  task.completed ? "line-through text-gray-400" : "text-gray-600"
                }`}
              >
                {task.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMain;
