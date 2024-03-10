import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div

        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'

        onClick={() => window.open(link, "_blank")}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="md:mr-8">
          <motion.div variants={textVariant()}>
            <span className="bg-[#915EFF] uppercase text-lg font-medium px-4 py-2  rounded-t-md rounded-br-md">My Links</span>
            <h2 className={styles.sectionHeadText}>Social Acc.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-[20rem] md:max-w-3xl leading-[30px]"
          >
            I would love to hear from YOU!
          </motion.p>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=&su=&body=&bcc=&cc="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[#915EFF] font-medium leading-10 text-2xl"
        >
          mail me :
        </a>
      </div>



      {/*social acc cards */}
      <div className='mt-12 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
