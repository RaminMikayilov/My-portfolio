import "./coolbutton.css";

const CoolButton = ({ text, Icon }) => {
  return (
    <button className="button font-semibold text-grey-dark border-orange hover:text-white duration-300 border-2 rounded-full py-4 pl-8 pr-16">
      {text}
      <span className="p-5 bg-orange text-white absolute right-[-1px] top-[-1px] rounded-full">
        <Icon className="text-lg font-bold rounded-full" />
      </span>
    </button>
  );
};

export default CoolButton;
