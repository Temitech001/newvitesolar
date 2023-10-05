import React from 'react';

const About = () => {
  const aboutimg =
    'https://res.cloudinary.com/dutvrzezk/image/upload/v1696376468/ttt_qvgktz.jpg';
  return (
    <div
      name="about"
      className="w-full lg:h-screen bg-white text-gray-300 mt-[200px]  "
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <h1 className="font-semibold text-3xl text-start text-black">
            We find the highest & Best use of resource
          </h1>
          <p className=" text-black text-start">
            Solar energy is the beacon of sustainability in our quest for
            cleaner and more eco-friendly power sources. In a world increasingly
            concerned about environmental impact, harnessing the sun's energy
            has emerged as a leading solution. Solar planet.
          </p>
          <div className="sm:text-right text-4xl font-bold">
            {
              <img
                src={aboutimg}
                alt="imagee"
              />
            }
          </div>
          <div>
            <p className="text-4xl text-black font-bold inline border-b-4 border-black">
              About
            </p>

            <p className="text-black mt-[40px]">
              At SolarEco Solutions, we're passionate about harnessing the power
              of the sun to create a sustainable and cleaner future for
              generations to come. Established in [Year], our company is
              dedicated to providing top-quality solar energy solutions to
              homes, businesses, and communities across [Location].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
