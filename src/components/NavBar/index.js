import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import Logo from '../../images/logo.svg'
import { NavContainer, Img } from './styles'

export const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <NavContainer>
      <Hamburger color="#C0230F" toggled={isOpen} toggle={setOpen} />
      <Img src={Logo} alt="Logotipo" />
    </NavContainer>
  )
}
