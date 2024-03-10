import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="">
      <span className="bg-[#915EFF] uppercase text-lg font-medium px-4 py-2 rounded-t-md rounded-br-md">My Skills</span>
      <div className='flex flex-row flex-wrap justify-center gap-10 py-4 '>
        {technologies.map((technology) => (
          <div className='w-32 h-32 mt-8' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
