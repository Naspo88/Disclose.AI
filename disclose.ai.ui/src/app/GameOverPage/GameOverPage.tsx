import Header from '../../shared/header';

const GameOverPage = () => {
  return (
    <div>
      <Header />
      <h1>Let's play - Comply or Die!</h1>
      <input placeholder="Enter your name" />
      <button onClick={() => console.log('Join the game')}>Join the game</button>
    </div>
  );
};

export default GameOverPage;
