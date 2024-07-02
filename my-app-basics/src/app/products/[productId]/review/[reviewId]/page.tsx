"use client"
import { notFound } from "next/navigation"

function randomInt(count:number){
return Math.floor(Math.random()*count)
}
export default function ProductReview({params}:{params:{productId:string , reviewId:string}}){
    const random = randomInt(2)
    // if(random===1){
    //     throw new Error("review id error loading ")
    // }
    if(parseInt(params.reviewId ) > 1000){
         notFound();
    }
    return (
        <>
        this is a product review {params.reviewId} of product {params.productId}
        </>
    )
}