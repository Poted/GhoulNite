import React, { Component } from 'react';
import '../assets/scss/pages.scss';
import UserStore from '../components/userStore';
import MainPage from './mainPage';
import SubmitButton from '../components/SumbitButton';

export class Home extends Component {

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
    }
    /*<div style={{color: 'white', fontSize: '25px' }}> Welcome { UserStore.username } </div>     
    
    <input type="button" onClick={ () => this.doLogout() } value="Log Out!"/>
    */

    render () {
        return (
            <div>
               
                <SubmitButton
                    text={'log out'}
                    disabled={false}
                    onClick={ () => this.doLogout() }
                />
            </div>

        );
    }
}

export default Home; 