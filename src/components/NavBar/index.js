import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import Logo from '../../images/logo.svg'

export const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <img src={Logo} alt="Logotipo" />
    </nav>
  )
}
