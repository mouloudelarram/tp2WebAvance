import React from 'react';
import Data from '../public/characters.json';
import Grid from './Grid';

interface HomeProps {
    onLogin: () => void;
}

const Home: React.FC<HomeProps> = ({onLogin}) => {
    return (
        <div className="text-right">
            <button className="m-2" onClick={onLogin}>
                Se Déconnecter
            </button>
            <div className="grid-container">
                {Data.map((item, index) => (
                    <Grid gridKey={index + 1} item={item}/>
                ))}
            </div>
        </div>
    );
};
export default Home;
