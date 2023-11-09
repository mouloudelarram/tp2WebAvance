import { useState } from 'react';
import './App.css';
import Auth from './Auth';
import Home from './Home';
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

export default App;
