import React from 'react'
import "./footer.scss"
import olma from "../../img/Help.png"
export const Footer = () => {
  return (
    <div className="container">
    <ul className="footer-list">
 <li className="footer-item">
 <img src={olma} alt="df" />
   <p className="footer-text">
     Trafalgar provides progressive, and affordable healthcare,
     accessible on mobile and online for everyone
   </p>
   <p className="footer-sub-text">
     ©Trafalgar PTY LTD 2020. All rights reserved
   </p>
  
 </li>
 <li className="footer-block">
   <h3 className="footer-title">Company</h3>
   <span className="footer-last-text" >About</span>
   <span className="footer-last-text" >Tetimonials</span>
   <span className="footer-last-text" >Find a doctor</span>
   <span className="footer-last-text" >Apps</span>
 </li>

 <li className="footer-block">
   <h3 className="footer-title">Region</h3>
   <span className="footer-last-text" >Indonesia</span>
   <span className="footer-last-text" >Singapore</span>
   <span className="footer-last-text" >Hongkong</span>
   <span className="footer-last-text" >Canada</span>
 </li>

 <li className="footer-block">
   <h3 className="footer-title">Help</h3>
   <span className="footer-last-text" >Help center</span>
   <span className="footer-last-text" >Contact support</span>
   <span className="footer-last-text" >Instructions</span>
   <span className="footer-last-text" >How it works</span>


 </li>
</ul>
</div>
  )
}
