const Header = () => {
  return (
    <header className="bg-base-100 p-4">
      <h1 className="text-center">Disclose.ai</h1>
      <div className="flex justify-between">
        <div>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span className="text-xs">HU</span>
            </div>
          </div>
          <span>Hello human!</span>
        </div>
        <div>
          <h3 className="font-bold">Your budget</h3>
          <div className="badge">$100,000</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
