import Link from "next/link"
export default function home (){
    return (
    <>
    <h1>home </h1>
    <button><Link href= "/profile">go to profile</Link> </button>
    </>)
}