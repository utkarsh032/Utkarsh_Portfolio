import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import Resume from '../../src/assets/Resume.pdf';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "backdrop-blur-xl" : "bg-transparent"}`}>
      <div className='w-full items-center max-w-7xl mx-auto'>
        <div className="flex justify-between">
          <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
            <p className='text-white uppercase text-3xl font-bold cursor-pointer flex'>Utkarsh</p>
          </Link>

          <a href={Resume} download className="bg-[#915EFF]  rounded-md uppercase text-lg font-medium px-4 py-2  outline-none">
            Resume
          </a>
        </div>

        <div className="py-4">
          <ul className='list-none justify-between hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary bg"} hover:text-white text-[18px] font-medium cursor-pointer `} onClick={() => setActive(nav.title)}>
                <Link to={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`} onClick={() => { setToggle(!toggle); setActive(nav.title); }}>
                  <Link to={`${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
