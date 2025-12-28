import { IoIosSend } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="px-12 w-full my-8 flex justify-center items-center max-w-5xl! mx-auto gap-8 flex-col md:flex-row">
      <h2 className="text-xl text-center md:text-left">
        Be the first to hear about Statera news
      </h2>
      <form
        action=""
        className="flex justify-center items-center w-full rounded-2xl overflow-hidden bg-gray-100"
      >
        <input
          type="text"
          placeholder="Enter email"
          className="outline-none border-none p-4 md:px-6 text-black w-full"
        />
        <button className="w-16 bg-linear-to-r from-[#166AB9] via-[#A21F7F] to-[#F91A1A] py-3 md:py-4 cursor-pointer flex justify-center items-center">
          <IoIosSend className="font-extrabold text-4xl" />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
