import React from "react";
import Card from "./Card";
import { useDate } from "../context/DateContext";

const CardList = () => {
  const { selectedDate } = useDate(); // Get selectedDate from context

  const todos = [
    {
      label: "Work",
      title: "Learn React",
      description: "Learn React from scratch",
      dueDate: "2023-01-01",
    },
    {
      label: "Timepass",
      title: "Learn JavaScript",
      description: "Learn JavaScript from scratch",
      dueDate: "1738348200000",
    },
    {
      label: "Important",
      title: "Learn Python",
      description: "Learn Python from scratch",
      dueDate: "2025-1-2",
    },
    {
      label: "Important",
      title: "Learn Python",
      description: "Learn Python from scratch",
      dueDate: "2025-1-3",
    },
    {
      label: "Important",
      title: "Learn Python",
      description: "Learn Python from scratch",
      dueDate: "2025-01-04",
    },
    {
      label: "Important",
      title: "Learn Python",
      description: "Learn Python from scratch",
      dueDate: "2025-01-06",
    },
  ];

  // const formatDate = (date) => {
  //   // console.log(date.toISOString().split('T')[0])
  //   return date.toISOString().split('T')[0];
  // };

  const filterTodos = selectedDate
    ? todos.filter((todo) => {
        // const todoDate = new Date(todo.dueDate);
        return todo.dueDate === selectedDate;
      })
    : todos;

  return (
    <div className="grid grid-cols-4 gap-6 justify-center items-center">
      {filterTodos.length > 0 ? (
        filterTodos.map((todo, index) => (
          <Card
            key={index}
            label={todo.label}
            title={todo.title}
            description={todo.description}
            dueDate={todo.dueDate}
          />
        ))
      ) : (
        <p>No todos for this day</p>
      )}
    </div>
  );
};

export default CardList;
