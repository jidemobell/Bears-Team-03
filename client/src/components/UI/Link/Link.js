import React from 'react'

import classes from './Link.css'

const Link = (props) => {
  if(props.public) {
    return <li className={classes.Link}><a href={props.url}><i className={props.class}></i> {props.name}</a></li>
  } else {
      return <li hidden={!props.authenticated ? props.userLoggedIn : !props.userLoggedIn} className={classes.Link}><a href={props.url}><i className={props.class}></i> {props.name}</a></li>
  }
}

export default Link