import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:200vh;
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

justify-content:center;
gap:4rem;`

const Person=styled.div`
display:flex;
flex-direction:column;`

const Title=styled.div`
display:flex;
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

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
            <Title>R.M.K College of Engineering and Technology</Title>
            <People>
                <Person>
                    <h3>principle</h3>
                    <h4>name</h4>
                    <img src="" height="50px" width="50px" alt="" />
                </Person>
                <Person>
                    <h3>vice-principle</h3>
                    <h4>name</h4>
                    <img src="" height="50px" width="50px" alt="" />
                </Person>
            </People>
            <Description>R.M.K College of Engineering and Technology (RMKCET) is situated at Puduvoyal,Gummidipoondi Taluk, Tiruvallur District,Tamilnadu. This college is affiliated to Anna University and is promoted by Lakshmikanthammal Educational Trust established in the year 1995 to render philanthropic and educational service to people living in rural areas bordering Tamilnadu and Andhra Pradesh. The lush green environment, the expansive buildings, the highly equipped laboratories with state of the art equipments and the unparalleled discipline of the students stand out as shining samples of management. This college started in the academic year 2008-09, secured Anna University 2nd rank in the very first semester and 1st rank in the very second semester. RMKCET is ranked 16th in Top 100 Private Engineering Colleges in The Higher Education Review Survey 2016 for Placements. Also Ranked 4th in Emerging Engineering Colleges in the Higher Education Review Survey 2016. Recently RMKCET Received the Bharatiya Vidya Bhavan National Award for Best Engineering College having Best Overall Performance for the year 2015 from ISTE, New Delhi.

</Description>

            <Title>rmkcet</Title>
            <People>
                <Person>
                    <h3>principle</h3>

                    <h4>name</h4>
                    <img src="" height="50px" width="50px" alt="" />
                </Person>
                <Person>
                    <h3>vice-principle</h3>

                    <h4>name</h4>
                    <img src="" height="50px" width="50px" alt="" />
                </Person>
            </People>
            <Description>des</Description>

        
        </Main>

        <BigTitle text="RMKCET" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
