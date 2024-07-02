import {Product} from "@/components/product"
import {Reviews} from "@/components/reviews"
import { Suspense } from "react"

export default function ProductDetailsPage(){
    return (
        <div>
            <h1>Product Details</h1>
            <Suspense fallback={<p>Loading product</p>}>
                <Product/>
            </Suspense>
            <Suspense fallback={<p>Loading reviews of product</p>}>
                <Reviews/>
            </Suspense>
        </div>
    )
}