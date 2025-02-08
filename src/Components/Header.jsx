import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import img from '../assets/react.svg'

const Navbar = ({  width }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <Link to="/">
        <div className="flex items-center">
          <img src={img} alt="image backckck" width={width} />
          <span className="ml-4 mt-2 text-lg hover:text-blue-500 duration-200 ease-in">
            Welcome to X-10
          </span>
        </div>
      </Link>

      <ul className="hidden md:flex justify-center items-center">
        <li className="mr-10">
          <Link to="/AboutUs" className="hover:text-blue-500 duration-200 ease-in">About Us</Link>
        </li>
        <li className="mr-10 hover:text-blue-500 duration-200 ease-in">
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>


      <div className="hidden md:block">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl text-lg flex items-center justify-center hover:bg-blue-700 duration-300 ease-in">
          Sign In
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 md:hidden">
          <ul className="flex flex-col items-center">
            <li className="mb-4">
              <Link to="/AboutUs" className="hover:text-blue-500 duration-200 ease-in" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/Contact" className="hover:text-blue-500 duration-200 ease-in" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl text-lg flex items-center justify-center hover:bg-blue-700 duration-300 ease-in">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
