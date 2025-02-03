import React from "react";
import Card from "./Card";
import { useDate } from "../context/DateContext";

const CardList = ({todos,onDeleteTodo}) => {
  const { selectedDate } = useDate(); 

  

  const filterTodos = selectedDate
    ? todos.filter((todo) => {
        return todo.dueDate === selectedDate;
      })
    : todos;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center">
      {filterTodos.length > 0 ? (
        filterTodos.map((todo, index) => (
          <Card
            key={index}
            label={todo.label}
            title={todo.title}
            description={todo.description}
            dueDate={todo.dueDate}
            onDeleteTodo={onDeleteTodo}
          />
        ))
      ) : (
        <p className="text-center">No todos for this day</p>
      )}
    </div>
  );
};

export default CardList;