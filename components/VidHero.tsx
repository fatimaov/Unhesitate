"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const videos = [
  "/videos/dream1.mp4",
  "/videos/dream2.mp4",
  "/videos/dream3.mp4",
  "/videos/dream4.mp4",
  "/videos/dream5.mp4",
  "/videos/dream6.mp4",
];

const VidHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-4 flex justify-center w-full min-h-screen bg-black z-0 relative">
      {/* Container aligned with Navbar */}
      <div className="flex flex-col md:flex-row w-5/6 min-h-[85vh] gap-6">
        
        {/* Left: Video Card */}
        <div className="relative w-full md: w-2/3 h-60 md:h-[90vh] rounded-2xl overflow-hidden shadow-2xl z-0">
          {videos.map((video, index) => (
            <video
              key={index}
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Right: Login Card */}
        <div className="flex items-center justify-center w-full h-auto md:h-[90vh] md:w-1/3">
          <div className=" w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-white shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-white/20 flex flex-col items-center justify-center md:h-[80vh]">
            
            {/* Open Source Project Heading */}
            <h2 className="text-2xl md:text-5xl uppercase tracking-widest text-blue-400 mb-2 text-center">
              Open Source Project
            </h2>

            {/* Main Title */}
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
              Share Your Dream
            </h1>

            {/* Quote */}
            <p className="text-gray-300 text-base md:text-xl mb-5 italic text-center">
              "A dream is not something you see in your sleep, it’s something that
              keeps you awake."
            </p>

            <Image
              src="/images/logintab.png"
              alt="Login Tab"
              className="mb-6 md:mb-8"
              height={80}
              width={200}
            />

            {/* Share Button */}
            <button className="relative overflow-hidden bg-blue-500 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold transition duration-500 transform hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] group">
              <span className="relative z-10">Share</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
            </button>

            {/* GitHub Button */}
            <div className="mt-5 md:mt-6 w-full flex justify-center">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block px-5 py-2 md:px-6 md:py-3 rounded-full bg-gray-800 border border-gray-700 text-white font-semibold transition duration-500 overflow-hidden hover:scale-110 hover:rotate-1 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {/* GitHub Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.8-1 .1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.7 11.7 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.4-2.8 5.4-5.5 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                  GitHub Repo
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VidHero;
