import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import {DarkTheme} from '../components/Themes'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:5;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

`

const Line = styled(motion.span)`
width: 2px;
height: 1rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
`

const SocialIcons = (props) => {
    return (
        <Icons>
           
            
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <a style={{color:'inherit'}}  target="_blank"   href="https://www.instagram.com/xenioz_2k22/">
                <img height="40px" width="40px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjNGIwMTRmIj4KICA8cGF0aCBkPSJtMzc2IDI4OC42OGMtNDcuMzU5IDAtODcuMzE2IDM4LjQ3Ny04Ny4zMTYgODcuMzE2czM4LjQ3NyA4Ny4zMTYgODcuMzE2IDg3LjMxNiA4Ny4zMTYtMzguNDc3IDg3LjMxNi04Ny4zMTZjMC00OC44MzYtMzkuOTU3LTg3LjMxNi04Ny4zMTYtODcuMzE2em0tMzQuMDM5IDUxLjgwMWMtNy4zOTg0IDAtMTMuMzItNS45MTgtMTMuMzItMTMuMzIgMC03LjM5ODQgNS45MTgtMTMuMzIgMTMuMzItMTMuMzIgNy4zOTg0IDAgMTMuMzIgNS45MTggMTMuMzIgMTMuMzIgMCA3LjM5ODQtNS45MTggMTMuMzItMTMuMzIgMTMuMzJ6Ii8+CiAgPHBhdGggZD0ibTUyOS45MSAyMDEuMzdoLTMwNy44M2MtMTMuMzE2IDAtMjMuNjc2IDEwLjM1OS0yMy42NzYgMjIuMTk5djMwMy4zOWMwIDExLjg0IDEwLjM1OSAyMi4xOTkgMjIuMTk5IDIyLjE5OWgzMDcuODNjMTEuODQgMCAyMi4xOTktMTAuMzU5IDIyLjE5OS0yMi4xOTlsLTAuMDAzOTA3LTMwMy4zOWMyLjk2MDktMTEuODQtNy4zOTg0LTIyLjE5OS0yMC43MTktMjIuMTk5em0tMTUzLjkxIDI5MS41NWMtNjMuNjM3IDAtMTE2LjkxLTUxLjc5Ny0xMTYuOTEtMTE2LjkxIDAtNjUuMTE3IDUxLjc5Ny0xMTYuOTEgMTE2LjkxLTExNi45MXMxMTYuOTEgNTEuNzk3IDExNi45MSAxMTYuOTFjMC4wMDM5MDcgNjUuMTEzLTUzLjI3MyAxMTYuOTEtMTE2LjkxIDExNi45MXptMTI1LjgtMjQyLjcxYy03LjM5ODQgMC0xMy4zMi01LjkxOC0xMy4zMi0xMy4zMiAwLTcuMzk4NCA1LjkxOC0xMy4zMiAxMy4zMi0xMy4zMiA3LjM5ODQgMCAxMy4zMiA1LjkxOCAxMy4zMiAxMy4zMiAwIDcuMzk4NC00LjQ0MTQgMTMuMzItMTMuMzIgMTMuMzJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=" alt="" />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <a style={{color:'inherit'}}  target="_blank"   href="mailto: xenioz2k22@gmail.com">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMjAxLjIyIDI0My40Yy0xNS43MTUgMC0yOC44NTkgMTIuNzExLTI4Ljg1OSAyOC40MTR2MjA4LjM4YzAgMTUuNzAzIDEzLjE0MSAyOC40MTQgMjguODU5IDI4LjQxNGgzNDkuNTZjMTUuNzE1IDAgMjguODU5LTEyLjcxMSAyOC44NTktMjguNDE0di0yMDguMzhjMC0xNS43MDctMTMuMTQxLTI4LjQxNC0yOC44NTktMjguNDE0em00Ljg4MjggMTguOTQxaDMzOS43OWwtMTYxLjYxIDE0NC40NGMtNC4wMzEyIDMuNjAxNi0xMi41NDcgMy42MDE2LTE2LjU3NCAwbC0xNjEuNjEtMTQ0LjQ0em0tMTQuNzk3IDEyLjEzNyAxMTguMjUgMTA1LjY3LTExOC4yNSA5Ny45NzN6bTM2OS4zOSAwdjIwMy42NGwtMTE4LjI1LTk3Ljk3M3ptLTIzNi43OSAxMTguNTQgMzEuMjI3IDI3LjgyNGMxMS44NDQgMTAuNTg2IDI5Ljg5MSAxMC41ODYgNDEuNzM0IDBsMzEuMjI3LTI3LjgyNCAxMTYuNzcgOTYuNjQxaC0zMzcuNzJsMTE2Ljc3LTk2LjY0MXoiIGZpbGw9IiM0YjAxNGYiLz4KPC9zdmc+Cg==" height="40px" width="40px" alt="" /> </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <a style={{color:'inherit'}}  target="_blank"   href="https://goo.gl/maps/meADyYrPYZzveRaQA">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzc2IDE2OC44MWM5Mi41NzggMCAxNjcuNzMgNzUuMTUyIDE2Ny43MyAxNjcuNzMgMCA0My44MTYtMjMuODc1IDkyLjc3My01NC4xNDUgMTM1LjA5LTQxLjgwNSA1OC40My05NC4wNjYgMTA0LjIzLTk0LjA2NiAxMDQuMjMtMTEuMTY4IDkuNzg5MS0yNy44NTkgOS43ODkxLTM5LjAzMSAwIDAgMC01Mi4yNjItNDUuNzk3LTk0LjA2Mi0xMDQuMjMtMzAuMjctNDIuMzE2LTU0LjE0OC05MS4yNzMtNTQuMTQ4LTEzNS4wOSAwLTkyLjU3NCA3NS4xNTItMTY3LjczIDE2Ny43My0xNjcuNzN6bTAgOTguNjY0Yy0zOC4xMTMgMC02OS4wNjIgMzAuOTQ5LTY5LjA2MiA2OS4wNjIgMCAzOC4xMTMgMzAuOTQ5IDY5LjA2NiA2OS4wNjIgNjkuMDY2czY5LjA2Ni0zMC45NTMgNjkuMDY2LTY5LjA2NmMwLTM4LjExMy0zMC45NTMtNjkuMDYyLTY5LjA2Ni02OS4wNjJ6IiBmaWxsPSIjNGIwMTRmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==" height="40px" width="40px" alt="" /> </a>
            </motion.div>

            <Line color={props.theme}

initial={
    {
        height:0
    }
}
animate={{
    height: '3rem'
}}
transition={{
    type:'spring', duration:1, delay:0.8
}}
            />
        </Icons>
    )
}

export default SocialIcons
