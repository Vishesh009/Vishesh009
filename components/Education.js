"use client";

import { useEffect, useRef } from "react";

const educationData = [
  {
    institution: "Krishna Institute of Engineering and Technology",
    url: "https://www.kiet.edu/",
    logo: "/kiet.png",
    degree: "B.Tech in Information Technology",
    period: "2017 - 2021",
  },
  {
    institution: "Lucknow Public School",
    url: "https://jankipuram.lpsc.co.in/",
    logo: "../img/lps.png",
    degree: "XII ISC/ICSE",
    period: "2005 - 2017",
  },
];

export default function Education() {
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
    <section id="education" className="py-12 md:py-16" ref={sectionRef}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="animate-on-scroll text-2xl font-bold mb-8 opacity-0 translate-y-6 transition-all duration-500 ease-out">
          Education
        </h2>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <a
              key={index}
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll block group opacity-0 translate-y-6 transition-all duration-500 ease-out"
            >
              <div className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex">
                <div className="flex-none mr-4">
                  <div className="relative flex shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-600 size-12 bg-gray-50 dark:bg-gray-700">
                    <img
                      className="aspect-square h-full w-full object-contain p-1.5"
                      alt={edu.institution}
                      src={edu.logo}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-x-2">
                      <h3 className="inline-flex items-center font-semibold text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {edu.institution}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1 size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </h3>
                      <div className="text-xs sm:text-sm tabular-nums text-gray-500 dark:text-gray-400">
                        {edu.period}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {edu.degree}
                    </div>
                  </div>
                </div>
              </div>
            </a>
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
