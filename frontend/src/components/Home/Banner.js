import React from 'react';
import logo from '../../imgs/logo.png';

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" style={{ width: '100%' }} />
        <div>
          <span id="get-part">A place to get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
