import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar fixed z-10 bg-neutral text-neutral-content font-oxanium">
      <div className="containerWrap flex justify-between px-4 lg:px-0">
        <h2 className="normal-case text-xl">Chat Now</h2>
        {currentUser && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Navbar;
