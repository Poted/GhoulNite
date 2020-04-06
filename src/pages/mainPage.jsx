import React, { useState, useEffect } from 'react';
import App from '../App';
import { Link } from 'react-router-dom';

function MainPage() {

    

    return (
        <div className="App">
            <div className="home">
                <div className="container">
                    <div className="loginWindow">
                        
                        <div className="loginHeader">
                            <h3> Login to <img src={require("../assets/GhoulNite.png")}/> </h3>
                        </div>


                        <div className="loginBody">
                            <form>
                                <img className="mainImg" src={require("../assets/scroll.png")}/>

                                <div className="login">
                                    <img className="loginImg" src={require("../assets/coin.png")}/>
                                    <input type="text" className="userInput" placeholder="Login"/>
                                </div>

                                <div className="password">
                                    <img className="passwordImg" src={require("../assets/key.png")}/>
                                    <input type="password" className="passwordInput" placeholder="Your password.."/>
                                </div>

                                
                               {/* <div className="rememberCheckbox">
                                    <input type="checkbox"/>
                                    Remember Me
                                </div>
                                
                                <input type="submit" value="Login" className="loginBtn"/>
                                 */}
                                
                                <Link to={"/home"}>
                                    <input type="submit" value="Login" className="loginBtn"/>
                                </Link>

                            </form>
                        </div>
                        

                        <div className="loginFooter">
                            
                            <div className="signUp">
                                Don't have an account? <a href="#">Create one!</a>
                            </div>
                            
                            <div className="forgotPassword">
                                <a href="#">Forgot your password?</a>
                            </div>

                        </div>

                    </div>
                </div>
	    	</div>
        </div>
    );
}

export default MainPage;