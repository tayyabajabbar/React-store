import React, { useEffect , useState } from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom'
// import ProductsDetails from './ProductsDetails'
const Products = () => {
const[products,setProducts]=useState([])
const[allProducts,setallProducts]=useState(["All products"])
const[category,setCategory]=useState([])
const navigate=useNavigate()


    const getProducts=async()=>{
       
             const fetchProducts=await fetch('https://dummyjson.com/products');
    

           
         
        const data= await fetchProducts.json();
        console.log(data);
        setProducts(data.products);
        setallProducts(data.products);
    }



    useEffect(()=>{
  getProducts();
    },[])
  
    const showDetail=(cardDetails)=>{
        let id=cardDetails.id;
        navigate(`user/${id}`)
    }

    const handleSearch=(e)=>{
  const searchValue=e.target.value;
  let allProducts=[...products];
  const filtered=allProducts.filter((currVal)=>{
    return currVal.title.toLowerCase().includes
    (searchValue)
  })
setProducts(filtered);
    }

    const handleSelect=(e)=>{
    const selectVal=e.target.value;
    setCategory(selectVal);
    if(selectVal == "Price low to high"){
        let sorting=[...allProducts].sort((a,b)=>{
            return a.price-b.price;
        });
        setProducts(sorting)
    }
    if(selectVal=="Price high to low"){
        let sorting=[...allProducts].sort((a,b)=>{
            return b.price-a.price;
        })
          setProducts(sorting)
    }
    if(selectVal=="All"){
        setProducts(allProducts)
    }
    }
    return(
        <>
        <div className='navbar'>
            <div className='heading'>All In One Store </div>
            <div>
                <input placeholder='Search for product...'onChange={handleSearch}/>
             
            </div>

            <div>
                <select value={category} onChange={handleSelect}>
                    <option value="All products">All products</option>
                    <option value="Price low to high">Price low to high</option>
                    <option value="Price high to low">Price high to low</option>
                </select>
            </div>

           

        </div>


        <div className="sale-banner">
   FLASH SALE: 20% OFF All Groceries & Beauty | 🚚 FREE DELIVERY on Orders over $50
</div>

        
       <div className='productContainer'>
        {products.length>0?(
             products.map((currVal,index)=>{
                return(

  


                    <div className='card' key={index} onClick={()=>showDetail(currVal)}>
                         <img src={currVal?.images[0]}/>
                         <div>Title:{currVal?.title}</div>    
                           <div>Price:{currVal?.price*88}</div>    
                       
                          
                    </div>

                )
})
):(<p>Sorry:no product avilable</p>

    )
}
       </div>
             </>
    )

}

export default Products





















 // const fetchProducts=await fetch ('https://api.escuelajs.co/api/v1/products');
        //    const fetchProducts=await fetch ('https://dummyjson.com/products');