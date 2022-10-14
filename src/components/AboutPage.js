import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';

import hod from '../assets/Images/hod.png'
import advisor from '../assets/Images/advisor.png'
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import astronaut from '../assets/Images/rmkcet.png'
import principle from '../assets/Images/princ.png'
import dean from '../assets/Images/dean.png'
import vc from '../assets/Images/vc.png'
import chairperson from '../assets/Images/chairperson.png'
import jothi from '../assets/Images/jothi.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:2700px;
@media (max-width: 768px) {
    
    height:4400px;
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
top: 50px;
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
gap:2rem;
align-items:center;
justify-content:space-around;
@media (max-width: 768px) {
    flex-direction:column;
    gap:.5rem;
  }
  `

const Person=styled.div`
display:flex;

flex-direction:column;
align-items:center;
margin-top:40px`

const Title=styled.h3`
display:flex;
text-align:center;
margin:3rem auto;
justify-content:center;`


const Button1=styled.a`
width:250px;
font-weight:600;
padding:10px;
font-size:25px;
border:0;
text-align:center;
color:#000;
background-color:white;
border-radius:10px;
margin:50px auto;
text-decoration:none;
@media (max-width: 768px) {
    width:150px;
    
margin:20px auto;
font-weight:400;
padding:5px;
font-size:15px;
  }
`
const Button2=styled.a`
width:250px;
font-weight:600;
padding:10px 2px;
font-size:25px;
border:0;
text-align:center;
color:#000;
background-color:white;
border-radius:10px;
margin:50px auto;

text-decoration:none;
@media (max-width: 768px) {
    width:150px;
    margin:20px auto;
font-weight:400;
padding:5px;
font-size:15px;
  }
`
const Btncontainer=styled.div`
display:flex;
flex-direction:row;
@media (max-width: 768px) {
    
   
flex-direction:column;
      }
justify-content:space-between;`

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
                    <img style={{backgroundColor:"white"}} src={chairperson} height="200px" width="200px" alt="" />
                    <h3>Tmt. Manjula Munirathinam</h3>
                    <h4>Chairperson</h4>
                </Person>
                <Person>
                    <img style={{backgroundColor:"white"}} src="https://rmkcet.ac.in/new_images/rmk-chairman.jpg" height="200px" width="200px" alt="" />
                    <h3>Thiru. R.S .Munirathinam</h3>
                    <h4>Founder-Chairman</h4>
                </Person>
               
                
            </People>
            <People>
                <Person>
                    <img style={{backgroundColor:"white"}} src={jothi} height="200px" width="200px" alt="" />
                    <h3>Thiru.R. Jothi Naidu</h3>
                    <h4>Director</h4>
                </Person>
                <Person>
                    <img style={{backgroundColor:"white"}} src="http://rmkec.ac.in/abt/img/vc.jpg" height="200px" width="200px" alt="" />
                    <h3>Thiru.R.M. Kishore </h3>
                    <h4> Vice Chairman</h4>
                </Person>
                
            </People>
            <People>
                <Person>
                    <img style={{backgroundColor:"white"}} src="http://rmkec.ac.in/abt/img/MGT/management_03.jpg" height="200px" width="200px" alt="" />
                    <h3>Thiru.Yalamanchi Pradeep</h3>
                    <h4>Secreteray</h4>
                </Person>
                <Person>
                    <img style={{backgroundColor:"white"}} src={vc} height="200px" width="200px" alt="" />
                    <h3>Dr. Durga Devi Pradeep</h3>
                    <h4>Vice Chairperson</h4>
                </Person>
                
            </People>
            <People>
                <Person>
                    <img style={{backgroundColor:"white"}} src="http://rmkec.ac.in/abt/img/vc_mam.jpg" height="200px" width="200px" alt="" />
                    <h3>Tmt. Sowmya Kishore</h3>
                    <h4>Trustee</h4>
                </Person>

                <Person>
                    <img style={{backgroundColor:"white"}} src={advisor} height="200px" width="200px" alt="" />
                    <h3>Dr. M.S. Palanichamy</h3>
                    <h4>Advisor</h4>
                </Person>
                
            </People>

            <People>
                <Person>
                    <img style={{backgroundColor:"white"}} src={principle} height="200px" width="200px" alt="" />
                    <h3>Dr. K.Ramar  </h3>
                    <h4>Principal</h4>
                </Person>
                <Person>
                    <img style={{backgroundColor:"white"}} src={dean} height="200px" width="200px" alt="" />
                    <h3>Dr. K. Sivaram </h3>
                    <h4>Dean-Research </h4>
                </Person>
                
            </People>
            
             <Title>Department of Computer Science and Engineering</Title>
            <People>
                <Person>

                    <img style={{backgroundColor:"white"}} src={hod} height="200px" width="200px" alt="" />

                    <h3>Dr. Valarmathie P</h3>

                    <h4>HOD-CSE</h4>
                </Person>
                <Person>

                    <img  src="https://rmkcet.ac.in/cse/xenoiz2k19/img/VigilsonPrem.jpg" height="200px" width="200px" alt="" />
                    
                    <h3>Dr. Vigilson Prem M</h3> 
                    
                    <h4>Professor</h4>               
                </Person>
                
            </People>
            
            <Btncontainer>
                <Button1 href="https://www.rmkcet.ac.in/cse-department.php" target="__blank">About the Department</Button1>
                <Button2 href="https://www.rmkcet.ac.in/college.php" target="__blank">About the College</Button2>
            </Btncontainer>
        </Main>

        
        

        </Box>
        

        </ThemeProvider>
        
    )
}

export default AboutPage
