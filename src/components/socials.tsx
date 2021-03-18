import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import '../css/styles.css'

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
        icon: faEnvelopeSquare,
    },
]

const Socials = () => (
    <div className="icon-social" >
        {contactData.map((data) => (
            <a key={data.label} href={data.link} target="_blank" rel="noreferrer" style={{ color: '#FAFAFA' }}>
                <FontAwesomeIcon className={data.label} icon={data.icon} size='3x' style={{ padding: '8px' }} />
            </a>
        ))}
    </div>
)

export default Socials;