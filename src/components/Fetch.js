import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchData =async()=>{
            try{

            const Response=await fetch("https://fakestoreapi.com/products?limit=5");
        const data=await Response.json();
        setData(data);
            
    }
    catch(error){
        console.log("error occured",error);
    }
    };
    fetchData();
},[]);
  return (
    <div>
      
    </div>
  )
}

export default Fetch
