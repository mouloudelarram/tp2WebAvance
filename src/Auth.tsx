import AuthImage from '../public/images/bowser.webp';

interface AuthProps {
  onLogin: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  return (
    <div className="rounded-xl card bg-white bg-opacity-20 shadow-lg border-rounded-lg p-4 w-full">
      <img src={AuthImage} alt="Vite Logo" /> 
      <p>Hey, pas si vite ! Vous n'êtes pas connecté.</p>
      <button className="m-2" onClick={onLogin}>Se connecter</button>
    </div>
  );
}

export default Auth;
