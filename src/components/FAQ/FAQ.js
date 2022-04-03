import React from "react";
import "flowbite";
const FAQ = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-5">
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is Context Api? 🤷‍♂️
          <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is Semantic Tag? 🤷‍♂️
          <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos velit sequi vel enim voluptates in, modi error quidem consequatur maiores consequuntur ducimus quisquam eos, doloribus quas possimus assumenda repudiandae?
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What are the Difference between Inline, Inline Block, Block Level Element? 🤷‍♂️
          <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;