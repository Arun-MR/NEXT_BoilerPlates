"use client"

import { useState } from "react"
export default function Dashboard (){
const[name , setName]= useState("")

console.log("dashboard client component ")
    return ( <div>
        <h1>Dashboard page </h1>
        <input type="text" onChange={e=>setName(e.target.value)} />
        <h1>entered name is {name}</h1>
    </div> )
}