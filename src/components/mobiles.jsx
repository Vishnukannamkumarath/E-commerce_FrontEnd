import {useState} from 'react';
import axios from 'axios';
function Mob(){
    const[price,setprice]=useState(0);
    async function Pce(e){
       setprice(e.target.value)
       const response=await axios.post('http://localhost:5002/mobiles',{
        price
       });
    };

    return(
        <div>
            <h1>Mobile Phones</h1>
            <p>Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on E-shop. Whether you’re looking for waterdrop notch screens, a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs. The information you are reading has been last updated on 13-Jul-24. 

               iPhone 15 | iPhone 15 Plus | iPhone 15 Pro | iPhone 15 Pro Max | Vivo x 100 | OPPO Reno 11 | Xiaomi 14 CIVI | Infinix Note 40 5G | Pixel 7a | Moto Edge 40 | POCO C55 | Samsung Galaxy S24 5G | Motorola g04s</p>
<div>
    <h1>Filter</h1>
    <h2>Category</h2>
    <h3>Price</h3>
    <input type="number" placeholder='Enter your limit' onChange={Pce}/>



</div>

        </div>
    );
}export default Mob;