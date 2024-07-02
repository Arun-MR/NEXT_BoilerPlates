import { NextResponse,type  NextRequest  } from "next/server";

// export default function Middleware (request :NextRequest){

//     return NextResponse.redirect(new URL("/",request.url)) 
// }

///////////////////////////////////////////////////////////////////////////////

// export default function Middleware (request :NextRequest){
//     if(request.nextUrl.pathname==="/profile"){
//         return NextResponse.redirect(new URL("/time ",request.url))
//     }
//     if(request.nextUrl.pathname==='/hello'){
//         //rewrite allows you to redirect without changing the url in the browser
//         return NextResponse.rewrite(new URL("/time ",request.url))
//     }   
// }

//////////////////////////////////////////////////////////////////////////////

export default function Middleware (request :NextRequest){
    const response = NextResponse.next()
    const themePreference= request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme","dark")
    }
    response.headers.set("custom-header","custom")
    return response
}

//////////////////////////////////////////////////////////////////////////////

//use config file as this makes the middleware run only for the matching routes 
//make changes in the matcher accoredingly
export const config ={
    matcher:[
        // "/profile",
        // "/hello",
        "/time"]
}