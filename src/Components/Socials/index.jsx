import React, { useContext } from 'react';
import Icon from '../Icons/Icon';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../../contexts/theme';
const Socials = () => {
  const { theme } = useContext(ThemeContext);
  return theme == 'dark' ? (
    <>
      <div onClick={() => window.open('https://github.com/shashankshk')} className='social-icon'>
        <Icon
          type={faGithub}
          style={{ color: 'white', marginLeft: '20px', margin: 'auto 20px' }}
          size='xl'
        />
      </div>
      <div
        onClick={() => window.open('https://www.linkedin.com/in/shashank--shekhar/')}
        className='social-icon'
      >
        <Icon type={faLinkedin} style={{ color: '#0A66C2', margin: 'auto 0 auto 0' }} size='xl' />
      </div>
    </>
  ) : (
    <>
      <div onClick={() => window.open('https://github.com/shashankshk')} className='social-icon'>
        <Icon
          type={faGithub}
          style={{ color: 'black', marginLeft: '20px', margin: 'auto 20px' }}
          size='xl'
        />
      </div>
      <div
        onClick={() => window.open('https://www.linkedin.com/in/shashank--shekhar/')}
        className='social-icon'
      >
        <Icon type={faLinkedin} style={{ color: '#0A66C2', margin: 'auto 0 auto 0' }} size='xl' />
      </div>
    </>
  );
};

export default Socials;
