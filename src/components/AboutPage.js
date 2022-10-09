import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';

import hod from '../assets/Images/hod.png'
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import astronaut from '../assets/Images/rmkcet.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:800vh;
@media (max-width: 768px) {
    
    height:1700vh;
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
flex-direction:column;
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
width:300px;
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
`
const Button2=styled.a`
width:300px;
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
`
const Btncontainer=styled.div`
display:flex;
flex-direction:row;
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
                    <img style={{backgroundColor:"white"}} src="https://rmkcet.ac.in/new_images/rmk-chairman.jpg" height="350px" width="350px" alt="" />
                    <h3>Shri. R.S .Munirathinam</h3>
                    <h4>Founder-Chairman</h4>
                </Person>
                <Person>
                    <img style={{backgroundColor:"white"}} src="http://rmkec.ac.in/abt/img/MGT/management_04.jpg" height="350px" width="350px" alt="" />
                    <h3>Tmt. Manjula Munirathinam</h3>
                    <h4>Chairperson</h4>
                </Person>
                
            </People>
            <People>
                <Person>
                    <img style={{backgroundColor:"white"}} src="http://rmkec.ac.in/abt/img/MGT/management_06.jpg" height="350px" width="350px" alt="" />
                    <h3>Thiru.R. Jothi Naidu</h3>
                    <h4>Director</h4>
                </Person>
                <Person>
                    <img style={{backgroundColor:"white"}} src="http://rmkec.ac.in/abt/img/vc.jpg" height="350px" width="350px" alt="" />
                    <h3>Thiru.R.M. Kishore </h3>
                    <h4> Vice Chairman</h4>
                </Person>
                
            </People>
            <People>
                <Person>
                    <img style={{backgroundColor:"white"}} src="http://rmkec.ac.in/abt/img/MGT/management_03.jpg" height="350px" width="350px" alt="" />
                    <h3>Thiru.Yalamanchi Pradeep</h3>
                    <h4>Secreteray</h4>
                </Person>
                <Person>
                    <img style={{backgroundColor:"white"}} src="http://rmkec.ac.in/abt/img/MGT/management_07.jpg" height="350px" width="350px" alt="" />
                    <h3>Dr. Durga Devi Pradeep</h3>
                    <h4>Vice Chairperson</h4>
                </Person>
                
            </People>
            <People>
                <Person>
                    <img style={{backgroundColor:"white"}} src="http://rmkec.ac.in/abt/img/vc_mam.jpg" height="350px" width="350px" alt="" />
                    <h3>Tmt. Sowmya Kishore</h3>
                    <h4>Trustee</h4>
                </Person>
                
            </People>

            <People>
                <Person>
                    <img style={{backgroundColor:"white"}} src="https://rmkcet.ac.in/new_images/principal_ramar2021f.jpg" height="350px" width="350px" alt="" />
                    <h3>DR. K.RAMAR  </h3>
                    <h4>Principal</h4>
                </Person>
                <Person>
                    <img style={{backgroundColor:"white"}} src="https://rmkcet.ac.in/new_images/deanrmkcet.jpg" height="350px" width="350px" alt="" />
                    <h3>DR. K. SIVARAM </h3>
                    <h4>Dean Research </h4>
                </Person>
                
            </People>
            
             <Title>Department of Computer Science and Engineering</Title>
            <People>
                <Person>

                    <img style={{backgroundColor:"white"}} src={hod} height="350px" width="350px" alt="" />

                    <h3>Dr. Valarmathie.P</h3>

                    <h4>HOD-CSE</h4>
                </Person>
                <Person>

                    <img  src="https://rmkcet.ac.in/cse/xenoiz2k19/img/VigilsonPrem.jpg" height="350px" width="350px" alt="" />
                    
                    <h3>Dr. Vigilson Prem M</h3> 
                    
                    <h4>Professor</h4>               
                </Person>
                
            </People>
            
            <Btncontainer>
                <Button1 href="https://www.rmkcet.ac.in/cse-department.php" target="__blank">About the department</Button1>
                <Button2 href="https://www.rmkcet.ac.in/college.php" target="__blank">About the college</Button2>
            </Btncontainer>
        </Main>

        
        

        </Box>
        

        </ThemeProvider>
        
    )
}

export default AboutPage
