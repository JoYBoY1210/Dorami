import React from "react";
import Card from "./Card";
import { useDate } from "../context/DateContext";
import moment from "moment";
import catImage from "../assets/catImage.webp";

const CardList = ({ todos, onDeleteTodo, onCompletedTodo }) => {
  const { selectedDate } = useDate();

  const filterTodos = selectedDate
    ? todos.filter((todo) => {
        // console.log(todo,selectedDate)
        return moment(todo.due_date, "x").isSame(moment(selectedDate, "x"));
      })
    : todos;

  // console.log(todos)
  // console.log(filterTodos)

  // console.log(moment(todos[0].dueDate , 'x').format('x'));
  // console.log(selectedDate)
  // console.log(todos[0].dueDate)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center">
      {filterTodos.length > 0 ? (
        filterTodos.map((todo, index) => (
          <Card
            key={todo.id}
            id={todo.id}
            label={todo.label}
            title={todo.title}
            description={todo.description}
            dueDate={todo.due_date}
            onDeleteTodo={() => onDeleteTodo(todo.id)}
            onCompletedTodo={() => onCompletedTodo(todo.id)}
            completed={todo.completed}
          />
        ))
      ) : (
        <div className="flex justify-center w-[1239px] items-center mt-4">
          <img
            className="w-[700px] h-auto object-contain"
            src={catImage}
            alt="No Todos for this day"
          />
        </div>
      )}
    </div>
  );
};

export default CardList;
