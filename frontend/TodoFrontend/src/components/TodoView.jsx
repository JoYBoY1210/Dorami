import React from 'react'
import CardList from './CardList'

const TodoView = () => {


  return (
    <div className="todoview">
      <div className="flex justify-between items-center pt-5 w-full mb-6">
        <p className="text-2xl font-semibold">Tasks</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Task
        </button>
      </div>

      <div className='cards pt-6'>
      <CardList />

      </div>
      

    </div>
  )
}

export default TodoView