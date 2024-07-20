import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function HomeL(){
    const [mail,setmail]=useState('');
    const [pass,setpass]=useState('');
    const [repass,setrepass]=useState('');
    const navigate=useNavigate();
    function ef(e){
        setmail(e.target.value)
    }
    function pf(e){
        setpass(e.target.value)
    }
    function Change(){
        navigate('/signup')
    }
    async function store(){
        const minlen=8;
        if(pass.length<minlen){
          navigate('/error')
        }
        else{
            const response=await axios.post('http://localhost:5002/signup',{
                mail,pass
            });
        }
     
    }
    return(
        
        <div>
           <body style={{marginLeft:"135px",marginTop:"268px"}}>
            <h1 style={{fontSize:"40px",marginLeft:"720px",marginRight:"50px",fontStyle:"italic"}}>Login</h1>
            <input  style={{marginLeft:"675px",marginRight:"50px",width:"220px",height:"30px",fontStyle:"italic",border:"1px solid black"}}type="email" placeholder="Enter your email" onChange={ef}/>
            <input  style={{marginLeft:"675px",marginRight:"50px",width:"220px",height:"30px",fontStyle:"italic",border:"1px solid black",marginTop:"30px"}}type="password" placeholder="Enter password" onChange={pf}/>
            <button style={{backgroundColor:"green",width:"160px",height:"40px",marginTop:"30px",marginLeft:"705px",marginRight:"50px",color:"white",borderRadius:"10px"}} onClick={store}>SignIn</button>
            <body style={{display:"flex",gap:"10px"}}>
            <h1 style={{fontSize:"20px",marginLeft:"635px",fontStyle:"oblique",marginTop:"20px"}}>Don't have an account ?</h1>
            <button style={{color:"green",fontSize:"15px",fontStyle:"oblique",marginTop:"20px",height:"25px"}} onClick={Change}>Signup</button></body> 
            </body>
            </div>

    );
}export default HomeL;