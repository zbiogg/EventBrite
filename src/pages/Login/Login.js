/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import { useState,useEffect} from 'react';
import Footer from '../../components/Footer/index'
import {database} from '../../lib/firebase'
import logo from '../../assets/logo.png'
import background from '../../assets/img/backgroud.jpg'
export default function Login (){
    const [userName , setUsername] = useState()
    const [passWord, setPassWord] = useState()

    useEffect(() => {
        function getLogin(){
            database.ref("Users").on("value", snapshot =>{
                if(snapshot.val()!==null){
                    snapshot.forEach(user =>{
                        if(user.child("username").val()=== userName || user.child("password").val()=== passWord){

                        }else{
                            
                        }
                    })

                }   
            })
        }
        getLogin()
        console.log(userName)
        console.log(passWord)

    })
    return(
    <div>
        <div className={clsx('container-fluid')}>
            
            <div className="row">
                <div className="col-sm-12 col-md-6" >
                    <div style={{ justifyContent: "center" ,display: "flex" }}>
                        <form style={{ margin:20, width:'50%'}}>
                            <a href='/'><img src={logo} style={{ width: 150, marginBottom:20}} alt=""/> </a>
                            <h1 >Log in</h1>
                            <div className="form-group" >
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter email" 
                                    style={{
                                        width: "100%",
                                        paddingLeft: "8px",
                                        paddingTop: "6px",
                                        paddingBottom: "6px",
                                    }}
                                    onChange={event => setUsername(event.target.value)} 

                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Enter password" 
                                    onChange={event => setPassWord(event.target.value)} 

                                />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

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
    </div>
   
    
    )
}