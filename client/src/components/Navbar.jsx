import { useAppContext } from "../context/AppContext";
import "./Navbar.css";

const Navbar = () => {
  const { navigate, token } = useAppContext();
  return (
    <div className="flex justify-between item-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <img
        onClick={() => navigate("/")}
        src="https://quickblog-gs.vercel.app/assets/logo-ByAZGmkH.svg"
        alt="logo"
        className="w-33 sm:w-44 cursor-pointer"
      />
      <button className="btn" onClick={() => navigate("/admin")}>
        {token ? "Dashboard" : "Login"}
        <img
          className="w-3"
          alt="arrow"
          src="data:image/svg+xml,%3csvg%20width='17'%20height='12'%20viewBox='0%200%2017%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.7969%205.90918L1.1362%205.90918'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.9817%2010.2695L15.0938%205.90378L8.9817%201.53803'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
        ></img>
      </button>
    </div>
  );
};

export default Navbar;
