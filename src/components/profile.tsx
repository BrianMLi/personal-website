import React from 'react';
import image from '../images/profile.png'
import '../css/styles.css'

const Profile = () => (
    <div className='profile'>
        <div className='profile-image'>
            <img src={image} />
        </div>
        <div className='headline'>
            Brian Marco Li
        </div>
    </div>
)

export default Profile;