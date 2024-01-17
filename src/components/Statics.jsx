import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { statics } from "../constants";


const Statics = () => {
  return (
    <div className="h-60 mt-4" >
      <span className="bg-[#915EFF] uppercase text-lg font-medium px-4 py-2 rounded-t-md rounded-br-md">My Statics</span>
      <div className='flex flex-row flex-wrap justify-evenly gap-10 py-4 '>
        {statics.map((statics) => (
          <div className='w-32 h-32 mt-8 ' key={statics.name}>
            <BallCanvas icon={statics.eff} />
            <p className="text-center">{statics.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Statics, "");
