import { useNavigate } from 'react-router-dom';
import Header from '../shared/header';
import useStatePoller from './hooks/useStatePoller';

const ControlCentre = () => {
  const navigate = useNavigate();
  const { userPlayer } = useStatePoller();

  return (
    <div>
      <Header />
      <h1 className="text-xxl">Control Centre</h1>
      {userPlayer.isAdmin ? (
        <div>
          <button className="btn btn-primary" onClick={() => navigate('/splash')}>
            Splash
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/main')}>
            Main
          </button>
          <button className="btn btn-accent" onClick={() => navigate('/rank')}>
            Rank
          </button>
        </div>
      ) : (
        <div>Please ask your game admin to start the game</div>
      )}
    </div>
  );
};

export default ControlCentre;
