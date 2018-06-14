import React, { Component } from 'react'
import { connect } from 'react-redux'

import Links from '../../components/UI/Links/Links';

const NavLinks = [
  { name: 'Home', url: '/home', class: 'icon' },
  { name: 'About', url: '/about', class: 'icon'  },
  { name: 'Sign Up', url: '/signup', class: 'icon', protected: false  },
  { name: 'Sign In', url: '/signin', class: 'icon', protected: false  },
  { name: 'Dashboard', url: '/dashboard', class: 'icon', protected: true  },
  { name: 'Sign Out', url: '/signout', class: 'icon', protected: true }
]
 
  class Navigation extends Component {
    // Checks to see if the user is authenticated. If so it will hide login / sign up links
    AuthLinks = NavLinks.map(link => {
      if(this.props.authenticated && link.protected === false) {
        link.userLoggedIn = this.props.authenticated
      }
      if(!this.props.authenticated && link.protected === true) {
        link.userLoggedIn = !this.props.authenticated
      }
      return link
    })

    // TODO: Links not refreshing until browser refresh

    render() {
      return(
        <Links Links={this.AuthLinks}/>
      )
    }
  }

  const mapStatetToProps = (state) => {
    return { authenticated: state.user.authenticated }
  }
export default connect(mapStatetToProps)(Navigation)