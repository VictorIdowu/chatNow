import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import preview from "../../src/chatNow.png";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200 font-oxanium lg:grid lg:grid-cols-2 items-center lg:pl-24">
      <div className="hero-content text-center lg:col-start-2">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
          <p className="py-6">
            Join the conversation, meet new people, and make connections in one
            shared room.
          </p>
          <button onClick={handleLogin} className="btn">
            Login With Google
          </button>
        </div>
      </div>
      <aside className="hidden lg:block rounded-lg overflow-hidden scale-105">
        <img className="" src="../../src/chatNow.png" alt="" />
      </aside>
    </div>
  );
};

export default Login;
