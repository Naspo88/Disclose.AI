import { useNavigate } from "react-router-dom";
import Header from "../shared/header";


const ControlCentre = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <h1 className="card">Control Centre</h1>
            <button className="btn btn-primary" onClick={() => navigate('/splash')}>Splash</button>
            <button className="btn btn-secondary" onClick={() => navigate('/main')}>Main</button>
            <button className="btn btn-accent" onClick={() => navigate('/rank')}>Rank</button>
        </div>
    );
}

export default ControlCentre;