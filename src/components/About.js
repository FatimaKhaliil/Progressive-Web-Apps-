import React from 'react';

const About = () => {
  const imageStyle = {
    width: '800px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  return (
    <div data-test="about-container">
      <img 
        src="about.PNG"
        alt="Bildbeschreibung hier" 
        style={imageStyle} 
        data-test="about-image"
      />
    </div>
  );
};

export default About;
