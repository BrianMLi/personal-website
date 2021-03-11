import React from 'react';
import background from './images/flower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './css/styles.css'

const contactData = [
  {
    link: 'https://github.com/BrianMLi',
    label: 'github-icon',
    icon: faGithubSquare,
  },
  {
    link: 'https://www.linkedin.com/in/brianmarcoli/',
    label: 'linkedin-icon',
    icon: faLinkedin,
  },
  {
    link: 'mailto:bli23_lj@hotmail.com',
    label: 'email-icon',
    icon: faEnvelope,
  },
]

function App() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className="icon-social" >
        {contactData.map((data) => (
          <a href={data.link} target="_blank" style={{ color: '#FAFAFA' }}>
            <FontAwesomeIcon className={data.label} icon={data.icon} size='3x' style={{ padding: '8px' }} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
