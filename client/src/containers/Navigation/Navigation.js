import React, { Component } from 'react'
import Links from '../../components/UI/Links/Links';

const NavLinks = [
  { name: 'Home', url: '/home', class: 'icon' , auth: false },
  { name: 'About', url: '/about', class: 'icon' , auth: false },
  { name: 'Sign Up', url: '/signup', class: 'icon' , auth: false, loggedIn: false },
  { name: 'Sign In', url: '/signin', class: 'icon' , auth: false, loggedIn: false },
  { name: 'Dashboard', url: '/dashboard', class: 'icon' , auth: true }
]

  class Navigation extends Component {
    render() {
      return(
        <Links Links={NavLinks}/>
      )
    }
  }

export default Navigation