import React from 'react'

import classes from './Link.css'

const Link = (props) => {
  return <li className={classes.Link}><a href={props.url}><i className={props.class}></i> {props.name}</a></li>
}

export default Link