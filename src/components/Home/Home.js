import React from "react";
import { NavLink } from "react-router-dom";
import useReviews from "../../Hooks/useReview";
import Review from "../Review/Review";

const Home = () => {
  const [reviews] = useReviews();
  const homeReview = reviews.slice(0, 3);
  console.log(homeReview);
  return (
    <div className="mb-44">
      <div className="mb-5 w-[90%] lg:w-[75%] mx-auto flex flex-col md:flex-row justify-center items-center gap-32">
        <div className="text-left order-2 md:order-1">
          <h1 className="text-4xl leading-relaxed font-bold text-red-500">হাবলুদের জন্য প্রোগ্রামিং</h1>
          <h1 className="text-4xl leading-relaxed font-bold text-orange-400 mb-2">"হাবলুগিরি দিয়েই চাল্লুদের পিছনে ফেলে দেয়ার দৃঢ় প্রত্যয়ে"</h1>
          <p className="text-xl">
            যারা ভয়ের কারণে প্রোগ্রামিং শিখা শুরু করতেই পারে না। প্রোগ্রামিং
            কঠিন; সায়ন্সের স্টুডেন্ট বা ম্যাথে ভালো না হলে প্রোগ্রামিং শিখতে
            পারবে না মনে করে মুখ লুকিয়ে রাখে। তাদের জন্য গল্প আর মজার ছলে, চায়ের
            আড্ডার মাধ্যমে প্রোগ্রামিংয়ের বেসিক কনসেপ্টগুলো উপস্থাপন করা হয়েছে।
            তাছাড়া স্মার্টফোনে কোনকিছু ইনস্টল না করেই প্রোগ্রামিং প্রাকটিস করতে
            পারবে। আর যারা প্রোগ্রামিং শিখে কিছুটা এগিয়ে আছে, তারাও বইটি পড়ে
            প্রোগ্রামিংয়ের বেসিক কনসেপ্টগুলো ফকফকা করে নিতে পারবে।
          </p>
        </div>
        
        <img className="bg-red-500 p-6 shadow-lg shadow-orange-400 order-1 md:order-2" src="image1.jpg" alt="" />
        
        </div>
      {homeReview.map((review) => (
        <Review review={review} key={review.id}></Review>
      ))}
      <div className="mt-5">
        <NavLink
          to="/reviews"
          className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 transition-all delay-75 ease-linear"
        >
          Explore More Reviews....
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
