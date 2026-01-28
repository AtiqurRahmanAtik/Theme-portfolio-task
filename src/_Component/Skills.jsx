import { DM_Sans } from "next/font/google";

const dM_Sans = DM_Sans({
  subsets: ['latin'],
  weight : '700'
})

const Skills = () => {

    return (
        <>

<div className="max-w-171.5 min-h-112 my-30">
        <h1 className={`text-white ${dM_Sans.className} text-[3rem] font-bold text-white`}>Skills</h1>

        <div className=" space-y-8 ">

        <div>
          <div className="flex justify-between">
              <h1 className="text-white">UI/UX Design</h1>
               <p className="text-warning">90 % </p>
          </div>

            <progress className="progress progress-warning " value={95} max="100"></progress>
        </div>

        <div>
          <div className="flex justify-between">
              <h1 className="text-white">Photography</h1>
               <p className="text-warning">90 % </p>
          </div>

            <progress className="progress progress-warning " value={90} max="100"></progress>
        </div>

        <div>
          <div className="flex justify-between">
              <h1 className="text-white">Creativity</h1>
               <p className="text-warning">80 % </p>
          </div>

            <progress className="progress progress-warning " value={80} max="100"></progress>
        </div>

        <div>
          <div className="flex justify-between">
              <h1 className="text-white">Team Work</h1>
               <p className="text-warning">95 % </p>
          </div>

            <progress className="progress progress-warning " value={95} max="100"></progress>
        </div>


        <div>
          <div className="flex justify-between">
              <h1 className="text-white">Web Design</h1>
               <p className="text-warning">95 % </p>
          </div>

            <progress className="progress progress-warning " value={95} max="100"></progress>
        </div>

       

        </div>

        </div>
        </>
    );
};

export default Skills;