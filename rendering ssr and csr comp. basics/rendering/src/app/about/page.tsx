import { cookies } from "next/headers"

export default function about(){
    const cookieStore = cookies()
    const theme = cookieStore.get("theme")
    console.log(theme)
    console.log("server component")
    return <h1>About page{new Date().toLocaleTimeString()} </h1>
}