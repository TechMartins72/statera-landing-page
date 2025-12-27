import { IoIosSend } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="px-12 w-full my-8 flex justify-center items-center max-w-5xl! mx-auto gap-8 flex-col md:flex-row">
      <h2 className="text-xl text-center">
        Be the first to hear about Statera news
      </h2>
      <form
        action=""
        className="flex justify-center items-center w-full rounded-2xl overflow-hidden bg-gray-50"
      >
        <input
          type="text"
          placeholder="Enter email"
          className="flex-1 outline-none border-none py-2 md:py-4 px-4 md:px-6 text-black"
        />
        <button className="bg-linear-to-r from-[#166AB9] via-[#A21F7F] to-[#F91A1A] py-2 md:py-4 px-2 md:px-6 cursor-pointer flex justify-center items-center">
          <IoIosSend className="font-extrabold text-2xl md:text-4xl" />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
