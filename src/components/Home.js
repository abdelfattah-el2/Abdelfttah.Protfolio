import "../index.css";
import MyComponent from "./function/generatorText";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useEffect, useState } from "react";
function Home() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);

  return (
    <>
      <div
        className={
          right
            ? " container  flex  relative  right-0  duration-1500  opacity-100   justify-center items-center h-screen mx-auto px-3"
            : " container  flex  relative   right-1/4 duration-500 opacity-0   justify-center items-center h-screen mx-auto px-3"
        }
      >
        {/* img */}
        <div className="flex  flex-col items-center md:flex-row ">
          <div
            className=" relative h-screen  mb-2 w-screen"
            style={{
              maxHeight: "300px",
              maxWidth: "300px",
            }}
          >
            <div className="aaa"></div>
          </div>
          {/* info */}
          <div className="md:ml-12  p-2 max-w-xl text-center md:text-left ">
            {" "}
            <h1 className=" p-2 dark:text-slate-50 font-bold  text-4xl  tracking-wider uppercase">
              {" "}
              Abdelfattah walead
            </h1>
            <h2 className=" p-2 font-bold text-2xl dark:text-slate-50 ">
              <MyComponent />
              <span>|</span>{" "}
            </h2>
            <p className="p-3   font-medium text-gray-600 dark:text-gray-400  tracking-tight">
              {" "}
              Programmer based in Alexandria Love Bluid websites and developing
              them with React .
            </p>
            <div>
              <ul className=" flex  justify-center  md:justify-normal">
                <li className="dark:text-slate-50 ml-1 p-1 hover:dark:text-zinc-400 hover:-translate-y-2 hover:duration-500 hover:text-gray-800/95 cursor-pointer ">
                  <a href="https://instagram.com/abdelfattah.walead?igshid=NjIwNzIyMDk2Mg==">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="dark:text-slate-50 ml-1  p-1 hover:dark:text-zinc-400 hover:-translate-y-2 hover:duration-500 hover:text-gray-800/95 cursor-pointer ">
                  <a href="https://www.facebook.com/profile.php?id=100094387431151&mibextid=ZbWKwL">
                    <FacebookRoundedIcon />
                  </a>
                </li>
                <li className="dark:text-slate-50 ml-1  p-1 hover:-translate-y-2 hover:duration-500 hover:dark:text-zinc-400 hover:text-gray-800/95 cursor-pointer ">
                  <a href="https://github.com/abdelfattah-el2" target="_self">
                    <GitHubIcon />
                  </a>
                </li>
                <li className="dark:text-slate-50 ml-1  p-1 hover:duration-500 hover:-translate-y-2 hover:dark:text-zinc-400 hover:text-gray-800/95 cursor-pointer ">
                  <a href="https://www.linkedin.com/in/abdelfattah-waleed-71218a257">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
