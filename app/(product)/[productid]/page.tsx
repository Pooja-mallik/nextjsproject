import {Metadata} from "next";
type Props ={
    params:{
        productId: string
    }
}

export const generateMetadata =async({params}:Props): Promise<Metadata> => {
    const title=await new Promise(resolve =>{
        setTimeout(()=>{
            resolve(`Product ${params.productId}`)
        },1000)
    })
    return{
        title:`Product ${params.productId}`,
    }}


export default function ProductDetails({params}:Props){
    return <h1>Details about product {params.productId}</h1>
}