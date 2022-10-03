import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import LogoComponent from '../subComponents/LogoComponent'
import rmk27 from '../assets/Images/rmk27.png'
import rmk from '../assets/Images/rmkcet.png'

const MainContainer = styled.div` 
background-image: url('https://i.gifer.com/origin/47/4705530785b66c5fcbdc84fba4315dc4.gif');
background-position: center;
background-size: cover;
width: 100%;
height: 100vh;
overflow:hidden;

position: relative;


`

const Container = styled.div`
`

const Rightlogo = styled.img`
padding:0rem;
position: absolute;
top: 0.5rem;
right: calc(-0.5vw);
text-decoration: none;
z-index:1;
height:180px;
width:180px;
@media (max-width: 768px) {
    
height:120px;
width:120px;
  }
animation:show 3s;

@keyframes show{
    from{
        opacity:0;
    }
    to{
        opacity:1
        
    }
}
`
const Leftlogo = styled.img`
padding:0rem;
position: absolute;
top: 1.5rem;
left: calc(2vw);
text-decoration: none;
z-index:1;
height:100px;
width:100px;
@media (max-width: 768px) {
    
height:67px;
width:67px;
  }
animation:show 3s;

@keyframes show{
    from{
        opacity:0;
    }
    to{
        opacity:1
        
    }
}
`

const Tevent = styled(NavLink)`
color:#000;
background-color:#00FFFF;

border-radius:5px;
padding:.7rem 1rem;
position: absolute;
top: 46%;
right: -1rem;
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;

animation:show 3s;

@keyframes show{
    from{
        opacity:0;
    }
    to{
        opacity:1
        
    }
}
`
const WORK = styled(NavLink)`
border-radius:5px;

color:#000;
background-color:#00FFFF;

padding:.7rem 1rem;
position: absolute;
top: 40%;
left: 1rem;
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
animation:show 3s;

@keyframes show{
    from{
        opacity:0;
    }
    to{
        opacity:1
        
    }
}
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
const Bus=styled.a`
color:#000;
background-color:#00FFFF;
border-radius:5px;
display:flex;
justify-content: center;
align-items: center;
padding:.5rem .5rem;
text-decoration: none;
margin-bottom:rem;
z-index:1;
animation:ping 1.5s ease-out infinite;

@keyframes ping{
    0% {
        border: 0px solid ${props => props.click ? props.theme.body : props.theme.text};
   }
    50% {
        border: 10px solid ${props => props.click ? props.theme.body : props.theme.text};
   }
    100% {
        border: 0px solid ${props => props.click ? props.theme.body : props.theme.text};
   }
}


animation:show 3s;
@keyframes show{
    from{
        opacity:0;
    }
    to{
        opacity:1
        
    }
}
`

const ABOUT = styled(NavLink)`
color:#000;
background-color:#00FFFF;
border-radius:5px;
display:flex;
justify-content: center;
align-items: center;
padding:.5rem .5rem;
text-decoration: none;
margin-bottom:rem;
z-index:1;
animation:ping 1.5s ease-out infinite;

@keyframes ping{
    0% {
        border: 0px solid ${props => props.click ? props.theme.body : props.theme.text};
   }
    50% {
        border: 10px solid ${props => props.click ? props.theme.body : props.theme.text};
   }
    100% {
        border: 0px solid ${props => props.click ? props.theme.body : props.theme.text};
   }
}


animation:show 3s;
@keyframes show{
    from{
        opacity:0;
    }
    to{
        opacity:1
        
    }
}
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
top: ${props => props.click ? '85%' :'70%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
color:#fff;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
z-index:2;

animation:show 1s;
@keyframes show{
    from{
        opacity:0;
    }
    to{
        opacity:1
        
    }
}

&>:first-child{
    animation: ${rotate} infinite 4.5s linear;
}

&>:last-child{
    padding-top: 0rem;
}
`

const Title = styled.div`
position: absolute;
top: 20%  ;
left: 15%  ;
width:70%;
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
opacity:${props=>props.click?"0":"1"};
padding:3rem 0rem;
border: none;
font-size:2vw;
@media (min-width: 768px) {
    font-size: 1.3vw;
    top:20%;
  }
outline: none;
color:#fff;
text-align:center;

display: flex;
flex-direction: column;
gap:1.5vh;
justify-content: center;
align-items: center;
transition: all 1s ease;

animation:show 2s;
@keyframes show{
    from{
        opacity:0;
    }
    to{
        opacity:1
        
    }
}

`

const Cspan=styled.span`
animation:ping infinite 1s;
@keyframes ping{
    0%{
        opacity:0
    }
    
    50%{
        opacity:1
    }
    100%{
        opacity:0
    }
}`

const Xeniox=styled.h1`
color: #00FFFF;
font-size:4rem;
@media (max-width: 768px) {
    font-size: 2rem;
  }
font-family: 'Silkscreen', cursive;
   `


const DarkDiv = styled.div`
position: absolute;
top: 0;
background:#ff;

bottom: 0;
right: 30%;
width: ${props => props.click ? '100%' : '0%'};
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
         <Rightlogo src={rmk27}/>
         <Leftlogo src={rmk}/>
           
            <Container>
            <LogoComponent theme={click ? 'dark' :'light'}/>
           
           <Title click={click}>
            
                <h1>R.M.K. College of Engineering and Technology</h1>
                <h2>(An Autonomous Institution)</h2>
                <h2>Department of Computer Science and Engineering</h2>
                <p>proudly presents</p>
                <Xeniox>Xenioz 2k22</Xeniox>
            
                
            </Title>
            <Center click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 120 : 100} height={click ? 120 : 100} />
                <Cspan>{click?"back":"click to view"}</Cspan>
            </Center>
                
            
 

            
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
            
            <ABOUT to="/About" click={+click}>
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
                    About us
                </motion.h2>
            </ABOUT>

            <Bus href="https://rmkcet.ac.in/busroutes.pdf" target="_blank">
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
                    Bus Route
                </motion.h2>
            </Bus>
            
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
                    Contact us
                </motion.h2>
            </ABOUT>
            

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main
