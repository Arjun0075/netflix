import netflix_logo from "../assets/netflix_logo.png";
import profile_logo from "../assets/profile_logo.jpg";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import searchicon from "../assets/search-icon.png"

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [dropDown , setDropDown] = useState(false)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProfileInfoClick = () => {
    navigate("/info")
  }

  const handleDropDown = () => {
    console.log("dropdown Clicked")
    setDropDown(!dropDown)
    console.log(dropDown)
  }

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
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
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe()
  }, []);

  return (
    <div className="flex justify-between px-36 w-full py-5 absolute bg-gradient-to-b from-black z-10">
      <div className="">
        <img className="w-44" src={netflix_logo} alt="main-logo"/>
      </div>

      {user && (
        <div className="flex items-center">
          <div className="mr-2">
            <img className="w-6 h-6 hover:cursor-pointer" src={searchicon} alt="search"  />
          </div>
          <img className="w-12 h-12 m-3  rounded-md hover:cursor-pointer" src={profile_logo} onClick={handleDropDown}  />
          {dropDown &&
            (
              <div className="-mt-5 min-w-40 top-28 right-32 bg-black opacity-60 absolute  text-white pt-1 pr-5 pl-2 pb-6 z-30">
              <ul>
                <li className="font-bold border-b-2 white mb-3 pt-3">
                  Hello {user.displayName.split(" ")[0]}
                </li>
                <li className="font-bold border-b-2 white mb-3 hover:cursor-pointer" onClick={handleProfileInfoClick}>
                  View Profile
                </li>
                <li
                  className="font-bold hover:cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign Out
                </li>
              </ul>
            </div>
            )
          }
         
        </div>
      )}
    </div>
  );
};

export default Header;
