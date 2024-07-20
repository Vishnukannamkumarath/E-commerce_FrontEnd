import {useState} from 'react';
import axios from 'axios';
const gstyle={
    border:"1px solid black",
    backgroundColor:"#FFFFF9",
    padding:"5px",
    marginLeft:"20px",
    width:'350px',
    height:"350px",
    marginTop:"40px",
    fontSize:"12px",
}
function Groc(){
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
            <div style={gstyle}><img src="qualiflower.webp" style={{width:"200px",height:"200px"}} alt="Qualiflower"/><figcaption style={{fontSize:"20px"}}>{Qualiflowers}</figcaption><br/>
            <button onClick={Qualiflower}><b>+</b></button>
            <button onClick={Qualiflowers} style={{marginLeft:"10px"}}><b>-</b></button>
            <p>Quantity={qqty}Kg</p>
            <p>Total Cost={qprice}</p>
            <button>Buy</button><button style={{marginLeft:"10px"}} onClick={Cart}>Add to Cart</button>
            </div>
           <div style={gstyle}><img src="carrot.webp" style={{width:"200px",height:"200px"}} alt="Qualiflower"/><figcaption style={{fontSize:"20px"}}>Carrots</figcaption><br/>
            <button onClick={Carrot}><b>+</b></button>
            <button onClick={Carrots}  style={{marginLeft:"10px"}}><b>-</b></button>
            <p>Quantity={caqty}Kg</p>
            <p>Total Cost={caprice}</p>
            <button>Buy</button><button style={{marginLeft:"10px"}} onClick={Cartca}>Add to Cart</button></div>
            <div style={gstyle}><img src="capsicum.webp" style={{width:"200px",height:"200px"}} alt="Capsicumms"/><figcaption style={{fontSize:"20px"}}>Capsiccums</figcaption><br/>
            <button onClick={Capsiccum}><b>+</b></button>
            <button onClick={Capsiccums}  style={{marginLeft:"10px"}}><b>-</b></button>
            <p>Quantity={cqty}Kg</p>
            <p>Total Cost={cprice}</p>
            <button>Buy</button>
            <button style={{marginLeft:"10px"}} onClick={Cartc}>Add to Cart</button></div>
            </div>
           
            
        </div>

    );
}export default Groc;