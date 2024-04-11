import netflix_logo from "../assets/netflix_logo.png";
import profile_logo from "../assets/profile_logo.jpg";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

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
        <img className="w-44" src={netflix_logo} alt="main-logo" />
      </div>

      {user && (
        <div className="flex items-center">
          <img className="w-12 h-12 m-3  rounded-md" src={profile_logo} />
          <div>
            <ul>
              <li className="font-bold">
                Hello {user.displayName.split(" ")[0]}
              </li>
              <li
                className="hover:cursor-pointer bg-slate-300 p-2 rounded-md"
                onClick={handleSignOut}
              >
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
