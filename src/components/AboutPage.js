import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';

import principle from '../assets/Images/principle.png'
import hod from '../assets/Images/hod.png'
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
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
  width: 50vw;
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

const Title=styled.div`
display:flex;
text-align:center;
margin-top:4rem;
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
                    <h3>principal</h3>
                    <h4>DR. K.RAMAR</h4>
                    <img src={principle} height="200px" width="250px" alt="" />
                </Person>
                <Person>
                    <h3>principal</h3>
                    <h4>DR. K.RAMAR</h4>
                    <img src={principle} height="200px" width="250px" alt="" />
                </Person>
                
            </People>
             <Title>Department of Computer Science and Engineering</Title>
            <People>
                <Person>
                    <h3>HOD</h3>

                    <h4>DR. VALARMATHIE P</h4>
                    <img src={hod} height="200px" width="200px" alt="" />
                </Person>
                <Person>
                    <h3>HOD</h3>

                    <h4>DR. VALARMATHIE P</h4>
                    <img src={hod} height="200px" width="200px" alt="" />
                </Person>
                
            </People>
            
        
        </Main>

        <BigTitle text="RMKCET" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
