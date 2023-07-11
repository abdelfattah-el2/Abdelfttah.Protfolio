import { useEffect, useState } from "react";
import { WhatIDo } from "../../data";
import Title from "../global/Title";

function Service() {
  const [right, setRight] = useState(false);

  useEffect(() => {
    setRight(true);
  }, []);

  return (
    <div className=" pb-20">
      <div
        className={
          right
            ? "container  relative right-0 duration-1500  opacity-100  mx-auto  py-12 "
            : "container  relative right-1/4 duration-500  opacity-0  mx-auto  px-6  py-12 "
        }
      >
        <div className="px-6    ">
          <div className=" xl:px-20 pb-8 ">
            <Title title="Service" subTitle={"What I Do"} />
            <div className=" grid gap-7 mb-20  md:grid-cols-2">
              {WhatIDo.IDo.map((e) => {
                return (
                  <div
                    key={e.id}
                    className=" bg-white dark:bg-neutral-800/80  border dark:border-gray-600 border-neutral-300/90 shadow-md  dark:shadow-slate-500/20 p-10 "
                  >
                    <div>
                      <h1 className="  w-14 flex justify-center items-center h-14  bg-gray-300/80  font-bold mb-6 mt-2  dark:text-white dark:bg-zinc-700 rounded-full ">
                        {e.id}
                      </h1>
                      <div>
                        <h1 className=" font-bold mb-10 dark:text-white">
                          {e.title}
                        </h1>
                        <p className=" font-Mulish leading-7 text-gray-500/90 dark:text-gray-400">
                          {e.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <h1 className="dark:text-neutral-50 mt-4 text-xl  font-bold  tracking-wide  py-2 mb-14">
              Fun Facts
            </h1>
            {/* Completed */}
            <div className=" grid gap-7 mt-4  md:grid-cols-2">
              <div className="  flex items-center flex-col dark:bg-neutral-900 bg-stone-100 border shadow-md  dark:shadow-slate-500/20 dark:border-gray-600 border-neutral-300/90 p-10">
                <span className="p-3 font-semibold text-xl dark:text-white ">
                  6
                </span>
                <span className="p-3 font-Mulish text-gray-500/90 dark:text-gray-400">
                  Projects Completed
                </span>
              </div>
              {/* Code */}
              <div className=" dark:bg-neutral-900 flex items-center  flex-col bg-stone-100 border shadow-md  dark:shadow-slate-500/20 dark:border-gray-600 border-neutral-300/90 p-10">
                <span className="p-3 font-semibold text-xl dark:text-white ">
                  5K+
                </span>
                <span className="p-3  font-Mulish text-gray-500/90 dark:text-gray-400">
                  Lines of Code
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
