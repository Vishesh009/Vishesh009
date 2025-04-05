"use client";

import { useEffect, useRef } from "react";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Java",
  "Node.js",
  "System Design",
  "AWS",
  "DevOps",
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="py-12 md:py-16" ref={sectionRef}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="animate-on-scroll text-2xl font-bold mb-8 opacity-0 translate-y-6 transition-all duration-500 ease-out">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-gray-900 dark:bg-gray-800 border-gray-800 dark:border-gray-700 inline-flex items-center rounded-md border px-3 py-1 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 border-gray-800 bg-gray-900 text-white shadow hover:bg-gray-800 opacity-0 translate-y-6 duration-500 ease-out"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-fadeInUp {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
