const Rank = () => {
  return (
    <div>
      <h1>You think you're good?</h1>
      <input placeholder="Enter your name" />
      <button onClick={() => console.log('Join the game')}>
        Join the game
      </button>
    </div>
  );
};

export default Rank;
