import React from 'react'

import classes from './Links.css'
import Link from '../Link/Link';

const Links = (props) => {
  const LinkMap = props.Links.map(link => {
    return <Link key={link.name} url={link.url} class={link.class} name={link.name} userLoggedIn={props.userLoggedIn} authenticated={link.authenticated} public={link.public} />
  })

  return (
    <ul className={classes.Links}>
      {LinkMap}
    </ul>
  )
}

export default Links