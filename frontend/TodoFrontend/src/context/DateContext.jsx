// import React,{useState,useContext,createContext, Children} from 'react'

import moment from "moment";
import { createContext, useState,useContext } from "react";


// export const DateContext = createContext()

// export const DateContextProvider=({Children})=>{
//     const[selectedDate, setSelectedDate] = useState(new Date());

//     return(
//        <DateContext.Provider value={{selectedDate, setSelectedDate}}>
//         {Children}
//         </DateContext.Provider>
//     )
// }
 

export const DateContext = createContext();

export const DateContextProvider = ( { children }) => {
    const [selectedDate, setSelectedDate] = useState(moment().startOf('day').format('x'));
    // console.log(selectedDate)
    return(
    <DateContext.Provider value={{selectedDate, setSelectedDate}}>
        {children}
    </DateContext.Provider>
    )
}


export const useDate=()=>useContext(DateContext);