import React, { useEffect , useState } from 'react'

import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'

const ProductsDetails = () => {
const[product,setProduct]=useState(null)
const navigate=useNavigate()

const {id}= useParams();
console.log(id);

    const getProducts=async()=>{
       
             const fetchProducts=await fetch(`https://dummyjson.com/products/${id}`);
    

           
         
        const data= await fetchProducts.json();
        console.log(data);
        console.log("product -details",data);
        setProduct(data);
    }



    useEffect(()=>{
  getProducts();
    },[])

    return(
        <>
        
       <div className='productContainer'>
        {product?
            
              
                    <div className='card' >
                         <img src={product?.images?.[0]}/>
                         <div>Title:{product?.title}</div>    
                           <div>Price:{product?.price*88}</div>    
                           <div>About:{product?.description}</div>
                          
                    </div>            
:
<p>Sorry no product available</p>
}
</div>
             </>
    )
}



export default ProductsDetails


















