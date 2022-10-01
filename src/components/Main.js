import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const Tevent = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 40%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.text : props.theme.body};
background-color:${props => props.click ? props.theme.body : props.theme.text};
border-radius:5%;
display:flex;
justify-content: center;
align-items: center;
padding:.7rem 1rem;
text-decoration: none;
margin-bottom:3rem;
z-index:1;
`


const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'60%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
color:#4B0150;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 4.5s linear;
}

&>:last-child{
    padding-top: 0rem;
}
`

const Title = styled.div`
position: absolute;
top: 30%  ;
left: 15%  ;
width:70%;
border: none;
font-size:2vw;
@media (min-width: 768px) {
    font-size: 1.3vw;
    top:20%;
  }
outline: none;
color:${props => props.click ? '#fff' : '#4B0150'};
text-align:center;
background-color: transparent;
display: flex;
flex-direction: column;
gap:1.5vh;
justify-content: center;
align-items: center;
transition: all 1s ease;

`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #4B0150;
bottom: 0;
right: 30%;
width: ${props => props.click ? '80%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
         <DarkDiv   click={click}/>
            <Container>
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons theme={click ? 'dark' :'light'} />
            <Title click={click}>
                <h1>R.M.K College of Engineering and Technology</h1>
                <h4>(An Autonomous Colllege)</h4>
                <h3>Department of Computer Science and Engineering</h3>
                <p>presents...../</p>
            </Title>
                
            <Center click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 120 : 100} height={click ? 120 : 100} />
                <span>{click?"back":"click to view"}</span>
            </Center>

            <Contact to="/Schedule">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Schedule
                </motion.h2>
            </Contact>
            <Tevent to="/Technical-event">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                Technical
                </motion.h2>
            </Tevent>
            <WORK to="/Nontechnical-events" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Non-technical
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to="/Contact" click={+click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Contact
                </motion.h2>
            </ABOUT>
            

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main
