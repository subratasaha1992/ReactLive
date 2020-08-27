import React from 'react';
import './App.css';
import  Common from './Common'
import img from '../src/image/home.jpg';

function Home() {
    return (
        <Common  name="We are the team of talented developer making websites" imgsrc = {img} visit='/about' btname="Get Started" />
    );
}

export default Home;