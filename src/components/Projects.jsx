import React, { useEffect, useRef } from "react";
import { portfolio } from ".././data/Index.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-bg py-10 px-4 md:px-20">
      <h2 ref={headingRef} className="text-3xl font-bold text-center mb-8">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolio.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
          >
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="http://github.com/anandhubala77"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          View More Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
