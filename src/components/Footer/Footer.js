import React from 'react';
import './footer.css';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';


const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer_social'>
        <a href="https://www.instagram.com/himanshu_1911__/" target='_blank' rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; Himanshu Kumar. All Right Reserved</small>
      </div>

    </footer>
  )
}

export default Footer