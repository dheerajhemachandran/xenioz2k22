import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'


const Logo = styled.div`
color: #000ff0;
position: fixed;
left:50%;


display: flex;
justify-content: center;
align-items: center;
top:4rem;
z-index:5;
`
const Button=styled.button`
width:50px;
height:50px;
border-radius:50%;
background:white;
outline:none;
animation: load 1s ease-out infinite;


@keyframes load {
  0% {
    border: 0px solid #000ff0;
 }
  50% {
    border: 5px solid #000;
 }
  100% {
    border: 0px solid #000;
 }
}`

const LogoComponent = (props) => {
  const [isOpen, setOpen] = useState(false)

    return (
        <Logo color={props.theme}>
          <ModalVideo channel='youtube' height="100vh" width="100vw" autoplay isOpen={isOpen} videoId="wJNikDr-aNM" onClose={() => setOpen(false)} />

<Button onClick={()=> setOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000ff0" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
</svg>
</Button>

        </Logo>
    )
}

export default LogoComponent
