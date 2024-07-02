import { Metadata } from "next"
import OrderProduct from "../../order-product/page"

type Props ={params:{productId:string}}

export const generateMetadata = ({params}:Props):Metadata=>{
    return {
        title:`Product ${params.productId}`
    }
}


export default function ProductDetails({params}:Props){
    return (<>
        <h1>this is the product details page {params.productId}</h1>
        <OrderProduct/>
    </>
    )
}
