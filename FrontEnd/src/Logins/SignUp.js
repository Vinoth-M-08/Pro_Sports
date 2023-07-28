import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import videoBg from "../Assets/log_bg.mp4"
import UserAuthService from '../Service/UserAuthService'
import "./login.css"

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const SignUp = () => {
    const navigate = useNavigate('');
    const history = useNavigate();
    const dispatch = useDispatch();


    const [inpval, setInpval] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
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
        e.preventDefault();

        const { username, email, phoneNumber, password } = inpval;
        try{
        if (username === "") {
            toast.error(' Name field is required!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('Email field is required',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('Please enter valid Email address',{
                position: "top-center",
            });
        } else if (phoneNumber === "") {
             toast.error('PhoneNumber field is required',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('Password field is required',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('Password length must be greater than five',{
                position: "top-center",
            });
        } else {
            console.log("Data added succesfully");
            const response = await UserAuthService.saveUser(inpval);
            console.log(response);
        const target = "Error";
        const target1 = "Email Already Exists !!";

        if (response.data === target) {
            toast.error(target,
                {
                    position:"top-center",
                });
        } else if (response.data === target1) {
            alert(target1);
        }
        else{
            alert("success");
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
            navigate('/');

        }
        }
        }
        catch (error) {
            alert(error.message);
            console.log(error);
        }
    }

    return (
        <>
        <div className='mainss'>
        <div className="overlayerr"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="contenter">
        <div className='main '>

        <div className='tems2 booxx'>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3 sign" style={{ width: "100%" }}>
                        <Form className='vv'>
                        <h3 style={{color: "black",marginLeft:70,marginBottom:30}}> Register Here..!</h3>

                            <Form.Group className="mb-3  " controlId="formBasicEmail">

                                <Form.Control type="text" name='username' onChange={getdata} placeholder="Enter Your Name" width={'250px'}/>
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="phoneNumber" name='phoneNumber' onChange={getdata} placeholder="Enter Phone Number" />
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' id = "movee" onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                            <p className='mt-3 link mv' style={{color: "black",marginLeft:'100px'}}>Already Have an Account <span ><NavLink to="/Login">Sign In</NavLink></span> </p>
                        </Form>
                       
                    </div>
                </section>
                <ToastContainer />
            </div>
            </div>
            </div>
        </div>
        </div>
        <br></br>

        </>
    )
}

export default SignUp