import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const nameRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Animate the "Atul Goyal" text just once
    gsap.fromTo(
      nameRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        // Ensure no repeat or stagger options are used
      }
    );

    // Animate the "About" text
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        delay: 1,
      }
    );
  }, []); // Empty dependency array ensures this runs only once

  const handleConnectClick = () => {
    // Add your connect logic here
    window.open('https://your-google-form-url.com', '_blank');
  };

  return (
    <section className="h-screen flex flex-col items-start justify-center bg-black px-8">
      <div className="flex flex-col items-start">
        <h1
          className="text-6xl font-bold text-white mb-4"
          ref={nameRef}
        >
          Atul Goyal
        </h1>
        <p
          className="text-lg text-white max-w-xl mb-4"
          ref={aboutRef}
        >
         Hey there, I'm Atul Goyal! Currently a third-year student with a strong foundation in the MERN stack ( Express.js, React, and Node.js), I have a deep passion for both technology and creativity. Recently, I’ve been expanding my expertise by diving into DevOps, aiming to streamline development processes and enhance deployment efficiency. Whether it's crafting dynamic user interfaces, building scalable server-side solutions, or integrating robust DevOps practices, I’m dedicated to bringing innovative ideas to life and thriving in the ever-evolving tech landscape.
          <br /><br />
        </p>
        <a 
          href="/path-to-your-resume.pdf" // Replace with your resume URL
          className="bg-white text-black px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition font-bold border-b-2 border-purple-600"
          download
        >
        Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;







