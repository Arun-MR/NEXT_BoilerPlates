import {comments} from './data'
import { type NextRequest } from "next/server";

export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query")       // http://localhost:3000/comments/query=first
    const filteredComments = query?comments.filter((comment=>comment.text.includes(query))):comments
    console.log(filteredComments)
    return new Response(JSON.stringify(filteredComments))

}
export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = { id: comments.length + 1, text: comment.text };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  }