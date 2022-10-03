import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';

import principle from '../assets/Images/principle.png'
import hod from '../assets/Images/hod.png'
import dean from '../assets/Images/dean.png'
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import astronaut from '../assets/Images/rmkcet.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:150vh;
@media (max-width: 768px) {
    
    height:250vh;
      }
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 60vw;
  @media (max-width: 768px) {
    width:50vw;
  }
  height: fit-content;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction:column;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
`
const People=styled.div`
display:flex;
flex-direction:row;
@media (max-width: 768px) {
    
flex-direction:column;
  }
justify-content:center;
gap:4rem;`

const Person=styled.div`
display:flex;
flex-direction:column;
align-items:center;`

const Title=styled.h3`
display:flex;
text-align:center;
margin:3rem auto;
justify-content:center;`

const Description=styled.div`
display:flex;
padding:3rem 1rem;
justify-content:center`



const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
            <Title>R.M.K College of Engineering and Technology</Title>
            <People>
                <Person>
                    <img style={{backgroundColor:"white"}} src={principle} height="200px" width="250px" alt="" />
                    <h3>Dr. K.Ramar</h3>
                    <h4>Principal</h4>
                </Person>
                <Person>
                    <img style={{backgroundColor:"white"}} src={dean} height="200px" width="250px" alt="" />
                    <h3>Dr. K.Sivaram</h3>
                    <h4>Dean-Research</h4>
                </Person>
                
            </People>
             <Title>Department of Computer Science and Engineering</Title>
            <People>
                <Person>

                    <img style={{backgroundColor:"white"}} src={hod} height="200px" width="200px" alt="" />

                    <h3>Dr. Valarmathie.P</h3>

                    <h4>HOD-CSE</h4>
                </Person>
                <Person>

                    <img  src="https://rmkcet.ac.in/cse/xenoiz2k19/img/VigilsonPrem.jpg" height="200px" width="200px" alt="" />
                    
                    <h3>Dr. Vigilson Prem M</h3> 
                    
                    <h4>Professor</h4>               
                </Person>
                
            </People>
            
        
        </Main>

        

        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
