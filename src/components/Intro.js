import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import rmkcet from '../assets/Images/profile-img.png'
import Countdown from 'react-countdown';

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:100vh;
display: flex;

background:#2B63EE;
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.body} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.body} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid #fff;
    border-right: 2px solid ${props => props.theme.body};


    z-index:1;

`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
z-index:2;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const SubBox2 = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`
const Xeniox=styled.h1`
    color: #000ff0;
    font-family: 'Silkscreen', cursive;
    text-shadow: 0px 0px 0 rgb(7,255,251),
                 1px 1px 0 rgb(7,255,251),
                 2px 2px 0 rgb(7,255,251),
                 3px 3px 0 rgb(7,255,251),
                 4px 4px 0 rgb(7,255,251),
                 5px 5px 0 rgb(7,255,251),
                 6px 6px 0 rgb(7,255,251),
                 7px 7px  0 rgb(7,255,251),
                 8px 8px 7px rgba(0,0,0,0.45),
                 8px 8px 1px rgba(0,0,0,0.5),
                 0px 0px 7px rgba(0,0,0,.2);
        width:40vw;
`
const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
font-family: 'Alkalami', serif;
display: flex;
flex-direction: column;
justify-content: space-evenly;


&>*:last-child{
   font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}
`
const Count=styled.h3`
text-shadow: rgba(0,204,255,0.9) 0px 0px 39px;
color:rgb(7,255,251);`


const Button = styled(NavLink)`
border-radius:5px;
color:#000;
background-color:#00FFFF;
width:fit-content;
height:50%;
margin:2px 15px 4px 0px;
font-size:4vw;
@media (min-width: 768px) {
    font-size: 2vw;
  }
padding:.5rem;
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
const Buttonbox=styled.div`
position: absolute;
left: 36%;
top: 82%;
@media (min-width: 768px) {
    left: 25%;
    top: 83%;
  }
z-index:6;
transform: translate(-50%, -50%);
`

const Intro = () => {
    var deadline = new Date("2022-10-17 00:00:00");

    const renderer = ({ days,hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <>over</>;
        } else {
          // Render a countdown
          return <span>{days}d :{hours}h :{minutes}m :{seconds}s </span>;
        }
      };
    return (
        <>
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <Xeniox>Xenioz 2k22</Xeniox>
                    <h4>National Level Symposium</h4>
                    <h6>0n 17<sup>th</sup> October 2022</h6>
                 
                   <Count><Countdown date={deadline} renderer={renderer} /></Count>
                
                </Text>
            </SubBox>
            <SubBox2>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={rmkcet} alt="Profile Pic" />
                </motion.div>
            </SubBox2>
            
        </Box>
        {/* <Buttonbox style={{display:'flex',justifyContent:'start',alignItems:"center"}} className="">
        <Button to="/rules">Rules</Button>
        <Button to="/schedule">Schedule</Button>
        
        </Buttonbox> */}
        </>
    )
}

export default Intro
