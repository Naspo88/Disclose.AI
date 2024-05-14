const LoginPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Let's play</h1>
        <h1 className="text-5xl font-bold">Comply or Die!</h1>
        <h2 className="text-3xl py-6 font-bold">How to play the game</h2>
        <p className="py-3">
          The aim of the game is to make the most profit, without triggering a
          rule. You can choose to comply with the rule or take a risk and break
          the rule.
        </p>

        <p className="py-3">
          Good luck, and remember, the rules are there for a reason! When you're
          ready to play, enter your name below and join the game!
        </p>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Player name</span>
              </label>
              <input
                type="player-name"
                placeholder="Enter your name here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Join the game!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
