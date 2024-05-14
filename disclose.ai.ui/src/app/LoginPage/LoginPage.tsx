const LoginPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Let's play</h1>
        <h1 className="text-5xl font-bold">Comply or Die!</h1>
        <h2 className="py-6 font-bold">How to play the game</h2>
        <p className="py-6">
          The aim of the game is to make the most profit, without triggering a
          rule. You can choose to comply with the rule or take a risk and break
          the rule. Good luck, and remember, the rules are there for a reason!
          When you're ready to play, enter your name below and join the game!
        </p>
        <div>
          <input placeholder="Enter your name" />
        </div>
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={() => console.log('Join the game')}
        >
          Join the game
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
