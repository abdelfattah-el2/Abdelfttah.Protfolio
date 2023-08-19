import { Suspense, useEffect, useState } from "react";
import Title from "../global/Title";
import { PortfolioData } from "../../data";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
function Portfolio() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);
  let loding = (
    <div
      className=" flex justify-center items-center 
     h-screen"
    >
      <h1 className=" dark:text-white">loding ...</h1>
    </div>
  );
  return (
    <div className=" pb-1">
      <Suspense fallback={loding}>
        <div
          className={
            right
              ? "container  relative right-0 duration-1500  opacity-100  mx-auto  py-10 "
              : "container  relative right-1/4 duration-500  opacity-0  mx-auto  px-6  py-12 "
          }
        >
          <div className="px-6  ">
            <div className=" xl:px-10 pb-1 ">
              <Title title={"Portfolio"} subTitle={"Creative Portfolio"} />
              <div className=" w-full grid gap-5 mb-14   md:grid-cols-2">
                {PortfolioData.mywork.map((e) => {
                  return (
                    <div
                      className="max-w-full  dark:bg-neutral-200/50 bg-black/20   overflow-hidden p-2 "
                      key={e.id}
                    >
                      <Link to={`/Portfolio/${e.id}`}>
                        <img
                          className=" min-w-full   max-w-full  shadow-md  dark:shadow-slate-500/20 duration-700  "
                          src={require(`../../${e.img}`)}
                          alt={e.name}
                          style={{ position: "" }}
                        />
                      </Link>
                      <div className="   justify-between font-medium  border  dark:bg-neutral-900/95  dark:text-white dark:border-gray-600 duration-700 border-neutral-300/90 shadow-md  dark:shadow-slate-500/20   bg-slate-50 p-2  flex   items-center">
                        <a
                          href={e.link}
                          className="   font-medium    dark:bg-neutral-900/95  dark:text-white dark:border-gray-600 duration-700     bg-slate-50 p-2  flex   items-center"
                        >
                          <button className=" font-Mulish mr-3 ">
                            Open <OpenInNewIcon fontSize="small" />
                          </button>
                        </a>
                        <Link
                          className=" hover:translate-x-3 duration-700 "
                          to={`/Portfolio/${e.id}`}
                        >
                          <span className="ml-2 ">
                            <span className=" mr-1"> Details</span>
                            <ArrowRightAltIcon />
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default Portfolio;
