import React from 'react'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'
import Common from './Common'

const Home = () => {
    return (
        <>
        <Common 
        name='Grow your knowledge with'
        imgsrc={logo}
        vist='/service'
        btn_name='Get Started'
        />
        </>
    )
}
export default Home;