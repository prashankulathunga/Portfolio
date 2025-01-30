import Device from "../other/Device";
import IMG from "../assets/DentalIMG.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Dental Practice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel velit auctor, ullamcorper velit vel, pharetra mauris. Nullam non quam vel neque consectetur rutrum.",
      url: IMG,
    },
    {
      title: "Dental Practice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel velit auctor, ullamcorper velit vel, pharetra mauris. Nullam non quam vel neque consectetur rutrum.",
      url: IMG,
    },
    {
      title: "Dental Practice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel velit auctor, ullamcorper velit vel, pharetra mauris. Nullam non quam vel neque consectetur rutrum.",
      url: IMG,
    },
  ];

  return (
    <>
      <div className="container mx-auto md:p-4 pb-12 md:pt-16 ">
        <div className="bg-gray-900/30 rounded-lg md:pb-6 pb-4">
          <h2 className="text-sm md:text-lg p-6 md:p-8 font-medium text-white text-left py-4">
            Projects & Contributions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4 rounded-xl">
            {projects.map((project, index) => (
              <div key={index}>
                <Device url={project.url} />
                <h3 className="text-sm md:text-lg md:col-span-1 col-span-2 font-medium text-white md:pt-8 pt-5">
                  {project.title}
                </h3>
                <p className="text-sm md:text-md md:col-span-1 col-span-2 text-gray-300 md:pt-4 pt-2 pr-4">
                  {project.description}
                </p>

                <button className="md:mt-5 drop-shadow-lg mt-4 w-1/2 md:w-[12rem] cursor-pointer text-zinc-200 flex gap-2 items-center hover:bg-black px-4 py-2 rounded-lg font-medium text-sm bg-[#111] transition-all ease-in duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 fill-zinc-200"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                  Refer in GitHub
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
