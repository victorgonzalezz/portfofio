/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center pu-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-1 tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// I am not your normal developer</p>
          <p className="py-2 text-gray-600">I have spent last 10 years as a personal trainer and</p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning HTML and CSS and the Javacript.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image src="/../public/assets/computer.jpg" alt="/" width="520" height="400" />
        </div>
      </div>
    </div>
  );
};
export default About;
