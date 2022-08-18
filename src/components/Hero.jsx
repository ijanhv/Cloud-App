import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between p-10"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 ml-20 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4 mb-12">
            Get Started
          </button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-6 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p className="mb-3 mt-0 font-bold text-lg">Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500 font-semibold text-lg">
              <CloudUploadIcon className="h-6 text-indigo-600 mr-3" /> App
              Security
            </p>
            <p className="flex px-4 py-2 text-slate-500 font-semibold text-lg">
              <DatabaseIcon className="h-6 text-indigo-600 mr-3" /> Dashboard
              Design
            </p>
            <p className="flex px-4 py-2 text-slate-500 font-semibold text-lg">
              <ServerIcon className="h-6 text-indigo-600 mr-3" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500 font-semibold text-lg">
              <PaperAirplaneIcon className="h-6 text-indigo-600 mr-3" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
