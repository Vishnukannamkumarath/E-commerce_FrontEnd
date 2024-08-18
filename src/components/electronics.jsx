import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './test.css';
function Elec({ image, title, currentPrice, originalPrice, description, loved }){
  const [brand,setbrand]=useState('');
  const [price,setprice]=useState(0);
  const navigate=useNavigate();
  function branded(e){
    setbrand(e.target.value)
  }
  function priced(e){
    setprice(e.target.value)
  }
  function Spec(){
    navigate('/samdetails')

  }
  function one(){
    navigate('/onep')
  }
  function ip(){
    navigate('/iphone')
  }
  async function Cart(req,res){
    const response=await axios.post('http://localhost:5002/cart',{
        brand,price
    });
    
}
    return( 
        <div>
            <div style={{backgroundColor:"green"}}><l style={{marginLeft:"200px",fontSize:"48px",color:"white"}}><b>ELECTRONICS</b></l><br/></div>
           <div style={{display:"flex"}}>
           <div className="card">
      <div className="card-header">
        <img src="oneplus.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>One plus Nord</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="pixel.jpg" alt='pixel' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Google pixel 5A</h3>
        <p className="price">
          <span className="current-price">18$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,32565 rating 772267 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
      </div>
      <div className="card">
      <div className="card-header">
        <img src="s21.jpg" alt='Samsung s21' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Samsung Galaxy s21</h3>
        <p className="price">
          <span className="current-price">30$</span>
          <span className="original-price">$47</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
      </div>
      <div className="card">
      <div className="card-header">
        <img src="iphone.png" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>iphone 12</h3>
        <p className="price">
          <span className="current-price">50$</span>
          <span className="original-price">$70</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
        <div><button className="buy-now">Spec Details</button></div>
      </div>
      </div>
            </div>
        </div>
        

    );
}export default Elec;