import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='left-head-container'>
        <div className='logo'>MyOtherFitnessPal</div>
        {/* <img src={require('../assets/strong-logo.png')} className='logo-png' /> */}
      </div>
      <div className='right-head-container'>
        <Link className='right-head-text' to={'/'}>
          <div className='right-head-text'>Home</div>
        </Link>
        <Link className='right-head-text' to={'/user-information'}>
          <div className='right-head-text'>User Information</div>
        </Link>
        <Link className='right-head-text' to={'/summary'}>
          <div className='right-head-text'>Goals</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
