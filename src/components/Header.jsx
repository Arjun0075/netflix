import netflix_logo from "../assets/netflix_logo.png"

const Header = () => {
    return (
        <div className="px-36 py-5 absolute bg-gradient-to-b from-black z-10">
        <img className="w-44" src={netflix_logo} alt="main-logo" />
        </div>
    )
}

export default Header;