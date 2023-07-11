import { useEffect, useState } from "react";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Knowledgeinfo } from "../../data";
function Knowledge() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);
  return (
    <div
      className={
        right
          ? "container  relative right-0 duration-1500  opacity-100  mx-auto  py-14 "
          : "container  relative right-1/4 duration-500  opacity-0  mx-auto  px-6  py-14 "
      }
    >
      <div className=" px-6">
        <div className="flex xl:px-20  pb-12 pt-2 flex-col md:flex-row">
          <div className=" w-full md:pr-9  pb-11 md:pb-0">
            <h1 className="dark:text-neutral-50  ml-1 text-xl font-bold">
              Knowledge
            </h1>
            <div className=" pt-8">
              <ul className=" font-Mulish">
                {" "}
                {Knowledgeinfo.Knowledge.map((e) => {
                  return (
                    <li key={e.id} className=" text-base p-1">
                      {" "}
                      <span className=" mr-2">
                        <LabelImportantIcon
                          className="dark:text-gray-100"
                          fontSize={"small"}
                        />
                      </span>{" "}
                      <span className=" text-gray-600/90 dark:text-gray-400">
                        {e.name}
                      </span>{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className=" w-full md:pl-9 ">
            <h1 className="dark:text-neutral-50 ml-1 text-xl font-bold">
              Interests
            </h1>
            <div className=" pt-8">
              <ul className=" font-Mulish">
                {" "}
                {Knowledgeinfo.Interests.map((e) => {
                  return (
                    <li key={e.id} className=" text-base p-1">
                      {" "}
                      <span className=" mr-2 ">
                        <LabelImportantIcon
                          className="dark:text-gray-100"
                          fontSize={"small"}
                        />
                      </span>{" "}
                      <span className=" text-gray-600/90 dark:text-gray-400">
                        {e.name}
                      </span>{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
