import React from "react";
import TodoView from "../TodoView";
import Navigation from "../Navigation";


const TodoPage = () => {
  return (
    <div className="gap-x-2 bg-gray-200 w-full flex min-h-screen h-full">

          <div className="navigation  h-full w-1/5 fixed">
            <Navigation />
          </div>
          <div className="w-1/5 h-full ">

          </div>
          <div className="dashboard w-4/5 p-3 h-full">
            <TodoView />
          </div>

</div>
  )
}

export default TodoPage
