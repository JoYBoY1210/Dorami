import moment from "moment";
import React from "react";

const Card = ({id, label, title, description,completed, dueDate,onDeleteTodo,onCompletedTodo }) => {
  return (
    <div className="outerbox bg-white rounded-lg shadow-md w-full flex flex-col justify-between">
      <div className="innerbox p-4">
        <p className="label bg-green-200 text-green-600 inline-block px-3 py-1 rounded text-sm font-medium ">
          
          {label?label:"None"}
        </p>
        <p className={`title text-2xl font-semibold mt-4 text-gray-800 ${completed?"line-through text-slate-400":""}`}>
          {title}
        </p>
        <p className="description text-gray-600 mt-3 text-sm leading-relaxed">
          {description}
        </p>
        <p className="duedate text-gray-500 mt-4 text-sm font-medium">
          Date: <span className="text-gray-700">{moment(parseInt(dueDate)).format('DD-MM-YYYY')}</span>
        </p>
      </div>

      <div className="buttons flex justify-between p-4 border-t mt-4">
      <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-4 rounded" onClick={onDeleteTodo}>
          Delete
        </button>
        
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-4 rounded" onClick={onCompletedTodo}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Card;