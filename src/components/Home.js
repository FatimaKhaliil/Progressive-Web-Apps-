import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container" data-test="home-container">
      
      {/* Textblock */}
      <div className="text-block" data-test="text-block">
        <h2 data-test="home-title">Willkommen bei deiner Offline-fähigen To-Do-Liste</h2>
        <p data-test="home-paragraph-1">
          Unsere To-Do-Liste hilft dir, Aufgaben jederzeit und überall zu organisieren – auch offline. 
          Dank der PWA-Technologie kannst du Aufgaben hinzufügen, bearbeiten oder löschen, 
          und die App synchronisiert automatisch mit Firebase Firestore, sobald du online bist.
        </p>
        <p data-test="home-paragraph-2">
          E2E-Tests stellen sicher, dass alle Benutzeraktionen zuverlässig funktionieren. 
          Jede Funktion – vom Hinzufügen einer Aufgabe bis zum Löschen – wird automatisiert geprüft, 
          sodass die App stabil, fehlerfrei und benutzerfreundlich bleibt.
        </p>
        <p data-test="home-paragraph-3">
          Mit dieser Kombination aus einer intuitiven To-Do-Liste und automatisierten E2E-Tests 
          genießt du maximale Sicherheit, Effizienz und Komfort bei der Verwaltung deiner Aufgaben.
        </p>
      </div>

      {/* Bildblock */}
      <div className="image-block" data-test="image-block">
        <img 
          src="liste.jpg" 
          alt="Offline-fähige To-Do-Liste" 
          data-test="home-image"
        />
      </div>
    </div>
  );
};

export default Home;
