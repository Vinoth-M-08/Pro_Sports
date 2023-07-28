import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css"
import { Link } from 'react-router-dom';
import videoBg from "../Assets/sign_bg.mp4"
import UserAuthService from '../Service/UserAuthService';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Login = () => {
    const navigate = useNavigate('');
    const history = useNavigate();
    const dispatch = useDispatch();

  


    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })


    console.log(inpval);

    const getdata = (e) => {
     


        const { value, name } = e.target;
  


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = async(e) => {

        try{
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        
         if (email === "") {
            toast.error('Email field is required', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('Please enter valid Email address', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('Password field is required', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('Password length must be greater than five', {
                position: "top-center",
            });
        } else {

        const response = await UserAuthService.loginUserWithEmailAndPassword(inpval);
        console.log(response);
        
        
        if (response.message !== "Request failed with status code 400") 
        {
            alert("Login Success");
            navigate('/');
        } 
        else
        {
            alert("Oops Invalid E-mail or Password"); 
        }
    }
}
catch(error){
    alert("Login Error");
    console.log(error);
}
    }

    return (
        <>
        <div className='mainss'>
        <div className="overlayerr"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="contenter">
        <div className='main'>
            <div className='boox'>
                <section className='d-flex justify-content-between box-con'>
                    <div className="left_data mt-3 p-3 " id='kanna'>
                        <h3 className='text-center aa' style={{width:280,display:'flex'}}>Already Customer..?</h3>
                        <Form className='zz'>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" className='mtt-1' name='email' onChange={getdata} placeholder="Enter Email" width={'250px'}/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" className='mtt-1' name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' id = "move" onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3-link-mv1 si_up' style={{color: "black"}}>Create new Account <span><Link to="/SignUP">Sign Up</Link></span> </p>
               
                    </div>
                </section>
                <ToastContainer />
            </div>
        </div>
        <br>
        </br>
        </div>
    </div>
        
        </>
    )
}

export default Login