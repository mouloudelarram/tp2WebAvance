import React from 'react';
import Data from '../public/characters.json';
import Grid from './Grid';

interface HomeProps {
  onLogin: () => void;
}

const Home: React.FC<HomeProps> = ({ onLogin }) => {
  return (
    <div className="grid">
      <button className="m-2 float-left" onClick={onLogin}>
        Se Déconnecter
      </button>
      <div className="grid-container flex flex-wrap justify-center p-4">
        {Data.map((item, index) => (
          <Grid key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
