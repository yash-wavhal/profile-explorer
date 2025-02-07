import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] w-screen">
      <section class="w-full relative h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center -z-10">
          <div class="w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-blob opacity-80 mix-blend-multiply filter blur-xl"></div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-primary font-semibold text-5xl md:text-7xl text-center">
            Profile Explorer
          </h1>
          <div className="flex gap-8 mt-8">
            <Link className="hover:text-blue-500 underline" to="/profiles">
              <button className="btn px-4">profiles</button>
            </Link>
            <Link className="hover:text-blue-500 underline" to="/admin">
              <button className="btn px-4">admin</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
