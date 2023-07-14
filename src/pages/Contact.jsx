import ContactForm from "../components/ContactForm";
import { contact, social } from "../data/contact";

const Contact = () => {
  return (
    <div className="mb-24 lg:mb-16 px-5 max-w-[1200px] mx-auto">
      <h1 className="uppercase text-center text-3xl xs:text-4xl sm:text-6xl font-extrabold py-20">
        get in <span className="text-orange">touch</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="uppercase text-xl font-semibold pb-3 sm:text-2xl md:text-[26px]">
            don{`'`}t be shy!
          </h2>

          <p className="font-light text-xs xs:text-sm leading-6 lg:pr-10 mb-2">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          {contact.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 xs:gap-4 sm:gap-5 py-3 lg:py-4"
            >
              <item.Icon className="text-2xl md:text-3xl text-orange" />
              <div className="space-y-1 text-xs xs:text-sm md:text-base">
                <p className="uppercase">{item.text1}</p>
                <p className="font-medium">{item.text2}</p>
              </div>
            </div>
          ))}

          <div className="space-x-3 my-6">
            {social.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="inline-block p-3 text-xl rounded-full bg-grey duration-300 hover:bg-orange hover:text-white"
              >
                <item.Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 mt-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
