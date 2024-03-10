import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";
import Resume from '../../src/assets/utkResume.pdf';
import { styles } from "../styles";

const Navbar = () => {
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
          <Link to='/' className='flex items-center gap-2' onClick={() => { setToggle(false); window.scrollTo(0, 0); }}>
            <p className='text-white uppercase text-3xl font-bold cursor-pointer'>Utkarsh</p>
          </Link>


          <a href={Resume} download className="hidden sm:block bg-[#915EFF] rounded-md uppercase text-lg font-medium px-4 py-2 outline-none">
            Resume
          </a>

        </div>

        {/*large screen */}
        <div className="py-4 hidden sm:block">
          <ul className='list-none flex justify-between gap-10'>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/about'>About</Link></li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/skill'>Skill</Link></li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/projects'>Projects</Link></li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/tech'>Tech</Link></li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/static'>Static</Link></li>
            <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/achievement'>Achievement</Link></li>
          </ul>
        </div>

        {/*small screen */}
        <div className='sm:hidden flex justify-end -my-8 '>
          <img src={toggle ? close : menu} alt='menu' className='  w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)} />

          {toggle && (
            <div className="p-6 isolate aspect-video bg-black/70 shadow-lg ring1 ring-black/5  absolute top-20 min-w-[180px] z-10 rounded-lg">
              <ul className='list-none  flex flex-col-reverse  gap-4'>
                <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/about'>About</Link></li>
                <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/skill'>Skill</Link></li>
                <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/projects'>Projects</Link></li>
                <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/tech'>Tech</Link></li>
                <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/static'>Static</Link></li>
                <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"><Link to='/achievement'>Achievement</Link></li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
