import { Helmet } from "react-helmet";
import AboutMe from "./Component/AboutMe/AboutMe";
import Banner from "./Component/Banner/Banner";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

import Projects from "./Component/Projects/Projects";
import Skills from "./Component/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Robiul || Home</title>
      </Helmet>
      {/* banner */}
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-20 md:mt-0 lg:mt-16">
        <AboutMe></AboutMe>
      </div>
      <div className="mt-12">
        <Skills></Skills>
      </div>
      <div className="mt-12 px-4 md:px-6 lg:px-20">
        <h3 className="text-5xl font-bold text-white mb-10">My Projects</h3>
        <div>
          <Projects></Projects>
        </div>
      </div>
      <div className="mt-12">
        <Contact></Contact>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
