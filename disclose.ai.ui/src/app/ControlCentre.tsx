const ControlCentre = () => {
    return (
        <div>
            <h1 className="card">Control Centre</h1>
            <button className="btn btn-primary" onClick={() => console.log('navigate to start game')}>Splash</button>
            <button className="btn btn-secondary" onClick={() => console.log('navigate to reset game')}>Main</button>
            <button className="btn btn-accent" onClick={() => console.log('navigate to ranking game')}>Rank</button>
            <button className="btn btn-quadernary" onClick={() => console.log('navigate to ranking game')}>Game Over</button>

        </div>
    );
}

export default ControlCentre;