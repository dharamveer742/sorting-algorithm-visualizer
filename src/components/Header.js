import React,{useState,useEffect} from 'react';      // useState and useEffect 
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);   // false = visible true = hide
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}} >  
        <h3 className="header__bar__title">Frontend Developer</h3>
        <div className="header__bar__icons">
          <a href="#" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
          <a href="#" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
          <a href="#" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
          <a href="#" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
        </div>
      </div>

      <div className="header-logo">Easy<span>Algos</span></div>
      <div className="header__options">
         <h3 className="header__option" onClick = {contactHandler}><span>G</span>et <span>I</span>n <span>T</span>ouch</h3>
      </div>
   </div>
  )
}

export default Header;