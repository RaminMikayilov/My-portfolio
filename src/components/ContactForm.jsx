import { useState } from "react";
import CoolButton from "./CoolButton/CoolButton";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    console.log(data);

    emailjs
      .send("service_g70n1jf", "template_m5za8lq", data, "RSH1HgDvVgEC2RmY8")
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        () => {
          toast.error("Message not sent");
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="space-y-6 lg:pl-3 xl:pl-5"
    >
      <Toaster />
      <input
        type="text"
        placeholder="your name"
        required
        className="placeholder:uppercase px-6 py-3 border-2 border-grey outline-none focus:border-orange rounded-full w-full dark:bg-navbg dark:border-navbg"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="your email"
        required
        className="placeholder:uppercase px-7 py-3 border-2 border-grey outline-none focus:border-orange rounded-full w-full dark:bg-navbg dark:border-navbg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="your message"
        rows="7"
        required
        className="placeholder:uppercase px-7 py-3 border-2 border-grey outline-none focus:border-orange rounded-3xl w-full dark:bg-navbg dark:border-navbg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <CoolButton text="send message" Icon={FaTelegramPlane} />
    </form>
  );
};

export default ContactForm;
