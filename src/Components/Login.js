import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const togglehandler = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form className="absolute w-3/12 p-10 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-4 w-full text-black rounded-lg"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          className="p-2 my-4 w-full text-black rounded-lg"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-2  my-4 w-full text-black rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="p-2  my-4 w-full bg-red-700 rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={togglehandler}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already a User? Sign in Now"}
        </p>
        {/* <p className="my-2">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p> */}
      </form>
    </div>
  );
};

export default Login;
