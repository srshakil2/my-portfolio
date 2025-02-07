import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const data = useParams();

  console.log(data.id);
  return (
    <div>
      <Helmet>
        <title>Robiul || Details</title>
      </Helmet>
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg">
          {/* id == 1 */}
          {data.id == 1 ? (
            <div>
              <img
                src="https://i.ibb.co.com/nscBHmvR/Screenshot-2025-02-07-042837.png"
                alt=""
                className="rounded-lg w-full h-60 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">
                Project Name: Crowdcube
              </h2>
              <p className="text-gray-600">
                Could you clarify if you're asking for a description of
                Crowdcube or if you're referring to something else? Let me know
                how you'd like to proceed!
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                Main Technology Stack
              </h3>
              <p className="text-sm text-gray-500">
                TailwindCSS, React.js, Swiper, Firebase, .env, Axios, Node.js,
                Express.js, MongoDB
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                Potential Improvements
              </h3>
              <p className="text-sm text-gray-500">
                In this project, I am taking on various challenges to make the
                project a little better. So that if I or anyone else wants to, I
                can come up with many more improvements in this project.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://crowdcube-assignment-10.web.app/"
                  target="_blank"
                  className="btn btn-outline btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/srshakil2/assignment-10-crowdcube-client-site"
                  target="_blank"
                  className="btn btn-outline btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* id = 2 */}
          {data.id == 2 ? (
            <div>
              <img
                src="https://i.ibb.co.com/GfyHFymH/Screenshot-2025-02-07-042611.png"
                alt="marathon"
                className="rounded-lg w-full h-60 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">
                Project Name: Marathon
              </h2>
              <p className="text-gray-600">
                A marathon is a long-distance running event, typically 42.195
                kilometers (26.2 miles). It tests endurance and stamina,
                attracting athletes and enthusiasts worldwide to compete and
                achieve personal records.
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                Main Technology Stack
              </h3>
              <p className="text-sm text-gray-500">
                TailwindCSS, React.js, Swiper, Firebase, .env, Axios, Node.js,
                Express.js, MongoDB
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                Potential Improvements
              </h3>
              <p className="text-sm text-gray-500">
                In this project, I am taking on various challenges to make the
                project a little better. So that if I or anyone else wants to, I
                can come up with many more improvements in this project.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://merathon-client-side.web.app/"
                  target="_blank"
                  className="btn btn-outline btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/srshakil2/assignment-11-merathon-client-site"
                  target="_blank"
                  className="btn btn-outline btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* id===3 */}
          {data.id == 3 ? (
            <div>
              <img
                src="https://i.ibb.co.com/M5yx36dF/Screenshot-2025-02-07-042442.png"
                alt="marathon"
                className="rounded-lg w-full h-60 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">
                Project Name: Education Manage
              </h2>
              <p className="text-gray-600">
                Education management involves overseeing and coordinating
                educational systems, including curriculum planning, staff
                management, student assessment, and resource allocation to
                ensure effective learning environments and organizational
                success.
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                Main Technology Stack
              </h3>
              <p className="text-sm text-gray-500">
                TailwindCSS, React.js, Swiper, Firebase, .env, Axios, Node.js,
                Express.js, MongoDB
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                Potential Improvements
              </h3>
              <p className="text-sm text-gray-500">
                In this project, I am taking on various challenges to make the
                project a little better. So that if I or anyone else wants to, I
                can come up with many more improvements in this project.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://education-manegment.web.app/"
                  target="_blank"
                  className="btn btn-outline btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/srshakil2/assignment-12-final-Education-managment-client-site"
                  target="_blank"
                  className="btn btn-outline btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          ) : (
            ""
          )}

          <Link to="/" className="btn btn-link mt-4 block text-center">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
