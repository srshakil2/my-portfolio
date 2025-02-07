import { NavLink } from "react-router-dom";

const Projects = () => {
  const datas = [
    {
      id: 1,
      name: "Crowdcube",
      img: "https://i.ibb.co.com/nscBHmvR/Screenshot-2025-02-07-042837.png",
    },
    {
      id: 2,
      name: "Marathon",
      img: "https://i.ibb.co.com/GfyHFymH/Screenshot-2025-02-07-042611.png",
    },
    {
      id: 3,
      name: "EduManage",
      img: "https://i.ibb.co.com/M5yx36dF/Screenshot-2025-02-07-042442.png",
    },
  ];
  return (
    <div id="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 ">
      {datas.map((data) => (
        <div
          key={data.id}
          className="card bg-base-100 shadow-xl transition-transform duration-200 transform hover:scale-110"
        >
          <figure className="px-10 pt-10">
            <img
              src={data.img}
              alt={data.name}
              className="rounded-xl transition-transform duration-300 transform hover:scale-110 shadow"
            />
          </figure>
          <div className="card-body items-center text-center space-y-5 mt-5">
            <h2 className="card-title text-3xl font-bold">
              Project Name: {data.name}
            </h2>
            <div className="card-actions">
              <NavLink to={`/projects/${data.id}`}>
                <button className="btn bg-blue-500 hover:bg-blue-600 text-white text-xl">
                  View More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
