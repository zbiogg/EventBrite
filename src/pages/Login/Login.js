/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import { useState,useEffect} from 'react';
import { useNavigate  } from "react-router-dom"
import {useFormik} from 'formik'
import * as Yup from "yup";
import Footer from '../../components/Footer/index'
import {database} from '../../lib/firebase'
import logo from '../../assets/logo.png'
import background from '../../assets/img/backgroud.jpg'
import './login.css'
export default function Login (){
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required")
                .min(4, "Must be 4 characters or more"),
            password: Yup.string()
                .required("Required")
                // .matches(
                // /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                // "Password must be 7-19 characters and contain at least one letter, one number and a special character"
                // ),
        }),
        onSubmit: (values) => {
            database.ref("Users").on("value", snapshot =>{
                if(snapshot.val()!==null){
                    snapshot.forEach(user =>{
                        if(user.child("username").val()=== values.name && user.child("password").val()=== values.password){
                            const username = user.child("username").val()
                            console.log(username)
                            sessionStorage.setItem("username", username)
                            navigate(`/`);
                        }else{
                            console.log("login fail")
                        }
                    })

                }   
            })
            console.log(values);
        },
  });

    return(
    <>
        <div className={clsx('container-fluid')}>
            <div className="row">
                <div className="col-sm-12 col-md-6" >
                    <div style={{ justifyContent: "center" ,display: "flex"}}>
                        <form className="infoform" onSubmit={formik.handleSubmit}>
                            <a href='/'><img src={logo} style={{ width: 150, marginBottom:20}} alt=""/> </a>
                            <h1 >Log in</h1>
                            <label> Your name </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                placeholder="Enter your name"
                            />
                            {formik.errors.name && (
                            <p className="errorMsg"> {formik.errors.name} </p>
                            )}
                            <label> Password </label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                placeholder="Enter your password"
                            />
                            {formik.errors.password && (
                            <p className="errorMsg"> {formik.errors.password} </p>
                            )}
                            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>         
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                    
                </div>
                <div className="col-sm-0 col-md-6" style={{backgroundImage: `url(${background})` }}>
                    
                </div>
            </div>
        
        </div>
        <Footer/>  
    </>
    )
}