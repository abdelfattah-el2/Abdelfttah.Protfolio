import { useEffect, useState } from "react";

function Exprins() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);
  return (
    <div
      className={
        right
          ? " right-0 relative bg-white  dark:bg-black   duration-700    opacity-100 py-16  px-12  lg:w-98% lg:translate-x-[2%]"
          : "  relative right-1/4 duration-500  opacity-0 py-14 px-20  bg-white dark:bg-black lg:w-98% lg:translate-x-[2%]"
      }
    >
      {/* Education  */}
      <div className="flex flex-col md:flex-row  ">
        <div className="  w-full h-full md:pr-10  pb-6 md:pb-0">
          <h1 className=" dark:text-white font-bold text-xl">Education</h1>
          <div className="pt-12 ">
            <ul className=" py-2 relative before:border-r before:absolute  before:top-0 before:left-0 before:h-full before:border-r-slate-400/70 before:dark:border-r-slate-500   ">
              <li className="flex  pb-6 pl-4 py-7  items-center before:absolute  before:w-5 before:rounded-full before:bg-white/90 before:dark:bg-black/90 before:border before:dark:border-gray-600 before:border-neutral-300/90  before:h-5 before:left-[-10px] ">
                <div className="  min-w-[120px] py-2 px-3 text-center mr-5 bg-gray-200/80 h-fit rounded-full dark:bg-neutral-800 text-gray-800 dark:text-white ">
                  <span className="text-sm ">2020 - 2023</span>
                </div>
                <div className=" p-2  xl:min-w-[212px]  ml-7">
                  <h1 className=" text-base font-semibold dark:text-white">
                    Al-Shatbi Mechanical Secondary
                  </h1>
                  <span className=" text-sm font-Mulish text-gray-600/90 dark:text-gray-400">
                    High school diploma
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Experience */}
        <div className="  w-full h-full md:pl-10">
          <h1 className=" dark:text-white font-bold text-xl">Experience</h1>
          <div className="pt-12 ">
            <ul className=" py-2 relative before:border-r before:absolute  before:top-0 before:left-0 before:h-full  before:border-r-slate-400/70 before:dark:border-r-slate-500  ">
              <li className="flex   pb-6 pl-4 py-7  items-center before:absolute  before:w-5 before:rounded-full before:bg-white/90 before:dark:bg-black/90 before:border before:dark:border-gray-600 before:border-neutral-300/90  before:h-5 before:left-[-10px] ">
                <div className="  min-w-[120px] py-2 px-3 text-center mr-5 bg-gray-200/80 h-fit rounded-full dark:bg-neutral-800 text-gray-800 dark:text-white ">
                  <span className=" text-sm ">2022 - 2023</span>
                </div>
                <div className=" p-2  xl:min-w-[212px]   ml-7">
                  <h1 className=" text-base font-semibold dark:text-white">
                    {" "}
                    Not yet
                  </h1>
                  <span className=" text-sm font-Mulish text-gray-600/90 dark:text-gray-400">
                    bluid wed site
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exprins;
