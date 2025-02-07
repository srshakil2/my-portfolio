import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-indigo-950 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-indigo-950 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className={"text-lg text-white"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="aboutMe"
                  smooth={true}
                  duration={500}
                  className={"text-lg text-white"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className={"text-lg text-white"}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className={"text-lg text-white"}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={"text-lg text-white"}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* img */}
          <div>
            <NavLink to={"/"}>
              <img
                src="https://img.icons8.com/?size=64&id=AfM2kzPzTz6Q&format=png"
                alt="Robiul Hasan"
              />
            </NavLink>
          </div>
        </div>
        {/* md and large divice */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={"text-lg text-white"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="aboutMe"
                smooth={true}
                duration={500}
                className={"text-lg text-white"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={"text-lg text-white"}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={"text-lg text-white"}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={"text-lg text-white"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className=" bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-full shadow-lg">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
