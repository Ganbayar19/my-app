"use client";

import HomePage from "./page";

inport {useState} from "react"

export const Counter = () => {
 const [count, setCount] = useState(0);
 const decrease = () => {
   setCount(count - 1) 
   console.log(count)
 };
 
 const increase = () =>{
    setCount(count + 1)
    console.log(count)
 };

 return(
   <div className="w-screen h-screen justify-center align-center flex">
    <div className="flex gap-6 items-center">
        <button onClick={decrease} className="p-4 bg-white rounded-md text black"></button>
    </div>
   </div> 
 )
}

export default HomePage;

