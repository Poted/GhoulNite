import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import UserStore from '../components/userStore';
import { observer } from 'mobx-react';
import LoginForm from '../components/LoginForm';



class MainPage extends Component {

    async componentDidMount() {

        try {

            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json(); 

            if ( result && result.success ) {
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }
            else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }

        }

        catch(e) {
            console.log(e);
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    }

    /*
    async doLogout() {

        console.log('hi');

        try {

            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            });

            let result = await res.json(); 

            if ( result && result.success ) {
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }

        }

        catch(e) {
            console.log(e);
        }
    } */


    render() {
       // if(true == false)
        //{

        return (
            <div className="App">
                <div className="home">
                    <div className="container">
                        <div className="loginWindow">
                            
                            <div className="loginHeader">
                                <h3> Welcome to <img src={require("../assets/GhoulNite.png")}/> </h3>
                            </div>

                            
                        {/*    <div className="loginBody">
                                <form>
                                    <img className="mainImg" src={require("../assets/scroll.png")}/>

                                    <div className="login">
                                        <img className="loginImg" src={require("../assets/coin.png")}/>
                                        <input type="text" className="userInput" placeholder="Login.."/>
                                    </div>

                                    <div className="password">
                                        <img className="passwordImg" src={require("../assets/key.png")}/>
                                        <input type="password" className="passwordInput" placeholder="Password.."/>
                                    </div>

                                    
                                {/* <div className="rememberCheckbox">
                                        <input type="checkbox"/>
                                        Remember Me
                                    </div>
                                    
                                    <input type="submit" value="Login" className="loginBtn"/>
                                * /}
                                    
                                    <Link to={"/home"}>
                                        <input type="submit" value="Login" className="loginBtn"/>
                                    </Link>
                                    <div style={{ visibility: UserStore.loading ? 'visible' : 'hidden', color: 'white', fontSize: '25px' }}>Your profile is loading..</div>

                                </form>
                            </div> */}

                            <LoginForm/>
                            

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
}
//}//deletehere.

export default observer(MainPage);