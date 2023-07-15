import CoolButton from "./CoolButton/CoolButton";
import { FaTelegramPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <form action="" className="space-y-6 lg:pl-3 xl:pl-5">
      <input
        type="text"
        placeholder="your name"
        className="placeholder:uppercase px-6 py-3 border-2 border-grey outline-none focus:border-orange rounded-full w-full dark:bg-navbg dark:border-navbg"
      />
      <input
        type="email"
        placeholder="your email"
        className="placeholder:uppercase px-7 py-3 border-2 border-grey outline-none focus:border-orange rounded-full w-full dark:bg-navbg dark:border-navbg"
      />
      <textarea
        placeholder="your message"
        rows="7"
        className="placeholder:uppercase px-7 py-3 border-2 border-grey outline-none focus:border-orange rounded-3xl w-full dark:bg-navbg dark:border-navbg"
      ></textarea>

      <CoolButton text="send message" Icon={FaTelegramPlane} />
    </form>
  );
};

export default ContactForm;
