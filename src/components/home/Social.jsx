import React from 'react';

const Social = () => {
  return (
    <div className="home__social">

      <a href="https://www.linkedin.com/in/rushikeshchorge/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
      <i className="uil uil-linkedin"></i>
      </a>

      <a href="https://github.com/Rushichorge17" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-github-alt"></i> {/* Fixed the typo in the class name */}
      </a>

      <a href="https://www.instagram.com/_rushi_17_/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
