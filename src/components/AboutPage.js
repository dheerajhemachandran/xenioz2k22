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
height:300vh;
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
                    <h4>DR. K.RAMAR</h4>
                    <img src={principle} height="200px" width="250px" alt="" />
                </Person>
                
            </People>
            <Description>The RMK group of educational institutions began their educational services in the early nineties and for the past 25 years it is their sustained hard work and dedication that has carved on niche in the field of engineering education. RMK College of Engineering and Technology was established in 2008.

The motto of the college is very lofty. Safety and security is given top priority, then impeccable discipline. All are provided with good food, when these are made available engineering education becomes a child’s play. Teachers carefully nurture the young ones in the field of engineering and their mode of inspiring the students is available only here.
<br/>RMK college of engineering spares no effort however tough or small it may be in elevating the educational quality, the bearing and orientation of the engineers that are molded, shaped and polished to be the young visionaries of the future of mankind.

The education process is excellent and the placement is enviable. We give training in engineering skills, not only that-we have centers of excellence where the college and top notch companies give training in various fields even before they get their placement. Unmindful of the expenses involved, the management pours millions into the training and placement aspects of the students. This makes the college unique.</Description>

            <Title>Department of Computer Science and Engineering</Title>
            <People>
                <Person>
                    <h3>HOD</h3>

                    <h4>DR. VALARMATHIE P</h4>
                    <img src={hod} height="200px" width="200px" alt="" />
                </Person>
                
            </People>
            <Description>The Department of Computer Science and Engineering was started in the academic year 2008-09 with an intake of 60 students and increased the intake to 120 students in 2012. It maintains excellent academic and Placement records since inception. Students are actively participating in five Centers of Excellence (CoE) (Big Data, Cloud, Mobility, Information Security, Front End Technologies) co-sponsored by top IT MNCs. It has State-of-Art Infrastructure and well qualified, experienced and dedicated faculty team. The students are actively involved in Co-curricular (CSI,CSEA) and Extra Curricular (Sports and Social) activities throughout the year. Our department facilitates Technology enabled learning and students are actively participating in NPTEL and Coding/ Project competitions across the country.</Description>

        
        </Main>

        <BigTitle text="RMKCET" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
