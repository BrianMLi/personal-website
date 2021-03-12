import React from 'react';
import background from './images/flower.png';
import Socials from './components/socials';
import Profile from './components/profile';
import './css/styles.css'

function App() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div>
        <Profile />
        <Socials />
      </div>
    </div>
  );
}

export default App;