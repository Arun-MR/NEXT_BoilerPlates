export const dynamic = "force-dynamic " 
//used inorder to make the page dynamic on build as GET requests are cached automatically  

export async function GET (){
    const date = new Date().toLocaleTimeString()
    return new Response(JSON.stringify({time:date}))
}