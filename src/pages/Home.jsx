import React, { Component } from 'react';
import '../assets/scss/pages.scss';

class Home extends Component {
    render () {
        return (
            <div className="home">
                <div className="container">
                    <div className="loginWindow">
                        
                        <div className="loginHeader">
                            <h3> Login to <img src={require("../assets/GhoulNite.png")}/> </h3>
                            
                            <div className="headerButtons">
                                <span>  </span> 
                                <span>  </span> 
                                <span>  </span> 
                            </div>
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

                                <div className="rememberCheckbox">
                                    <input type="checkbox"/>
                                    Remember Me
                                </div>
                                
                                <input type="submit" value="Login" className="loginBtn"/>
                           
                            </form>
                        </div>
                        
                        <div className="loginFooter">
                            <div className="signUp">

                            </div>
                            <div className="forgetPassword">
                                
                            </div>
                        </div>
                    </div>
                </div>
	    	</div>       
        )
    }
}

export default Home; 