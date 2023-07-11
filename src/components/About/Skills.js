import { useEffect, useState } from "react";
import { AboutSkills } from "../../data";

function Skills() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);
  return (
    <div
      className={
        right
          ? " right-0 relative duration-700  opacity-100 py-14  px-20 bg-white dark:bg-black  lg:w-98% lg:translate-x-[2%]"
          : "  relative right-1/4 duration-500  opacity-0 py-14 px-20 bg-white dark:bg-black  lg:w-98% lg:translate-x-[2%]"
      }
    >
      <div className="flex flex-col md:flex-row">
        <div className="  w-full h-full md:pr-9  pb-6 md:pb-0">
          <h1 className=" dark:text-white font-bold text-xl">
            Programming Skills
          </h1>
          <div className="pt-12 ">
            {AboutSkills.Skill.map((e) => {
              return (
                <div className=" mb-7" key={e.id}>
                  <div className=" flex justify-between text-gray-600/60 dark:text-gray-200 font-Mulish mb-1 italic">
                    <span>{e.name}</span>
                    <span className=" "> {e.SkillRate}</span>
                  </div>
                  <div className=" w-full h-1 bg-neutral-500/50">
                    <div
                      className=" h-1 dark:bg-gray-400 bg-slate-950"
                      style={{
                        width: e.SkillRate,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="  w-full h-full md:pl-9">
          <h1 className=" dark:text-white font-bold text-xl">
            Language Skills
          </h1>
          <div className="pt-12 ">
            {AboutSkills.Language.map((e) => {
              return (
                <div className=" mb-7" key={e.id}>
                  <div className=" flex justify-between text-gray-600/60 dark:text-gray-200 font-Mulish mb-1 italic">
                    <span>{e.name}</span>
                    <span className=" "> {e.SkillRate}</span>
                  </div>
                  <div className=" w-full h-1 bg-neutral-500/50">
                    <div
                      className=" h-1 dark:bg-gray-400 bg-slate-950"
                      style={{
                        width: e.SkillRate,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
