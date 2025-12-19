const ContactUs = () => {
  return (
    <div className="w-full my-32 flex justify-center items-center max-w-5xl mx-auto gap-8">
      <h2 className="text-xl">Be the first to hear about Statera news</h2>
      <form
        action=""
        className="flex w-full rounded-2xl overflow-hidden bg-gray-50"
      >
        <input
          type="text"
          placeholder="example@gmail.com"
          className="flex-1 h-full outline-none border-none py-4 px-8 text-black"
        />
        <button className="bg-linear-to-r from-[#166AB9] via-[#A21F7F] to-[#F91A1A] h-full w-[25%] py-4 px-8 cursor-pointer">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
