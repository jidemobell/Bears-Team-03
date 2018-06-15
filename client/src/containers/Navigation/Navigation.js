import React, { Component } from 'react'
import { connect } from 'react-redux'

import Links from '../../components/UI/Links/Links';

const NavLinks = [
  { name: 'Home', url: '/home', class: 'icon', public: true },
  { name: 'About', url: '/about', class: 'icon', public: true  },
  { name: 'Sign Up', url: '/signup', class: 'icon', authenticated: false },
  { name: 'Sign In', url: '/signin', class: 'icon', authenticated: false },
  { name: 'Dashboard', url: '/dashboard', class: 'icon', authenticated: true },
  { name: 'Sign Out', url: '/signout', class: 'icon', authenticated: true }
] 
 
  class Navigation extends Component {
    render() {
      return(
        <Links Links={NavLinks} userLoggedIn={this.props.authenticated} />
      )
    }
  }

  const mapStatetToProps = (state) => {
    return { authenticated: state.user.authenticated }
  }
export default connect(mapStatetToProps, null, null, {pure:true})(Navigation)