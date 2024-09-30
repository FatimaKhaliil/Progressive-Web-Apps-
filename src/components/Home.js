import React from 'react';
import './Home.css'; // Importiere die CSS-Datei für Media Queries

const Home = () => {
  return (
    <div className="home-container">
      {/* Textblock */}
      <div className="text-block">
        <h2>Willkommen bei der Offline-fähigen To-Do-Liste</h2>
        <p>
          Organisiere deine Aufgaben jederzeit und überall – auch ohne Internetverbindung. 
          Unsere Progressive Web App (PWA) ermöglicht es dir, deine Aufgaben offline zu verwalten, 
          mit nahtloser Synchronisation in die Cloud über Firebase Firestore, sobald du wieder online bist.
        </p>
        <p>
          Beginne damit, deine Aufgaben in Echtzeit zu verwalten, und genieße die Flexibilität, 
          deine To-Dos von jedem Gerät aus zu erreichen.
        </p>
        <p>
          Genieße die Benutzerfreundlichkeit und die Offline-Fähigkeiten – ganz ohne den App Store!
        </p>
      </div>

      {/* Bildblock */}
      <div className="image-block">
        <img 
          src="liste.jpg" 
          alt="Bildbeschreibung hier" 
        />
      </div>
    </div>
  );
};

export default Home;
