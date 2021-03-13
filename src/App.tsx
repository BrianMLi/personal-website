import React from 'react';
import background from './images/background.png';
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
      <Profile />
    </div>
  );
}

export default App;