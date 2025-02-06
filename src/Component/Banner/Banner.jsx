import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  text-white">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-center">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 lg:pl-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hello I&apos;m
          </h1>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mt-4">
            Robiul Hasan
          </h2>
          <p className="text-lg sm:text-xl mt-6">
            A Passionate{" "}
            <span className="text-blue-400">Mern Stack Web Developer</span>
          </p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-2 px-6 rounded-full shadow-lg">
            Resume
          </button>
        </div>

        {/* Right Section */}
        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center items-center lg:pl-5">
          <div className="rounded-full overflow-hidden border-4 border-blue-400 shadow-lg w-64 h-64 sm:w-72 sm:h-72 lg:w-[440px] lg:h-[440px] ">
            <img
              src="https://i.ibb.co.com/xSxSYbhQ/image3.jpg"
              alt="Robiul Hasan"
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 absolute -bottom-8 transform translate-y-1/2">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg text-white transition-transform duration-300 transform hover:scale-125"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg text-white transition-transform duration-300 transform hover:scale-125"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg text-white transition-transform duration-300 transform hover:scale-125"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg text-white transition-transform duration-300 transform hover:scale-125"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
