import React from 'react';
import './App.css';
import img from '../src/image/about.jpg';
import Common from './Common';

function About() {
  return (
    <Common  name="Welcome to About Page" imgsrc = {img} visit='/contact' btname="Contact Me" />
  );
}

export default About;