import { useEffect, useState } from "react";
import { PortfolioData } from "../../data";
import { useParams } from "react-router";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Title from "../global/Title";
function DetailsPage() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);
  const params = useParams("/:detailId");
  let id = params.detailId;
  let data = PortfolioData.mywork[id];
  return (
    <div className=" pb-1">
      <div
        className={
          right
            ? "container  relative right-0 duration-1500  opacity-100  mx-auto  py-10 "
            : "container  relative right-1/4 duration-500  opacity-0  mx-auto  px-6  py-12 "
        }
      >
        <div className="px-6">
          <div className=" xl:px-10 pb-1 ">
            <div className=" sm:px-14 sm:p-3   ">
              <Title
                title={"Details"}
                size="text-2xl"
                subTitle={"project Informations"}
              />
              <div className=" shadow dark:shadow-white  ">
                <a href={data.link}>
                  <img src={require(`../../${data.img}`)} alt={data.name} />
                </a>
              </div>
              <div>
                <h1 className="  sm:text-[22px] pt-2   dark:text-white    font-bold">
                  {data.name}
                </h1>
                <p className="font-Mulish  py-1   italic font-normal text-gray-600 dark:text-gray-400">
                  Details
                </p>
                {/*Details   */}
                <div>
                  <p className=" my-4 font-Mulish  font-normal text-base tracking-wider leading-7 text-gray-600/80 dark:text-gray-400">
                    {data.title}
                  </p>

                  <p className=" my-4 font-Mulish  font-normal text-base tracking-wider leading-7 text-gray-600/80 dark:text-gray-400">
                    {data.description}
                  </p>
                  {/*   Technology   */}
                  <h3 className=" font-Mulish  font-bold  dark:text-white  text-lg mb-4">
                    Technology Used
                  </h3>
                  <div className=" flex  flex-row flex-wrap  ">
                    {data.technology.map((e) => {
                      return (
                        <p key={e} className="mb-2  mr-3">
                          <ArrowRightIcon
                            className="dark:text-gray-100"
                            fontSize={"medium"}
                          />
                          <span className="text-gray-600/90 dark:text-gray-400">
                            {e}
                          </span>
                        </p>
                      );
                    })}
                  </div>
                  <div className=" flex  justify-between w-[75%]  sm:w-[40%]">
                    <div>
                      <h3 className=" font-Mulish my-2 font-bold  dark:text-white  text-lg ">
                        Date
                      </h3>
                      <span className="text-gray-600/90 dark:text-gray-400">
                        {data.date}
                      </span>
                    </div>
                    <div>
                      <h3 className=" font-Mulish my-2 font-bold  dark:text-white  text-lg ">
                        More
                      </h3>
                      {data.more.map((e) => {
                        return (
                          <div className=" flex ">
                            <a
                              className="hover:text-slate-900   mr-5 duration-700   hover:translate-y-[-7px]"
                              href={e.open}
                            >
                              <LaunchIcon
                                className="dark:text-gray-100 "
                                fontSize={"small"}
                              />
                            </a>
                            <a
                              href={e.source}
                              className="hover:text-slate-900 duration-700  hover:translate-y-[-7px]"
                            >
                              <GitHubIcon className="dark:text-gray-100 " />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
