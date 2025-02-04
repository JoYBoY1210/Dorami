import React, { useState } from "react";
import CardList from "./CardList";
import { useDate } from "../context/DateContext";
import CreateTodo from "./CreateTodo";
import Cookies from "js-cookie"; 
import { getCSRFTokenFromCookie } from "./getcsrf";


const TodoView = () => {
  const { selectedDate, setSelectedDate } = useDate();
  const [isCreateTodoOpen, setIsCreateTodoOpen] = useState(false);
  const [todos, setTodos] = useState([  
    {
      label: "Work",
      title: "Learn React",
      description: "Learn React from scratch",
      dueDate: "1738348200000",
    },
    {
      label: "Timepass",
      title: "Learn JavaScript",
      description: "Learn JavaScript from scratch",
      dueDate: "1738348200000",
    },
  ]);

  const openCreateTodoModal = () => {
    setIsCreateTodoOpen(true);
  };

  const closeCreateTodoModal = () => {
    setIsCreateTodoOpen(false);
  };

  const handleTodoAdded = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log("New Todo Added:", newTodo);
  };

  const handleTodoDeleted = async (todoId) => {
    try {
      const csrftoken=getCSRFTokenFromCookie();
      if (!csrftoken) {
        console.error("Token not found");
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/todos/${todoId}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", 
          'X-CSRFToken': csrftoken,
        },
      });

      if (response.ok) {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId));
        console.log('Todo deleted successfully');
      } else {
        console.error('Failed to delete todo');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="todoview">
      <div className="flex justify-between items-center pt-5 w-full mb-6">
        <p className="text-2xl font-semibold">Tasks</p>
        <button
          onClick={openCreateTodoModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>

      {isCreateTodoOpen && (
        <CreateTodo
          onClose={closeCreateTodoModal}
          onTodoAdded={handleTodoAdded}
        />
      )}

      <div className="cards pt-6">
        <CardList todos={todos} onDeleteTodo={handleTodoDeleted} />
      </div>
    </div>
  );
};

export default TodoView;
