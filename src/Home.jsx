import AboutMe from "./Component/AboutMe/AboutMe";
import Banner from "./Component/Banner/Banner";
import Navber from "./Component/Navber/Navber";
import Skills from "./Component/Skills/Skills";

const Home = () => {
  return (
    <div className="bg-indigo-950">
      {/* navber */}
      <div className="">
        <Navber></Navber>
      </div>
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
    </div>
  );
};

export default Home;
