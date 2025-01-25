import React from 'react';
import Card from './Card';

const CardList = () => {
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
      dueDate: "2024-01-01",
    },
    {
      label: "Important",
      title: "Learn Python",
      description: "Learn Python from scratch",
      dueDate: "2025-01-01",
    },
    {
      label: "Important",
      title: "Learn Python",
      description: "Learn Python from scratch",
      dueDate: "2025-01-01",
    },
    {
      label: "Important",
      title: "Learn Python",
      description: "Learn Python from scratch",
      dueDate: "2025-01-01",
    },
    {
      label: "Important",
      title: "Learn Python",
      description: "Learn Python from scratch",
      dueDate: "2025-01-01",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 justify-center items-center">
      {todos.map((todo, index) => (
        <Card
          key={index}
          label={todo.label}
          title={todo.title}
          description={todo.description}
          dueDate={todo.dueDate}
        />
      ))}
    </div>
  );
};

export default CardList;
