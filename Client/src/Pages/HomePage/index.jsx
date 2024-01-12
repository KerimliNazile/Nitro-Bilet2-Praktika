import React from 'react'
import { Helmet } from 'react-helmet'
import OurServices from '../../Components/HomePageComponents/OurServices'
import Header from '../../Components/HomePageComponents/Header'
import AboutUs from '../../Components/HomePageComponents/AboutUs'
import OurTeam from '../../Components/HomePageComponents/OurTeam'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header/>
            <AboutUs/>
            <OurTeam/>
            <OurServices/>

        </div>
    )
}

export default Home
