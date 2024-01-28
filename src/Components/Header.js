import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUGAGES } from "../Utils/constants";
import { viewGptSearch } from "../Utils/toggleGptSearchSlice";
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

  const toggleGptSearchHandler=()=>{
    dispatch(viewGptSearch());
  }

  const langHandler=(e)=>{
    dispatch(addLanguage(e.target.value))
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex p-2 items-center">
          {gptSearchValue && <select className="bg-gray-700 text-white px-4 py-2 mr-2 rounded-md" onChange={langHandler}>
            {SUPPORTED_LANGUGAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          
          <div>
            <button
              className="bg-red-500 px-8 py-2 mr-2 rounded-md text-white"
              onClick={toggleGptSearchHandler}
            >
              {gptSearchValue ? "Home" : "GPT Search"}
            </button>
          </div>
          <img
            className="w-12 h-12"
            src="../Netflix-avatar.png"
            alt="user-pic"
          />

          <button
            className="bg-black text-white font-bold m-2 p-2 rounded-lg"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
