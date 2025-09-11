import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container" data-test="home-container">
      
      {/* Textblock */}
      <div className="text-block" data-test="text-block">
        <h2 data-test="home-title">Willkommen bei der Offline-fähigen To-Do-Liste</h2>
        <p data-test="home-paragraph-1">
          Organisiere deine Aufgaben jederzeit und überall – auch ohne Internetverbindung. 
          Unsere Progressive Web App (PWA) ermöglicht es dir, deine Aufgaben offline zu verwalten, 
          mit nahtloser Synchronisation in die Cloud über Firebase Firestore, sobald du wieder online bist.
        </p>
        <p data-test="home-paragraph-2">
          Beginne damit, deine Aufgaben in Echtzeit zu verwalten, und genieße die Flexibilität, 
          deine To-Dos von jedem Gerät aus zu erreichen.
        </p>
        <p data-test="home-paragraph-3">
          Genieße die Benutzerfreundlichkeit und die Offline-Fähigkeiten – ganz ohne den App Store!
        </p>
      </div>

      {/* Bildblock */}
      <div className="image-block" data-test="image-block">
        <img 
          src="liste.jpg" 
          alt="Bildbeschreibung hier" 
          data-test="home-image"
        />
      </div>
    </div>
  );
};

export default Home;
