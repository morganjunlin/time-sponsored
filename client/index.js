import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MenuPageNav from './components/MenuPageNav/MenuPageNav.js';
import App from './components/App.js';
import Sponsor from './components/Sponsor/Sponsor.js';

ReactDOM.render(<MenuPageNav />, document.getElementById('menuPageNav-root'))
ReactDOM.render(<App />, document.getElementById('time-root'))
ReactDOM.render(<Sponsor />, document.getElementById('sponsored-root'))


// const Intro = () => {
// 	return(
// 		<section style={{minHeight: "50vh", fontSize: "10rem"}}>Intro
// 		</section>
// 		)
// }

// const Menu = () => {
// 	return(
// 		<section style={{minHeight: "120vh", fontSize: "10rem", borderBottom: "1px solid rgba(0,0,0,.2)"}}>Menu
// 		</section>
// 		)
// }

// const About = () => {
// 	return(
// 		<section style={{minHeight: "20vh", fontSize: "10rem", borderBottom: "1px solid rgba(0,0,0,.2)"}}>About
// 		</section>
// 		)
// }

// const Reviews = () => {
// 	return(
// 		<section style={{minHeight: "100vh", fontSize: "10rem", borderBottom: "1px solid rgba(0,0,0,.2)"}}>Reviews
// 		</section>
// 		)
// }

// ReactDOM.render(<Intro />, document.getElementById('fake-intro-root'))
// ReactDOM.render(<Menu />, document.getElementById('fake-menu-root'))
// ReactDOM.render(<About />, document.getElementById('fake-about-root'))
// ReactDOM.render(<Reviews />, document.getElementById('fake-reviews-root'))


let menuPageNav = document.getElementById("menuPageNav-content")
let bigContainer1 = document.getElementById("menu-root")
let stickyPosition = menuPageNav.offsetTop
window.onscroll = () => {
  if (window.pageYOffset >= stickyPosition) {
    menuPageNav.classList.add("menuPageNav-sticky")
    bigContainer1.classList.add("menuPageNav-sticky-content")
  } else {
    menuPageNav.classList.remove("menuPageNav-sticky")
    bigContainer1.classList.remove("menuPageNav-sticky-content")
  }
}
