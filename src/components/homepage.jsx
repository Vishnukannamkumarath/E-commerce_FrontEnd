import { useState } from "react";
import { useEffect } from "react";
import React from "react";
const navstyle={
  display: "flex",
  alignItems:" stretch",
  backgroundColor: 'rgba(0, 0, 0, 0.00)',
  border: "0px solid black",
  boxSizing: "borderBox",
  flexBasis: "auto",
  flexDirection: "row",
  flexShrink: "0px",
  listStyle:" none",
  margin: "0px",
  minHeight: "0px",
  minWidth:"0px",
  padding: "0px",
  position: "relative",
  textDecoration: "none",
  zIndex:"0px",
};
const bcolor={
  backgroundColor:"#FFF7EF"
}

const normal={
  border:'1px solid black',
  padding:"40px",
  borderRadius:"5px"
};
function HomeP(){
  const images=[
    "cimage.jpg","cimage1.jpeg","cimage2.png","cimage3.jpg"
  ];
    const[ci,setci]=useState(0);
  
  useEffect(()=>{
    let index=ci;
    const intervel=setInterval(()=>{
      index=(index+1)%images.length;
      setci(index);
    },3000);
    return()=>clearInterval(intervel);
  },[ci]);
    return(
        <div style={bcolor}>
          <div style={{display:"flex",marginLeft:"200px",color:"Blue"}}><h1>E-shop</h1>
         
            <input style={{height:"50px",width:"700px",marginTop:"20px",marginLeft:"20px",borderRadius:"20px"}} type="search" placeholder="search  for product brand and more..."/> 
            <div style={{marginTop:"30px",marginLeft:"40px",transition:"0.3s",cursor:"pointer"}}><a className="1L" title="Login" aria-haspopup="true" href="/login"><span style={{color:"green",width:"50px",height:"50px" }}> Login</span></a> </div>
            <div><a href="/cart"><img src="cart.jpg" style={{width:"50px",height:"50px",marginTop:"20px",marginLeft:"40px"}}/></a><a href="/help"><img src="dropdown.webp" style={{width:"50px",height:"50px",marginLeft:"40px"}}/></a></div>
           </div>
           <div style={navstyle}>
            <a style={{marginLeft:"250px"}} href="/grocery"><img src="grocery.jpeg" style={{width:"100px",height:"100px"}}  alt="Grocery" /><figcaption>Grocery</figcaption></a>
            <a style={{marginLeft:"100px"}} href="/mobiles"><img src="mobile.jpeg" style={{width:"100px",height:"100px"}} alt="Mobiles" /><figcaption>Mobiles</figcaption></a>
            <a style={{marginLeft:"100px"}}><img src="fasion.jpg" style={{width:"100px",height:"100px"}} alt="Fashion" /><figcaption>Fashion</figcaption></a>
            <a style={{marginLeft:"100px"}}><img src="electronics.jpeg" style={{width:"100px",height:"100px"}} alt="Electronics" /><figcaption>Electronics</figcaption></a>
            <a style={{marginLeft:"100px"}}><img src="furniture.jpg" style={{width:"100px",height:"100px"}} alt="Furniture" /><figcaption>Furnitures</figcaption></a>
            <a style={{marginLeft:"100px"}}><img src="aero.jpg" style={{width:"100px",height:"100px"}} alt="Travel" /><figcaption>Travel</figcaption></a>
            </div>
             <div style={{padding:"0px",gridAutoColumns:"100%",scrollPaddingInlineStart:"0px",msScrollSnapX:"inherit"}}>
              <img src={images[ci]}
              alt={'Slides ${ci}'}
              style={{width:"1800px",height:"300px"}}/>
            </div>
            <div style={{marginLeft:"880px"}}>
              {images.map((_,index)=>(
                <button key={index} onClick={()=>setci(index)}
              style={{
                backgroundColor: ci === index ? 'black' : 'white',
              border: '1px solid black',
              borderRadius: '50%',
              width: '10px',
              height: '10px',
              margin: '0 5px',
              cursor: 'pointer'
              }}
            />
          ))}
            </div>
            <div style={normal}>
            <h1>Best Electronics</h1>
              <div style={{display:"flex"}}>
              <a><img src="hp.jpeg" /><figcaption>Head Phone</figcaption></a>
              <a><img src="pb.webp" style={{height:"200px",marginLeft:"80px"}}/><figcaption style={{marginLeft:"80px"}}>Power Bank</figcaption></a>
              <a><img src="lap.jpeg" style={{marginLeft:"80px"}}/><figcaption style={{marginLeft:"100px"}}>Lap Top</figcaption></a>
              <a><img src="mobile.jpeg" style={{marginLeft:"80px"}}/><figcaption style={{marginLeft:"80px"}}>Mobiles</figcaption></a>
              <a><img src="watch.jpeg" style={{marginLeft:"80px"}}/><figcaption style={{marginLeft:"80px"}}>Watches</figcaption></a>
              <a><img src="camera.jpg" style={{marginLeft:"40px",height:"200px",width:"200px"}}/><figcaption style={{marginLeft:"80px"}}>Cameras</figcaption></a>
              </div>
            </div>
            <div style={normal}>
              <h1>Beauty,Food,Toys and more</h1>
              <div style={{display:"flex"}}>
              <a><img src="car.jpg" style={{height:"200px",width:"200px"}}/><figcaption><b>Remote Car</b><br/>up to 20% off</figcaption></a>
              <a><img src="cycle.webp" style={{height:"200px",marginLeft:"80px"}}/><figcaption style={{marginLeft:"80px"}}><b> Cycles</b><br></br>up to 10% off</figcaption></a>
              <a><img src="guitar.jpg" style={{marginLeft:"80px",height:"200px",width:"200px"}}/><figcaption style={{marginLeft:"100px"}}><b>String Instruments</b><br/>up to 60% off</figcaption></a>
              <a><img src="mat.jpg" style={{marginLeft:"80px",height:"200px",width:"200px"}}/><figcaption style={{marginLeft:"80px"}}><b>Yoga Mat</b><br/>up to 50% off</figcaption></a>
              <a><img src="bat.jpg" style={{marginLeft:"80px",height:"200px",width:"200px"}}/><figcaption style={{marginLeft:"80px"}}><b>Best of action Toys</b><br/>up to 40% off</figcaption></a>
              <a><img src="teddy.jpg" style={{marginLeft:"40px",height:"200px",width:"200px"}}/><figcaption style={{marginLeft:"80px"}}><b>Teddy</b><br/>up to 20% off</figcaption></a>
              </div>
              </div>

              <div style={normal}>
                <h1>Top Deals on Tv and Appliances</h1>
              <div style={{display:"flex"}}>
              <a><img src="tmill.jpg" style={{height:"200px",width:"200px"}}/><figcaption><b>Trade Mills</b><br></br>up to 70% off</figcaption></a>
              <a><img src="wm.jpg" style={{height:"200px",width:"200px",marginLeft:"80px"}}/><figcaption style={{marginLeft:"80px"}}><b>Washing Machines</b><br></br>up to 20% off</figcaption></a>
              <a><img src="stw.webp" style={{height:"200px",width:"200px",marginLeft:"80px"}}/><figcaption style={{marginLeft:"80px"}}><b>Gas Stovs</b><br></br>up to 40% off</figcaption></a>
              <a><img src="tv.avif" style={{height:"200px",width:"200px",marginLeft:"80px"}}/><figcaption style={{marginLeft:"80px"}}><b>Sony Bravia Tv</b><br></br>up to 10% off</figcaption></a>
              <a><img src="iron.webp" style={{height:"200px",width:"200px",marginLeft:"80px"}}/><figcaption style={{marginLeft:"80px"}}><b>Iron Boxs</b><br></br>up to 5% off</figcaption></a>
              <a><img src="mix.webp" style={{height:"200px",width:"200px",marginLeft:"80px"}}/><figcaption style={{marginLeft:"80px"}}><b>Mixer Griender</b><br></br>up to 10% off</figcaption></a>
              </div>
              </div>

            
            </div>
    );
}export default HomeP;