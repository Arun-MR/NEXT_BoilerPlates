"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct (){
    const router = useRouter()
    const handleClick = ()=>{
        console.log("product was ordered ")
        router.push("/")
        // router.back()
        // router.forward()
        // router.replace('/')
    }
    return (
        <>
        <h1>order Product </h1>
        <button onClick={handleClick}> Place order </button>
        </>
    )
}