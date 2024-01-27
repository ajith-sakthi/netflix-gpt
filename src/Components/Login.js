import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidation } from "../Utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import {PHOTO_URL, BG_URL} from  "../Utils/constants";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch=useDispatch();
 
  const togglehandler = () => {
    setisSignIn(!isSignIn);
  };

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    //form validation
    const message = checkValidation(
      email?.current?.value,
      password?.current?.value,
      fullName?.current?.value
    );
    seterrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // SignUp form
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fullName?.current?.value,
            photoURL: {PHOTO_URL},
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      // SignIn form
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fullName?.current?.value,
            photoURL: {PHOTO_URL},
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-10 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div>
            <div>
              <input
                ref={fullName}
                className="p-2 my-4 w-full text-black rounded-lg"
                type="text"
                placeholder="Full name"
              />
            </div>
            <div>
              {errorMessage === "Enter valid name" && (
                <p className="text-red-700 my-0 font-bold">{errorMessage}</p>
              )}
            </div>
          </div>
        )}

        <input
          ref={email}
          className="p-2 my-4 w-full text-black rounded-lg"
          type="text"
          placeholder="Email Address"
        />
        {errorMessage === "Email is not valid" && (
          <p className="text-red-700 my-0 font-bold">{errorMessage}</p>
        )}
        <input
          ref={password}
          className="p-2  my-4 w-full text-black rounded-lg"
          type="password"
          placeholder="Password"
        />
        {errorMessage === "Password is not valid" && (
          <p className="text-red-700 my-0 font-bold">{errorMessage}</p>
        )}
        {errorMessage === "auth/invalid-credential" && (
          <p className="text-red-700 my-0 font-bold">Invalid credential</p>
        )}
        <button
          className="p-2  my-4 w-full bg-red-700 rounded-lg"
          onClick={handleValidation}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={togglehandler}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already a User? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
