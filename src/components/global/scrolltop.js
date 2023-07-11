import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import "../../index.css";

const ScrollToTop = ({ isVisible }) => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="btn-scrollTop  text-3xl md:text-4xl text-black dark:text-white rounded-full px-3 py-2 dark:bg-gray-800  bg-slate-300  duration-[1700ms] "
      style={{
        right: isVisible ? "2%" : "-50%",
        opacity: isVisible ? "1" : "0",
      }}
      onClick={goTop}
    >
      <KeyboardControlKeyIcon fontSize={"inherit"} />
    </button>
  );
};

export default ScrollToTop;
