import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-3 card-img-hover'>
            <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' rel="noopener noreferrer">
              <img src={github} alt='GitHub' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <a href="/" className='text-white font-bold text-[24px] uppercase animate-pulse'>{name}</a>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// ...

const Works = () => {
  const limitedProjects = projects.slice(0, 3);

  return (
    <>
      <div>
        <div>
          <div className="flex justify-between items-center">
            <motion.div variants={textVariant()}>
              <span className="bg-[#915EFF] uppercase text-lg font-medium px-4 py-2 rounded-t-md rounded-br-md">My work</span>
              <h2 className={`${styles.sectionHeadText} ml-2`}>Projects.</h2>
            </motion.div>

            <Link
              to="/projects"
              className="hover:underline text-[#915EFF] font-medium leading-10 text-2xl"
            >
              Explore More Works..
            </Link>
          </div>

          <div className='w-full flex'>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
              Following projects showcase my skills and experience through
              real-world examples of my work. Each project is briefly described with
              links to code repositories and live demos in it. It reflects my
              ability to solve complex problems, work with different technologies,
              and manage projects effectively.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {limitedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};






export default SectionWrapper(Works, "");
