"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/vivek.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Vivek 
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              MERN Stack & Next JS Developer {" "}
            </span>
            . Eager to contribute enthusiasm, adaptability, and a fresh perspective to a dynamic team.
          </p>
          <Link
            href={"/resume"}
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
           
          >
            Check Resume
          </Link>
        </div>
      </div>
   
    </section>
  );
};

export default HeroSection;
