import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { statics } from "../constants";


const Statics = () => {
  return (
    <div className="" >
      <span className="bg-[#915EFF] uppercase text-lg font-medium px-4 py-2 rounded-t-md rounded-br-md">My Statics</span>
      <div className='flex flex-wrap justify-evenly gap-6  '>
        {statics.map((statics) => (
          <div className='w-32 h-32 m-8 ' key={statics.name}>
            <BallCanvas icon={statics.eff} />
            <p className=" w-40">{statics.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Statics, "");
