import { useEffect, useState } from "react";
import Title from "../global/Title";
import { PortfolioData } from "../../data";

function Portfolio() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);

  return (
    <div className=" pb-1">
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
                    className="max-w-full  dark:bg-neutral-200/50 bg-black/20 relative  overflow-hidden p-2 "
                    key={e.id}
                  >
                    <a href={`${e.link}`} className="  ">
                      <img
                        className=" min-w-full max-w-full hover:scale-110 shadow-md  dark:shadow-slate-500/20 duration-700   "
                        src={require(`../../${e.img}`)}
                        alt={e.name}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
