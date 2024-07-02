import Link from "next/link"
export default function Products (){
    let productId =100
    return (<>
<Link href="/">Home</Link>
    <h1>Product List</h1>
    
    <h2><Link href="/products/1">product 1</Link></h2>
    <h2><Link href="/products/2">product 2</Link></h2>
    <h2><Link href="/products/3" replace>product 3</Link></h2>
    <h2><Link href={`/products/${productId}`}>Product { productId}</Link></h2>
    </>)
}