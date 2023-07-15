const InfoCard = ({ number, text1, text2 }) => {
  return (
    <div className="p-5 sm:pl-10 sm:py-7 border-[#ddd] dark:border-dgrey border-[1px] rounded-md hover:shadow-md duration-300">
      <p className="text-orange text-5xl font-extrabold">
        {number}
        <span className="font-semibold">+</span>
      </p>
      <div className="flex sm:space-x-5">
        {/* line */}
        <div className="bg-[#777] w-[30px] h-[1px] my-3 hidden sm:block"></div>
        <p>
          {text1}
          <br />
          {text2}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
