import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
    const navigate = useNavigate();
    const userInfo = useSelector((store) => store.user)
    console.log(userInfo)

    const handleBackToHomeClick = () => {
        navigate("/browse")
    }

    if (userInfo === null) return

    return (
        <div>
           <h1>Hello {userInfo.displayName}</h1>
           <h1>Email {userInfo.email}</h1>
           <button onClick={handleBackToHomeClick}>Back to Home Page</button>
        </div>
    )
}

export default ProfileInfo