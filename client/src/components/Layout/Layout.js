import React from 'react'

import AuxComp from '../../hoc/AuxComp/AuxComp'
import Navigation from '../../containers/Navigation/Navigation'

const Layout = (props) => {
  return (
    <AuxComp>
      <Navigation />
    </AuxComp>
  )
}

export default Layout