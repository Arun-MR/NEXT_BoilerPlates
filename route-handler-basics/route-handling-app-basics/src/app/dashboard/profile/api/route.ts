import { NextRequest } from "next/server"
import { headers ,cookies} from "next/headers"
export async function GET(request:NextRequest){
    const requestHeaders= new Headers(request.headers) //used to access headers from request 
    const headerList =headers() //used to access headers from request (2 ways)
   
    const theme = request.cookies.get("theme")
    cookies().set("themesPerPage","20")

    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"))
    console.log(theme)
    return new Response ("<h1> hello world</h1>",
      {  headers:{
        "Content-Type": "text/html",
        "Set-Cookie":"theme=dark"
        }}
    )
}

