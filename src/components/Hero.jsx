import heroProfile from '../../src/assets/Hero.png'
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5  `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className=' h-screen md:flex md:flex-row md:justify-center'>
          <div className='md:w-1/2'>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, {`I'm`} <span className='text-[#915EFF]'>Utkarsh</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop responsive visuals, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </div>

          <div className='md:w-1/2 md:pl-8 mt-4 md:mt-0 translate-y-1/4 ' >
            <img className='rounded-bl-[5rem] rounded-tr-[5rem] h-auto ' src={heroProfile} alt="Hero Profile" />
          </div>
        </div>
      </div>



    </section>
  );
};

export default Hero;
