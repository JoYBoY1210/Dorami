import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Card from './components/Card'
import CardList from './components/CardList'
import Dashboard from './components/DashboardMain'
import TodoView from './components/TodoView'



function App() {
  return (
   
      <div className="bg-gray-200 flex">
      <div className="navigation ">
        <Navigation />
      </div>
      <div className="dashboard w-full p-3">
        <TodoView />
      </div>
     
      
    </div>
      
    
    
  )
}

export default App
