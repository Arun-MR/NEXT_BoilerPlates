import { NextResponse,type  NextRequest  } from "next/server";


export default function Middleware (request :NextRequest){
   
    if(request.nextUrl.pathname==='/home'){

        const response = NextResponse.next()
        const themePreference= request.cookies.get("theme")
        if(!themePreference){
            response.cookies.set("theme","dark")
        }
        return response
    }  
 }

 export const config ={
    matcher:[
        "/home"]
}