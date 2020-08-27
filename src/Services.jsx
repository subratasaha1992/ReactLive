import React from 'react';
import './App.css';
import Card from './Card';
import img1 from '../src/image/s1.jpg';
import img2 from '../src/image/s2.png';
import img3 from '../src/image/s3.png';
import img4 from '../src/image/s4.png';
import img5 from '../src/image/s5.png';
import img6 from '../src/image/s6.jpg';

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services </h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              <Card img={img1} title="Software Development" text="We are making software better more better" link="https://getbootstrap.com/docs/4.5/components/card/" />
              <Card img={img2} title="Web Development" text="We are making software better more better" link="https://getbootstrap.com/docs/4.5/components/card/" />
              <Card img={img3} title="Analytics" text="We are making software better more better" link="https://getbootstrap.com/docs/4.5/components/card/" />
              <Card img={img4} title="App Development" text="We are making software better more better" link="https://getbootstrap.com/docs/4.5/components/card/" />
              <Card img={img5} title="Digital Marketing" text="We are making software better more better" link="https://getbootstrap.com/docs/4.5/components/card/" />
              <Card img={img6} title="Cloud Computing" text="We are making software better more better" link="https://getbootstrap.com/docs/4.5/components/card/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;