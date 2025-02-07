import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex items-center justify-center  transition-transform duration-200 transform hover:scale-110 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Contact With Me
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 justify-center text-xl font-semibold">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span className="text-gray-700">rh3642921@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 justify-center text-xl font-semibold">
            <FaPhone className="text-green-500 text-xl" />
            <span className="text-gray-700">+8801727-769430</span>
          </div>
          <div className="flex items-center space-x-3 justify-center text-xl font-semibold">
            <FaWhatsapp className="text-green-600 text-xl" />
            <span className="text-gray-700">+8801727-769430</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
