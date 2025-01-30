const Card = () => {
  return (
    <>
      <div className="container mx-auto md:pt-20 p-4 md:pb-16 relative z-797">
      <div className="h-16 w-16 bg-indigo-200/40 absolute rounded-full blur-3xl z-789 top-44 left-1/3" />
      <div className="bg-gray-900/20 backdrop-blur-3xl grid grid-cols-6 gap-3 rounded-xl p-4 text-sm shadow-lg hover:shadow-xl transition-all duration-300 mx-auto ">
      <div className="col-span-6">
        <h2 className="md:text-2xl text-lg font-semibold text-white pb-3">Contact Me</h2>
        <p className="text-gray-400 text-xs md:text-sm pb-8 md:w-1/2">
          I'm always here to help, whether you need a project developed, a new feature implemented, or just a chat.
        </p>
      </div>
        <textarea
          className=" bg-gray-900/40 text-slate-600 h-32 placeholder:text-slate-500 col-span-6 resize-none outline-none rounded-lg p-4 duration-300 hover:bg-gray-900/50 focus:border-slate-600 focus:ring-2  focus:shadow-inner"
          placeholder="Get in touch mode and focus on the element you want to focus"
        ></textarea>

        <button className="fill-gray-600 col-span-1 flex justify-center items-center rounded-lg p-3 duration-300 bg-gray-900/50 hover:bg-slate-100  active:scale-95 focus:fill-blue-200 focus:bg-blue-400  hover:shadow-md group">
          <svg
            className="transform transition-transform group-hover:scale-110 duration-200"
            viewBox="0 0 512 512"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </button>

        <button className="fill-gray-600 col-span-1 flex justify-center items-center rounded-lg p-3 duration-300 bg-gray-900/50 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:fill-blue-200 focus:bg-blue-400  hover:shadow-md group ">
          <svg
            className="transform transition-transform group-hover:scale-110 duration-200"
            viewBox="0 0 512 512"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </button>

        <button className=" bg-gray-900/50 stroke-slate-600  col-span-4 flex items-center justify-center gap-2 rounded-lg p-3 duration-300 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:stroke-blue-200 focus:bg-blue-400 hover:shadow-md group">
          <svg
            className="transform transition-transform group-hover:translate-x-1 duration-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M10.11 13.6501L13.69 10.0601"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="font-medium text-slate-600 group-hover:text-slate-800">
            Send Message
          </span>
        </button>
      </div>
      </div>
    </>
  );
};

export default Card;
