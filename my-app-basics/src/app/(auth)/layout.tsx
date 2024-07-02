

'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./style.css"
import { useState } from "react"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname()
    const [input,setInput]=useState("")
const navLinks = [
    {
       name:"Login", href:"/login",
       
    },
    {
        name:"register",href:"/register"
    },
    // {
    //     name:"forgot Password",href:"/forgotPassword"
    // }
]
    return (<>
    <div>
   { /* if you use template.tsx instead of naming layout.tsx the states are not preserved and the components are rerendered with every navigational change  */}
        <input placeholder="Enter text here ..." value={input} onChange={e=>setInput(e.target.value)}/> 
    </div>
    {navLinks.map((link)=>{
        const isActive = pathname.startsWith(link.href)
        return (
            
            <div key={link.name}>
                <Link href={`${link.href}`} className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}>
                {link.name}
                </Link></div>
        )
    })}
      {children}
      <h2>this is a layout feature </h2>
    </>
    )
  }
