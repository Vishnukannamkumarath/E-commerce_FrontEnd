import {useState} from 'react';
import axios from 'axios';
import './test.css'
function Groc({ image, title, currentPrice, originalPrice, description, loved }){
    const [qqty,setqqty]=useState(0);
    const [qprice,setqprice]=useState(0);
    const [caqty,setcaqty]=useState(0);
    const [caprice,setcaprice]=useState(0);
    const [cqty,setcqty]=useState(0);
    const [cprice,setcprice]=useState(0);
    const fname="Qualiflower";
    const sname="Carrot";
    const tname="Capsiccum";
  
    

    function Qualiflower(){
        setqqty(qqty+1)
        setqprice(qprice+100)
    }
    function Qualiflowers(){
        setqqty(qqty-1)
        setqprice(qprice-100)
    }
    function Carrot(){
        setcaqty(caqty+1)
        setcaprice(caprice+100)
    }
    function Carrots(){
        setcaqty(caqty-1)
        setcaprice(caprice-100)
    }
    function Capsiccum(){
        setcqty(cqty+1)
        setcprice(cprice+100)
    }
    function Capsiccums(){
        setcqty(cqty-1)
        setcprice(cprice-100)
    }
    async function Cart(req,res){
        const response=await axios.post('http://localhost:5002/grocery',{
            fname,qqty,qprice
        });
        
    }
    async function Cartca(req,res){
        const response=await axios.post('http://localhost:5002/grocery',{
            sname,caqty,caprice
        });
    }
    async function Cartc(req,res){
        const response=await axios.post('http://localhost:5002/grocery',{
            tname,cqty,cprice
        });
    }
    
    return(
        <div>
          <div style={{backgroundColor:"green"}}> <l style={{marginLeft:"200px",fontSize:"48px",color:"white"}}><b>Grocery</b></l><br/></div> 
          <div  style={{display:"flex"}}>
          <div className="card">
      <div className="card-header">
        <img src="qualiflower.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Qualiflowers</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
      
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="carrot.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Carrots</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="capsicum.webp" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Capsicumms</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="colgate.jpeg" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Colgate Tooth Pastes</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="sur.jpeg" alt='oneplus' />
        <div className="favorite">
          <span>&#9829;</span>
          {loved && <span className="you-love">You love this!</span>}
        </div>
      </div>
      <div className="card-body">
        <h3>Surf Excell Matic Liquid</h3>
        <p className="price">
          <span className="current-price">21$</span>
          <span className="original-price">$27</span>
        </p>
        <p className="description">11,3256 rating 7722 Reviews</p>
        <button className="buy-now">Buy Now</button>
        <div style={{padding:"2px"}}><button className="buy-now">Add to Cart</button></div>
      </div>
    </div>
           
            
        </div>
        </div>

    );
}export default Groc;