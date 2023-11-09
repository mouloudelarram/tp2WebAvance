import React, { useState } from 'react';
import AuthImage from '../public/images/bowser.webp';
import Data from '../public/characters.json';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <>
      {isAuthenticated ? <Home onLogin={handleLogin} /> : <Auth onLogin={handleLogin} />}
    </>
  );
}

function Auth({ onLogin }) {
  return (
    <div className="rounded-xl card bg-white bg-opacity-20 shadow-lg border-rounded-lg p-4 w-100">
      <img src={AuthImage} alt="Vite Logo" /> 
      <p>Hey, pas si vite ! Vous n'êtes pas connecté.</p>
      <button className="m-2" onClick={onLogin}>Se connecter</button>
    </div>
  );
}

function Home({ onLogin }) {
  return (
    <div className="grid">
    <button className="m-2 float-left" onClick={onLogin}>Se Déconnecter</button>
    <div className="grid-container flex flex-wrap justify-center p-4">
      {Data.map((item, index) => (
        <GridItemSmall key={index} item={item} />
      ))}
    </div>
  </div>
  );
}

function GridItemSmall({ item }) {
  return (
    <div className="rounded-xl card bg-white bg-opacity-20 shadow-lg border-rounded-lg p-4 m-1">
      <img className="rounded-full w-10 h-10" src={`../public/images/${item.imageUrl}`} alt={item.name} />
      <h3 className="my-2">{item.name}</h3>
      <p className="text-sm text-gray-400">{item.description}</p>
    </div>
  );
}

function GridItemAvg({ item }) {
  return (
    <div className="grid-item p-4">
      <img className="max-w-full h-auto" src={`../public/images/${item.imageUrl}`} alt={item.name} />
      <h3 className="my-2">{item.name}</h3>
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
  );
}

function GridItemLarge({ item }) {
  return (
    <div className="rounded-xl card bg-white bg-opacity-20 shadow-lg border-rounded-lg p-4 m-1">
      <img className="rounded-full w-20 h-20" src={`../public/images/${item.imageUrl}`} alt={item.name} />
      <h3 className="my-2">{item.name}</h3>
      <p className="text-sm text-gray-400">{item.description}</p>
    </div>
  );
}

export default App;
