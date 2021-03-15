import React from 'react';
import image from '../images/profile.png'
import Socials from './socials';
import '../css/styles.css'

const Profile = () => (

    <div className='profile'>
        <section>
            <div className='profile-image'>
                <img alt="" src={image} />
            </div>
        </section>
        <section>
            <div className='headline'>
                Brian Marco Li
            </div>
        </section>
        <section className='about'>
            <h2>About Me</h2>
            <p>
                I graduated from the Sauder School of Business at the University of British Columbia with a Combined Major in Business and Computer Science (Honours).
                I love to bake sweets and play games, and have previously worked at SAP for 8 months as a Agile Developer.
            </p>
            <Socials />
        </section>
    </div>
)

export default Profile;