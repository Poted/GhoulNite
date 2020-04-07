import React, { useState } from 'react'; 
import { Router } from '@reach/router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ResponsiveNavigation from './components/ResponsiveNavigation';
import logo from './assets/rune.png';
import MainPage from './pages/mainPage';
import UserProfile from './pages/userProfile';

function App() {
  const navLinks = [
		{
			text: 'Home',
			path: '/',
			icon: 'ion-ios-home'
		},
		{
			text: 'Contact',
			path: '/contact',
			icon: 'ion-ios-megaphone'
		},
		{
			text: 'About',
			path: '/about',
			icon: 'ion-ios-business'
		},
		{
			text: 'Blog',
			path: '/blog',
			icon: 'ion-ios-bonfire'
		},
		{
			text: 'Portfolio',
			path: '/portfolio',
			icon: 'ion-ios-person'
		},

	]


    return(

		<BrowserRouter>
			<Switch>
				
				<Route exact path="/" exact component={ MainPage } />

				<div className="App">
						<ResponsiveNavigation
						navLinks={ navLinks }
						logo={ logo } />

						<Router className="router">
							<Contact path="/contact" />
							<Home path="/home" />
							<Portfolio path="/portfolio" />
							<Blog path='/blog'/>
							<About path='/about'/>
							<UserProfile path='/user-profile'/>
						</Router> 
				</div>
				
			</Switch>
		</BrowserRouter>

    );
  }

export default App;
