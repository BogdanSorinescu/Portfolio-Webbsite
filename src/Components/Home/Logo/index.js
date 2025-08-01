import React from 'react';
import './index.scss';
import LogoS from '../../../assets/images/BogdanLogo3D.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="logo" />
    </div>
  );
};

export default Logo;
