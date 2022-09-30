import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import logo from '../assets/Images/logo.png'



const Logo = styled.div`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left:2rem;
top:-1rem;
z-index:3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          <div className="">
          <img src={logo} height="200px" width="200px"  alt="xenioz" /></div>
        </Logo>
    )
}

export default LogoComponent
