import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Rushikesh Chorge</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>

            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.linkedin.com/in/rushikeshchorge/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
      <i className="uil uil-linkedin"></i>
      </a>

      <a href="https://github.com/Rushichorge17" className="footer__social-link" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-github-alt"></i> {/* Fixed the typo in the class name */}
      </a>

      <a href="https://www.instagram.com/_rushi_17_/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-instagram"></i>
      </a>

      <a href="https://twitter.com/ChorgeRushi17" className="footer__social-link" target="_blank" rel="noopener noreferrer">
        <i className="bx bxl-twitter"></i>
      </a>
        </div>

        <span className="footer__copy">&#169; Rushikesh.All rights reserved</span>

    </div>
   </footer>
  )
}

export default Footer
