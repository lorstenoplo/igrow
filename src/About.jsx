import React from 'react'
import web from './hero.png'
import { NavLink } from 'react-router-dom'
import Common from './Common'

const About = () => {
    return (
        <>
         <Common 
        name='Welcome to the About Page of  '
        imgsrc={web}
        vist='/contact'
        btn_name='Contact Us'
        />
        </>
    )
}
export default About;