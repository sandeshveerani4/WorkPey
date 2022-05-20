import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import themeImage from "../../images/theme.svg";

export default () => {
  return (
    <section className="relative py-10 overflow-hidden">
      <div className="relative ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full xl:w-1/2 px-4 mb-16 md:mb-0">
              <div className="flex justify-center xl:block">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl">
                  Explore our Services
                </span>
              </div>
              <h1 className="mb-3 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-center xl:text-left">
                Hire <span className="text-green-500">Pakistan's</span>{" "}
                Extremely Talented Freelancers.
              </h1>
              <p className="mb-5 text-lg md:text-xl text-coolGray-500 font-medium text-center xl:text-left w-3/4 mx-auto xl:w-full">
                Our freelancers will fulfill your needs at a very cheap price
                compared to other platforms, starting from 2.5$.
              </p>
              <div className="flex flex-wrap w-full">
                <input
                  className="w-full rounded-l-full focus:outline-none hover:bg-gray-200 focus:bg-neutral-300 flex-1 px-4 py-3 bg-gray-100"
                  placeholder="Search for Wordpress, Graphics Designing, Online Tutor etc."
                />
                <button
                  type="button"
                  className="rounded-r-full bg-green-500 px-5 text-white cursor-pointer"
                >
                  <SearchIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="hidden xl:block xl:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 w-100">
                {/* <img
                  className="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                  src={circle3}
                  alt=""
                />
                <img
                  className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                  src={dots3}
                  alt=""
                /> */}
                <img className="relative" src={themeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
