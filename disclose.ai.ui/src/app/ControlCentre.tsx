const ControlCentre = () => {
    return (
        <div>
            <h1>Control Centre</h1>
            <button onClick={() => console.log('navigate to start game')}>Start game</button>
            <button onClick={() => console.log('navigate to reset game')}>reset game</button>
            <button onClick={() => console.log('navigate to ranking game')}>Ranking</button>
        </div>
    );
}

export default ControlCentre;