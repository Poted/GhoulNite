import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import UserStore from '../components/userStore';
import { observer } from 'mobx-react';
import LoginForm from '../components/LoginForm';
import '../assets/scorched_earth/ScorchedEarthDEMO-KCFonts.otf'



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


                        <div style={{ color: 'white', textAlign: 'center', marginTop: '150px' }}>

                            <h3 style={{ fontSize: '9vh' }}> 
                                Welcome to GhoulNite!
                            </h3>
                            <p style={{ fontSize: '4vh', width: '650px', textAlign: 'center', marginLeft: '28%', fontWeight: 'bold'}}>
                                Choose your character and cooperate with others 
                                to stand for a fight to defend your city from frightening monsters!
                            </p>

                        </div>

                        <iframe 
                            style={{ marginTop: '23vh', marginBottom: '16vh', boxShadow: '0px 0px 100px 20px rgba(179, 177, 116, 0.9)', border: '3px solid white' }}
                            width="1000" height="515" 
                            src="https://www.youtube.com/embed/pxqmY_NPByM?autoplay=0"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>

                    </div>

                    <footer style={{    
                                        backgroundColor: 'rgba(0, 0, 0, 0.98)', 
                                        width: '100%', 
                                        height: '3.5vh', 
                                        color: 'gold', 
                                        boxShadow: '10px 10px 100px 80px rgba(0, 0, 0, 1)',
                                        textAlign: 'center' }} >
                            <div>
                                Hi! This is footer and this site is made by pot_e﹠Morasiu and all credits and this planet is owned by them. Ⓡ 
                            </div>
                    </footer>

                </div>
            </div>
        );
    }
}
//}//deletehere.

export default observer(MainPage);