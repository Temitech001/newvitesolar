import react from 'react';

// import { data } from '../data/data';
import { cards } from '../data/data';

const Header = () => {
  const img1 =
    'https://res.cloudinary.com/dutvrzezk/image/upload/v1696377012/pexels-ki-media-9799757_tgiwyc.jpg';

  return (
    <div
      name="home"
      className="w-full h-full bg-white"
    >
      {/* Container */}
      <div className="flex flex-col text-black "></div>
      <div className="relative flex flex-col items-center justify-center mt-10">
        <img
          className="  lg:w-[1250px] lg:h-[540px] lg:mt-[100px] mt-[100px]  w-[340px] "
          src={img1}
          alt="key"
        />
        <div className="flex flex-col  absolute top-32 gap-5 w-fit px-16 py-4 text-center justify-center  items-center z-40  ">
          <h1 className="mt-[80px] text-white shadow-md z-index lg:text-5xl font-extrabold">
            Energy Generated from Natural Resource
          </h1>
          <p className="text-white shadow-md font-semibold mt-5">
            Solar Power because the best things in life end up being free
          </p>
          <button className="bg-orange-500 font-semibold text-sm text-white mt-[50px] p-5  rounded">
            CONTACT US
          </button>
        </div>
        <div className="text-white mt-[70px] flex flex-col  px-8   items-center justify-center lg:flex-row lg:px-40 lg:gap-5 lg:justify-evenly gap-8">
          <h1 className=" mt-8 flex-1 font-semibold text-3xl text-start text-black">
            We find the highest and Best use of resource
          </h1>
          <p className=" flex-1 text-black text-start">
            Solar energy is the beacon of sustainability in our quest for
            cleaner and more eco-friendly power sources. In a world increasingly
            concerned about environmental impact, harnessing the sun's energy
            has emerged as a leading solution. Solar planet.
          </p>
        </div>
      </div>

      <div className=" mt-10 flex flex-col gap-4 text-center lg:flex-row justify-around items-center">
        {cards?.map((item) => (
          <div
            className="bg-white text-blue-600"
            key={item.id}
          >
            <div className="flex flex-col items-center border  border-1  w-[320px]">
              {' '}
              <img
                className="w-[150px] mt-5  "
                src={item.image}
                alt="nim"
              />
              <p className=" font-semibold text-center mt-5 text-3xl ">
                installation
              </p>
              <p className="text-center px-9 mb-7">
                Solar energy is the beacon of sustainability in our quest for
                cleaner and more eco-friendly power sources.{' '}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
