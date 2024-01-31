import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUGAGES } from "../Utils/constants";
import { viewGptSearch, addGptMovies } from "../Utils/toggleGptSearchSlice";
import { addLanguage } from "../Utils/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.name);
  // console.log(user);
  const gptSearchValue = useSelector((store) => store.gptSearch?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
    dispatch(viewGptSearch());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user signin/signup this block code works
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out this block of code works
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleGptSearchHandler = () => {
    dispatch(viewGptSearch());
    dispatch(addGptMovies({ moviesName: null, moviesTmdbResults: null }));
  };

  const langHandler = (e) => {
    dispatch(addLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 pb-0 md:py-2 md:bg-gradient-to-b from-black z-10 w-full flex flex-col items-center md:flex-row justify-between">
      <img className="w-36 md:w-44" src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex p-0 md:p-2  md:items-center">
          {gptSearchValue && (
            <select
              className="bg-gray-700 text-white px-4 py-2 mr-2 rounded-md"
              onChange={langHandler}
            >
              {SUPPORTED_LANGUGAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <div>
            <button
              className="bg-red-500 px-4 py-1 md:px-8 md:py-2 mr-2 rounded-md text-white"
              onClick={toggleGptSearchHandler}
            >
              {gptSearchValue ? "Home" : "GPT Search"}
            </button>
          </div>
          {gptSearchValue ? (
            <>
              <img
                className="hidden md:inline-block w-12 h-12"
                src="../Netflix-avatar.png"
                alt="user-pic"
              />

              <button
                className="hidden md:inline-block bg-black text-white font-bold m-2 p-2 rounded-lg "
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <img
                className="hidden md:block w-10 h-10 md:w-12 md:h-12"
                src="../Netflix-avatar.png"
                alt="user-pic"
              />

              <button
                className="bg-black text-white font-bold px-4 py-1   md:m-2 md:p-2 rounded-lg "
                onClick={handleSignOut}
              >
                (Sign Out)
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
