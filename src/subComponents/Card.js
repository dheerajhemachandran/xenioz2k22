import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';


const Box = styled(motion.li)`
width: 20rem;
height: 60vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding:2rem;
margin-right:8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};

}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const Tags = styled.ul`
padding:1rem 0rem;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
const Tag = styled.li`
list-style-type: circle;
font-size:calc(0.8em + 0.3vw);

animation:fadeIn 5s;
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);
text-decoration:none;
cursor: pointer;

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};

}
`


const Reg = styled.a`
color: ${props =>props.theme.body};
padding:0.5rem calc(2rem + 2vw);
font-size:calc(1em + 0.5vw);
text-decoration:none;
border-radius:8px;
cursor: pointer;

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};

}
`

const reg=styled.a`
`
const Image=styled.img`
margin:2rem auto;
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.text};
    }
}

`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, pics, tags, link, github} = props.data;
    const [show, setshow] = useState(       )
    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            
            <Tags>
                {show?<>
                    {
                    tags.map((t,id) => {
                        return <Tag key={id}>{t}</Tag>
                    })
                }</>:
                <Image src={pics} height="280px" width="100%" alt="" />}
            
            </Tags>
            {show?
                <Reg href={link}  target="_blank">
                    Register
                </Reg>:<></>}
            <Footer>
                <Link onClick={()=>setshow(!show)}>
                    {show?"hide":"rules"}
                </Link>
                
                
            </Footer>
        </Box>
    )
}

export default Card
