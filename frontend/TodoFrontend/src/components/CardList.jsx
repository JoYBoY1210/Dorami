import React from "react";
import Card from "./Card";
import { useDate } from "../context/DateContext";
import moment from "moment";


const CardList = ({todos,onDeleteTodo,onCompletedTodo}) => {
  const { selectedDate } = useDate(); 

  

  const filterTodos = selectedDate
  ? todos.filter((todo) => {
    // console.log(todo,selectedDate)
      return moment(todo.due_date , 'x').isSame(moment(selectedDate, 'x')); 
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
            onDeleteTodo={()=>onDeleteTodo(todo.id)}
            onCompletedTodo={()=>onCompletedTodo(todo.id)}
            completed={todo.completed}
          />
        ))
      ) : (
        <p className="text-center">No todos for this day</p>
      )}
    </div>
  );
};

export default CardList;