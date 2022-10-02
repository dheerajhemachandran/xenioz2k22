import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import { Map, GoogleApiWrapper } from 'google-maps-react';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 50vw;
margin:3rem;
height: fit-content;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
margin-top:25%;
margin-bottom:auto;
flex-direction: column;
justify-content: space-between;
animation:popup .5s;

@keyframes popup{
    from{
        transform: scale(0);
    }
    to{
        transform: scale(1.0);
    }
}

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`
const Submain=styled.div`
animation:show 2s;

@keyframes show{
    from{
        opacity:0
    }
    to{
        opacity:1
    }
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
     venue
</Title>
<Description>
R.M.K.College of Engineering and Technology<br />
R.S.M. Nagar,<br />
Puduvoyal, Tiruvallur District,<br />
Tamil Nadu, Pin code: 601 206.
</Description>
</Main>

<Submain>
<Title>
Staff Coordinator
</Title>
<Description>
Mrs.Indra Priyadharshini<br/>
(Assistant Professor)<br/>
Dept. of Computer Science and Engineering<br/>
Phone: 044-67900630<br/>
E-mail : indracse@rmkcet.ac.in<br/>
</Description>
<br/>
<br/>
<Title>
Student Coordinators
</Title>
<Description>
President<br/>
(Harish Kumar.R.J)<br/>
hari19cs036@rmkcet.ac.in<br/><br/>
Secretary<br/>
(Dincy.V.D)<br/>
dinc19cs024@rmkcet.ac.in<br/><br/>
</Description>
</Submain>
            

            <BigTitle text="CONTACT" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
