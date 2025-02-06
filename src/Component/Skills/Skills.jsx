import Marquee from "react-fast-marquee";
import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const mySkills = [
    { name: "HTML", percentage: 100, icon: <FaHtml5 /> },
    { name: "CSS", percentage: 95, icon: <FaCss3 /> },
    { name: "TailwindCSS", percentage: 100, icon: <RiTailwindCssFill /> },
    { name: "JavaScript", percentage: 98, icon: <IoLogoJavascript /> },
    { name: "React.js", percentage: 98, icon: <FaReact /> },
    { name: "Next.js", percentage: 70, icon: <RiNextjsFill /> },
  ];

  const backSkills = [
    { name: "Node.js", percentage: 98, icon: <FaNode /> },
    { name: "Express", percentage: 98, icon: <SiExpress /> },
    { name: "MongoDB", percentage: 95, icon: <SiMongodb /> },
  ];

  return (
    <div>
      {/* marque */}
      <div className=" text-white px-4 md:px-6 lg:px-20 ">
        <Marquee
          className="text-5xl md:text-6xl  font-bold overflow-y-hidden uppercase"
          speed={150}
        >
          Mern stack Website Developer * Mern stack Website Developer *
        </Marquee>
        <Marquee
          className="text-5xl md:text-6xl  font-bold mb-10 overflow-y-hidden uppercase mt-3"
          speed={100}
          direction="right"
        >
          Let’s Work Together * I’m Open for new projects
        </Marquee>
      </div>
      {/* text my skills */}
      <div className="px-4 md:px-6 lg:px-20 space-y-5">
        <h5 className="text-blue-500 text-2xl font-semibold">MY SKILLS</h5>
        <h2 className="text-white text-5xl font-bold">Growing Over Times</h2>
        <p className="text-white text-lg ">
          My web development skills are evolving with time, reflecting growing
          expertise in coding, design, and problem-solving. Each project
          enhances my understanding, making my more adept at creating dynamic,
          user-friendly websites and staying updated with industry trends.
        </p>
      </div>
      {/* card for skills */}
      <div className="mt-10 px-4 md:px-6 lg:px-20 md:grid md:grid-cols-2 gap-10">
        {/* fornt end */}
        <div className="col-span-1">
          <p className="text-white text-2xl font-semibold">Frontend</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mySkills.map((skill, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl transition-transform duration-300 transform hover:scale-110 mt-5"
              >
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4 text-primary">{skill.icon}</div>
                  <h3 className="card-title">{skill.name}</h3>
                  <div className="w-full bg-base-300 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm">{skill.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* backend */}
        <div className="col-span-1 mt-10 md:mt-0 lg:mt-0">
          <p className="text-white text-2xl font-semibold">Backend</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {backSkills.map((skill, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl transition-transform duration-300 transform hover:scale-110 mt-5"
              >
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4 text-primary">{skill.icon}</div>
                  <h3 className="card-title">{skill.name}</h3>
                  <div className="w-full bg-base-300 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm">{skill.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
