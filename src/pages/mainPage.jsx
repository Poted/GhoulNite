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

        return (
            <div className="App">
                <div className="home">
                    <div className="container">
                        <div className="loginWindow">
                            
                            <div className="loginHeader">
                                <h3> Welcome to <img src={require("../assets/GhoulNite.png")}/> </h3>
                            </div>



                            <LoginForm/>
                            

                            <div className="loginFooter">
                                
                                <div className="signUp">
                                    Don't have an account? <a href="#">Create one!</a>
                                </div>
                                
                                <div className="forgotPassword">
                                    <a href="#"> Forgot your password? </a> 
                                </div>

                            </div>


                        </div>


                        <div style={{ 
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                boxShadow: '0px 0px 50px 10px rgba(0, 0, 0, 0.9)',
                                color: 'rgba(999, 999, 999, 0.88)', 
                                textAlign: 'center', 
                                marginTop: '26vh',
                                paddingTop: '5vh',
                                marginBottom: '25vh', 
                                paddingBottom: '5vh',
                                fontFamily: ''
                            }}>

                            <h3 style={{ fontSize: '6vh', fontWeight: '700', paddingBottom: '3vh'}}> 
                                Welcome to GhoulNite!
                            </h3>
                            <p style={{ fontSize: '3vh', width: '43vw', fontWeight: 'bold', margin: 'auto' }}>
                                Choose your character and cooperate with others 
                                to stand for a fight to defend your city from frightening monsters!
                            </p>

                            <img src={require('../assets/fangs.png')}
                                style={{ marginTop: '4vh', height: '30vh'}}
                            />

                        </div>

                        <iframe 
                            style={{ marginBottom: '24vh', 
                            boxShadow: '0px 0px 100px 20px rgba(179, 177, 116, 0.9)', 
                            border: '3px outset rgba(999, 999, 220)',
                            width: '64vw', height: '64vh' 
                            }}

                            
                            src="https://www.youtube.com/embed/pxqmY_NPByM?autoplay=0"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>

                    </div>

                    <footer style={{    
                                        backgroundColor: 'rgba(0, 0, 0, 0.98)', 
                                        width: '100%', 
                                        height: '3.5vh', 
                                        color: 'rgba(999, 999, 0, 0.5)', 
                                        boxShadow: '10px 10px 100px 80px rgba(0, 0, 0, 1)',
                                        textAlign: 'center' }} >
                            <div>
                                Hi! This is footer and this site is made by
                                <a href="https://www.github.com/Poted" 
                                    style={{ textDecoration: 'none', color: 'inherit'}}> Pot_e </a>﹠
                                            <a href="https://github.com/Morasiu/" 
                                                style={{ textDecoration: 'none', color: 'inherit'}}>Morasiu</a> and all credits and this planet belong to them. Ⓡ 
                            </div>
                    </footer>

                </div>
            </div>
        );
    }
}
//}//deletehere.

export default observer(MainPage);