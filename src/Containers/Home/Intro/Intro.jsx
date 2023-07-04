import React from 'react';
// import PropTypes from 'prop-types';
// import ShadowWrapper from '../../../Components/ShadowWrapper';
// import PropTypes from 'prop-types';
import personal from '../../../Assets/images/Self.jpg';
// import './Intro.scss';
import Image from '../../../Components/Image';
import Card from '../../../Components/Card';
import ShadowButton from '../../../Components/Buttons/ShadowButton';

const Intro = () => {
  return (
    <div className='intro-section'>
      <div className='left-section'>
        <Card type={'plain'}>
          <Image src={personal} height={350} />
        </Card>
      </div>
      <div className='right-section'>
        <div className='right-section-box'>
          <Card type={'info'}>
            <div className='intro-description'>
              <div className='description-block'>
                <h2>Hi! I am Shashank</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nostrum porro eaque
                  maxime pariatur ducimus eius magnam exercitationem ullam fuga enim, eos quo ipsam
                  distinctio perferendis. Quaerat sequi sunt officiis. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Recusandae sint quod laudantium, excepturi eligendi
                  repellendus perspiciatis enim. Sint quis in doloremque blanditiis quaerat,
                  perferendis molestias, consequuntur labore dolorum asperiores reprehenderit.
                </p>
              </div>
            </div>
          </Card>
          <div className='intro-buttons'>
            <ShadowButton value={'View Projects'} type={'primary'} className={'intro-primary'} />
            <ShadowButton value={'Contact'} type={'secondary'} className={'intro-secondary'} />
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {};

export default Intro;
