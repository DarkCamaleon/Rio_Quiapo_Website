import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  height: 62px;
  background: ${({ theme }) => theme.blue};
  display: flex;

  @media (min-width: 768px) {
    background: ${({ theme }) => theme.red};
  }
  //Poner aqui los estilos del container
`

export const Img = styled.img`
  width: 200px;
  //Poner aqui los estilos del logo
`
