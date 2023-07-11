import { useEffect, useState, useRef } from "react";
import Title from "../global/Title";
import emailjs from "@emailjs/browser";
import MAP from "./MAP";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contact() {
  const [right, setRight] = useState(false);
  useEffect(() => {
    setRight(true);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zega7id",
        "template_z29wnhi",
        form.current,
        "-mRZJNliefxEjKxQ9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
      });
  };
  return (
    <div className=" pb-1">
      <div
        className={
          right
            ? "container  relative right-0 duration-1500  opacity-100  mx-auto  py-12 "
            : "container  relative right-1/4 duration-500  opacity-0  mx-auto  px-6  py-12 "
        }
      >
        <div className="px-5  mb-3  ">
          <div className=" xl:px-16 pb-2 p-2">
            <Title title={"Contact"} subTitle={"Get in Touch"} />
            <MAP />
            <div className="">
              <form
                className=" mt-10  sm:mt-10"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="user_name"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder="First Name"
                        className="block w-full border-[1px] border-gray-400/50 bg-transparent focus:dark:border-white/50  focus:border-black/30 px-3.5 py-2 text-gray-900/70 dark:text-white shadow-sm  placeholder:text-gray-400    focus:ring-0  outline-none focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2.5">
                      <input
                        required
                        type="text"
                        name="last_userName"
                        id="last-name"
                        autoComplete="family-name"
                        placeholder="Last Name"
                        className="block w-full border-[1px] border-gray-400/50 bg-transparent focus:dark:border-white/50  focus:border-black/30 px-3.5 py-2 text-gray-900/70 dark:text-white shadow-sm  placeholder:text-gray-400    focus:ring-0  outline-none focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <input
                        required
                        type="email"
                        name="user_email"
                        id="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="block w-full border-[1px] border-gray-400/50 bg-transparent focus:dark:border-white/50  focus:border-black/30 px-3.5 py-2 text-gray-900/70 dark:text-white shadow-sm  placeholder:text-gray-400    focus:ring-0  outline-none focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <textarea
                        required
                        placeholder="Message"
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full border-[1px] border-gray-400/50 bg-transparent focus:dark:border-white/50  focus:border-black/30 px-3.5 py-2 text-gray-900/70 dark:text-white shadow-sm  placeholder:text-gray-400    focus:ring-0  outline-none focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10  flex    sm:justify-stretch">
                  <button
                    type="submit"
                    value={"send"}
                    className="block  relative send w-fit duration-500  hover:tracking-widest  bg-black dark:bg-neutral-50 dark:text-black  px-9  py-4 text-center   text-base   font-medium text-white shadow-lg font-Mulish   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <span className=" mr-2 ">Send Message </span>
                    <SendIcon className="" fontSize="10px" />
                  </button>
                </div>
              </form>
              <a className=" w-fit mt-2 block" href="tel:+201210015280">
                <button
                  type="btn"
                  className="block   w-fit duration-500    bg-black dark:bg-neutral-50 dark:text-black  px-6  py-4 text-center   text-base   font-medium text-white shadow-lg font-Mulish   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Phone <WhatsAppIcon />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
