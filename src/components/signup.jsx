import { useState } from "react";
import axios from 'axios';
import { validEmail, validPassword } from './regex.jsx';
import {useNavigate} from 'react-router-dom'
function Home(){
    const [mail,setmail]=useState('');
    const [pass,setpass]=useState('');
    const [repass,setrepass]=useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const navigate=useNavigate();
    function ef(e){
        setmail(e.target.value)
    }
    function pf(e){
        setpass(e.target.value)
    }
     function rpf(e){
        setrepass(e.target.value)
    }
    function Cl(){
        navigate('/login')
    }
    const validate = () => {
        if (!validEmail.test(mail)) {
           setEmailErr(true);
        }
        if (!validPassword.test(pass)) {
           setPwdError(true);
        }
     };
    async function store(){
        const minlen=8;
        if(pass.length<minlen){
          navigate('/error')
        }
        else if (pass!=repass){
            navigate('/notmatch')
        }
        else{
            const response=await axios.post('http://localhost:5002/signup',{
                mail,pass
            });
        }
    }
    return(
        
        <div>
        <div style={{marginLeft:"135px",marginTop:"0px"}}>
         <h1 style={{fontSize:"40px",marginLeft:"720px",marginRight:"50px",fontStyle:"italic"}}>Signup</h1>
         <input  style={{marginLeft:"675px",marginRight:"50px",width:"220px",height:"30px",fontStyle:"italic",border:"1px solid black"}}type="email" placeholder="Enter your email" onChange={ef}/>
         <input  style={{marginLeft:"675px",marginRight:"50px",width:"220px",height:"30px",fontStyle:"italic",border:"1px solid black",marginTop:"30px"}}type="password" placeholder="Create a password" onChange={pf}/>
         <input  style={{marginLeft:"675px",marginRight:"50px",width:"220px",height:"30px",fontStyle:"italic",border:"1px solid black",marginTop:"30px",marginBottom:"30px"}}type="password" placeholder="Confirm your password" onChange={rpf}/>
         <div ><button style={{backgroundColor:"green",width:"160px",height:"40px",marginLeft:"705px",marginRight:"50px",color:"white",borderRadius:"10px"}} onClick={validate}>Signup</button></div>
         <div style={{display:"flex",gap:"10px"}}>
         <h1 style={{fontSize:"20px",marginLeft:"635px",fontStyle:"oblique",marginTop:"20px"}}>Already have an account ?</h1>
         <button style={{color:"green",fontSize:"15px",fontStyle:"oblique",marginTop:"20px",height:"25px",background:"none"}} onClick={Cl}>Login</button></div> 
         </div>
         </div>
    );
}export default Home;