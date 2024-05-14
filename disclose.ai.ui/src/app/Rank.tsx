import { useNavigate } from "react-router-dom";


const ControlCentre = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="card">Control Centre</h1>
            <button className="btn btn-primary" onClick={() => navigate('/splash')}>Splash</button>
            <button className="btn btn-secondary" onClick={() => navigate('/main')}>Main</button>
            <button className="btn btn-accent" onClick={() => navigate('/rank')}>Rank</button>
            <button className="btn btn-quadernary" onClick={() => navigate('/game-over')}>Game Over</button>

        </div>
    );
}

export default ControlCentre;