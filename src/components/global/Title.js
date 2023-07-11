function Title({ title, subTitle }) {
  return (
    <div>
      <span className=" text-gray-800 dark:text-neutral-300/90  text-xs font-semibold bg-gray-300/80  dark:bg-neutral-800 p-2 uppercase ">
        {title}
      </span>
      <h1 className=" dark:text-neutral-50 mt-4 text-3xl font-extrabold  tracking-wide  py-2 mb-3">
        {subTitle}
      </h1>
    </div>
  );
}

export default Title;
