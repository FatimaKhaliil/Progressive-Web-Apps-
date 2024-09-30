import React from 'react';

const About = () => {
  const imageStyle = {
    width: '800px', // Setzt eine feste Breite des Bildes auf 300px
    height: 'auto', // Beibehaltung des Seitenverhältnisses
    display: 'block', // Optional: Vermeidet unerwünschten Platz um das Bild
    margin: '0 auto', // Optional: Zentriert das Bild im Container
  };

  return (
    <div>
      <img 
        src="iu-liste.jpg"
        alt="Bildbeschreibung hier" 
        style={imageStyle} 
      />
    </div>
  );
};

export default About;
