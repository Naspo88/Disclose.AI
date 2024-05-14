import Header from '../../shared/header';

const Main = () => {
  return (
    <div>
      <Header />

      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">Regulator Rule</h2>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="The regulator chat message"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div className="chat-bubble">
              I am the reulator, and this is the rule that will govern the decision the player will make about investment and disclosure.
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Got it!</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Main;
