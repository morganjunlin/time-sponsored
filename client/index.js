import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MenuPageNav from './components/MenuPageNav/MenuPageNav.js';
import App from './components/App.js';
import Sponsor from './components/Sponsor/Sponsor.js';

ReactDOM.render(<MenuPageNav />, document.getElementById('menuPageNav-root'))
ReactDOM.render(<App />, document.getElementById('time-root'))
ReactDOM.render(<Sponsor />, document.getElementById('sponsored-root'))

//======================================================================>
//
//======================================================================>

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

// ReactDOM.render(<Intro />, document.getElementById('intro-root'))
// ReactDOM.render(<Menu />, document.getElementById('menu-root'))
// ReactDOM.render(<About />, document.getElementById('about-root'))
// ReactDOM.render(<Reviews />, document.getElementById('reviews-root'))

//======================================================================>
//
//======================================================================>

let menuPageNav = document.getElementById("menuPageNav-content")
let menu_root_container = document.getElementById("menu-root")
let about_root_container = document.getElementById("about-root")
let reviews_root_container = document.getElementById("reviews-root")

let stickyPosition = menuPageNav.offsetTop
let menuPosition = menu_root_container.offsetTop
let aboutPosition = about_root_container.offsetTop
let reviewsPosition = reviews_root_container.offsetTop

let nav_menu = document.getElementById("menuPageNav-menu")
let nav_about = document.getElementById("menuPageNav-about")
let nav_reviews = document.getElementById("menuPageNav-reviews")

//default value for nav style. focusing on "Menu"
nav_menu.classList.add("menuPageNav-focus")

window.onscroll = () => {
	console.log("window.pageYOffset" , window.pageYOffset)
	console.log("stickyPosition" , stickyPosition)
	console.log("menuPosition" , menuPosition)
	console.log("aboutPosition" , aboutPosition)
	console.log("reviewsPosition" , reviewsPosition)

  if (window.pageYOffset >= stickyPosition) {
    menuPageNav.classList.add("menuPageNav-sticky")
  } else {
    menuPageNav.classList.remove("menuPageNav-sticky")
  }

  if (window.pageYOffset < aboutPosition) {
  	nav_menu.classList.add("menuPageNav-focus")
    nav_about.classList.remove("menuPageNav-focus")
  } 

  if (window.pageYOffset >= aboutPosition) {
  	nav_menu.classList.remove("menuPageNav-focus")
    nav_about.classList.add("menuPageNav-focus")
    nav_reviews.classList.remove("menuPageNav-focus")
  } 

  if (window.pageYOffset >= reviewsPosition) {
  	nav_about.classList.remove("menuPageNav-focus")
    nav_reviews.classList.add("menuPageNav-focus")
  } 
}


nav_menu.addEventListener('click', ()=> {
	console.log("Menu Clicked")
	window.scroll(0, stickyPosition+1)
})

nav_about.addEventListener('click', ()=> {
	console.log("About Clicked")
	window.scroll(0, aboutPosition)
})

nav_reviews.addEventListener('click', ()=> {
	console.log("Reviews Clicked")
	window.scroll(0, reviewsPosition)
})