import React from 'react'
import AboutUs from './Components/AboutUs'
import Features from './Components/Features'
import Banner from './Components/Banner'
import Testimonials from './Components/Testimonials'
import HeroSection from './Components/HeroSection'

export default function AboutPage() {
    return (
        <>
            <HeroSection title="About US" />
            <AboutUs />
            <Features />
            <Banner />
            <Testimonials />
        </>
    )
}
