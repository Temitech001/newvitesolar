import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] z-50 flex justify-between items-center px-4 bg-green-400 text-black">
      <div className="text-3xl font-semibold ml-[90px]">SolarInc</div>

      {/* menu */}
      <ul className="hidden md:flex font-semibold mr-[60px]">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
          >
            AboutUS
          </Link>
        </li>
        <li>
          <Link
            to="service"
            smooth={true}
            duration={500}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="service"
            smooth={true}
            duration={500}
          >
            Service
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
    </div>
  );
};

export default Navbar;
