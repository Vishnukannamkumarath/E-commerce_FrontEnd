import axios from 'axios';
import {useState,useEffect} from 'react';
function CartL(){
   const [item,setitem]=useState('');
    useEffect(()=>{
        const fetchitem=async()=>{
            try{
        const response=await axios.get('http://localhost:5002/dgrocery')
        setitem(response.data)
    
            }
            catch(error){
                console.error('error fetching item:',error);
            }
        };
        fetchitem();
    },[]);
    return(
        <div>
            <h1>Your Cart list</h1>
           <div style={{display:"flex",marginLeft:"20px"}}><h1>Item_Name</h1><h1 style={{marginLeft:"20px"}}>Quantity</h1><h1 style={{marginLeft:"20px"}}>Price</h1></div> 
            <ul>
                {item.map(item=>(
            <h1>{item.fname}---{item.qqty}----{item.qprice}</h1>
        ))};         
            </ul>

        </div>
   );
}export default CartL;
