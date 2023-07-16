import React from 'react';
import personal from '../../../Assets/images/Self.jpg';
import NormalButton from '../../../Components/Buttons/NormalButton';
import Image from 'react-graceful-image';
import { useNavigate } from 'react-router-dom';
import Socials from '../../../Components/Socials';

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className='intro-section'>
      <div className='left-section'>
        <Image src={personal} height={350} className='intro-image' />
      </div>
      <div className='right-section'>
        <div className='right-section-box'>
          {/* <Card type={'info'}> */}
          <div className='intro-description'>
            <div className='description-block'>
              <h1 className='heading-1'>Hi! I am Shashank</h1>
              <p className='description'>
                I&apos;m a software engineer with a knack for transforming tricky challenges into
                elegant software solutions, currently pursuing a Masters in Software Engineering at
                Carnegie Mellon University. I&apos;ve spent my career developing cool applications
                with some of the biggest names in the biz, using a whole alphabet soup of
                technologies like JavaScript, TypeScript, React, and more. This website is a
                showcase of my journey so far: the projects I&apos;ve loved, the teams I&apos;ve
                collaborated with, and the impact I&apos;ve made along the way. Dive in and see what
                I&apos;ve been up to!
              </p>
              <p className='description'>
                <b>Mobile:</b> +1 (412)-277-9980
              </p>
              <p className='description'>
                <b>Email:</b> shk11sharma@gmail.com
              </p>
            </div>
          </div>
          {/* </Card> */}
          <div>
            <Socials />
          </div>
          <div className='buttons-group'>
            <NormalButton
              value={'View Projects'}
              type={'primary'}
              className={'primary'}
              onClick={() => navigate('/projects')}
            />
            <NormalButton
              value={'Resume'}
              type={'secondary'}
              className={'secondary'}
              onClick={() => navigate('/resume')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {};

export default Intro;
