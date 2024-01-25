import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import {useSelector} from "react-redux";

const Header = () => {
  const navigate=useNavigate();
  // const user= useSelector((store) => {return console.log(store.name)} )
  const user = useSelector((store)=>store.name)
   
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
   
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex p-2">
      <img className="w-12 h-12" src=".././Netflix-avatar.png" alt="user-pic"/>
      
      <button className="bg-black text-white font-bold m-2 p-2 rounded-lg" onClick={handleSignOut}>(Sign Out)</button>
      </div>}
      
      
      
      
    </div>
    
  
  );
};

export default Header;
