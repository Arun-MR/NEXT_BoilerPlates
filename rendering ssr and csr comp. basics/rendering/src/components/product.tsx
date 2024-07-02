export const Product = async function (){
    await new Promise ((resolve)=>setTimeout(resolve,2000))
    return <h1>product</h1>
}