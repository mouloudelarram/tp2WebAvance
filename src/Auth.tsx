import AuthImage from '../public/images/bowser.webp';
interface AuthProps {
  onLogin: () => void;
}
const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  return (
      <div className="bg-white bg-opacity-30 rounded-xl p-5 text-center">
          <img className="mx-auto w-1/2" src={AuthImage} alt="Vite Logo" />
          <p>Hey, pas si vite ! Vous n'êtes pas connecté.</p>
          <button className="login-button" onClick={onLogin}>Se connecter</button>
      </div>

  );
}
export default Auth;
