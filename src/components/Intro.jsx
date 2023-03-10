import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Egide Hirwa
      </h1>
      <p className="text-base md:text-xl mb-3 font-light">Web Developer</p>
      <p className="text-sm max-w-xs md:max-w-xl mb-6 font-medium ">
        This is my coding journey. Browse the projects below to see what l have
        been up to.
      </p>
    </div>
  );
}

export default Intro;
