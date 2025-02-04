import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const DashboardMain = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", description: "Complete the React tutorial.", completed: false },
    { id: 2, title: "Build a Project", description: "Start working on the to-do project.", completed: false },
    { id: 3, title: "Read Documentation", description: "Go through the official React docs.", completed: false },
  ]);

  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(userContext.isAuthenticated)
  if(!userContext.isAuthenticated) navigate('/sign-in')
  })
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="main p-4 sm:p-6 max-w-5xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6">
        <p className="text-xl sm:text-2xl font-semibold">Dashboard</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto mt-2 sm:mt-0">
          Add Task
        </button>
      </div>

      <div className="topcards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="card bg-white rounded-lg shadow-md text-center p-4">
          <p className="text-base sm:text-lg font-semibold text-gray-500">Total Tasks</p>
          <p className="text-2xl sm:text-3xl font-semibold">{tasks.length}</p>
        </div>
        <div className="card bg-white rounded-lg shadow-md text-center p-4">
          <p className="text-base sm:text-lg font-semibold text-gray-500">Completed Tasks</p>
          <p className="text-2xl sm:text-3xl font-semibold">
            {tasks.filter((task) => task.completed).length}
          </p>
        </div>
        
      </div>

      <div className="recent-tasks bg-white rounded-lg p-4 sm:p-6 mt-7 shadow-md">
        <p className="text-lg sm:text-xl text-slate-800 font-semibold mb-4">Recent Tasks</p>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="recent-card bg-gray-100 rounded-lg flex flex-col sm:flex-row items-start p-4 mb-4 shadow-sm"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="w-5 h-5 mt-1 sm:mt-0 sm:mr-4"
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
