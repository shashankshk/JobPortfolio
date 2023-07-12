import React from 'react';
// import PropTypes from 'prop-types';
// import ShadowWrapper from '../../../Components/ShadowWrapper';
// import PropTypes from 'prop-types';
import personal from '../../../Assets/images/Self.jpg';
// import './Intro.scss';
// import Image from '../../../Components/Image';
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
                elegant software solutions. I&apos;ve spent my career developing cool applications
                with some of the biggest names in the biz, using a whole alphabet soup of
                technologies like JavaScript, TypeScript, React, and more. I got my Master&apos;s
                from Carnegie Mellon, but I&apos;m always learning, always growing. This website is
                a showcase of my journey so far: the projects I&apos;ve loved, the teams I&apos;ve
                collaborated with, and the impact I&apos;ve made along the way. Dive in and see what
                I&apos;ve been up to!
              </p>
            </div>
          </div>
          {/* </Card> */}
          <div className='intro-buttons'>
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
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {};

export default Intro;
