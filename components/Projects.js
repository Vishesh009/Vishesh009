"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Whack-A-Mole",
    link: "https://vishesh009.github.io/Whack-A-Mole/",
    image:
      "https://images.squarespace-cdn.com/content/v1/510feb8ce4b0c0190c38feeb/1591818308738-M5P09IFM2YZKJH7GP49M/Whack-a-mole.png",
    date: "October 2024",
    description:
      "My Whack-a-Mole game is a modern twist on the classic arcade favorite, built entirely with React, JavaScript, and CSS. This interactive web app brings nostalgic fun to your browser with smooth animations, score tracking, and dynamic gameplay.",
    tags: ["React", "Typescript", "TailwindCSS", "JavaScript"],
    buttons: [
      {
        label: "Website",
        icon: "globe",
        link: "https://vishesh009.github.io/Whack-A-Mole/",
      },
    ],
  },
  {
    title: "Countdown-Clock",
    link: "https://vishesh009.github.io/Countdown-Clock/",
    image: "https://c.tadst.com/gfx/1200x630/fb-stopwatch2.png?1",
    date: "Jun 2024",
    description:
      " Countdown Clock is a versatile web application built with React and TypeScript, designed for precision timing with elegant visuals. Whether tracking deadlines, workouts, or special events, this tool combines utility with beautiful design.",
    tags: ["React", "Typescript", "TailwindCSS", "JavaScript"],
    buttons: [
      {
        label: "Website",
        icon: "globe",
        link: "https://vishesh009.github.io/Countdown-Clock/",
      },
      // {
      //   label: "Extension",
      //   icon: "chrome",
      //   link: "https://chromewebstore.google.com/detail/dank-ai/kkmmfcnailgcdgmkchnehgoknlicobie",
      // },
      // {
      //   label: "Source",
      //   icon: "github",
      //   link: "https://shivam.fyi/github/bedank",
      // },
    ],
  },
  // {
  //   title: "3D Cup Designer",
  //   link: "https://brush.shivam.fyi",
  //   video:
  //     "https://ibivsgivwzqypvfsghwc.supabase.co/storage/v1/object/public/models/brush3d.mp4?t=2024-07-12T09%3A11%3A04.224Z",
  //   date: "Apr 2024",
  //   description:
  //     "3D Cup Designer is a platform that allows users to design their paper cups online and visualize them in real-time 3D. The platform enhances user experience by providing an interactive way to see how the designs will look when printed and manufactured.",
  //   tags: [
  //     "Three.js",
  //     "React",
  //     "Blender",
  //     "TailwindCSS",
  //     "Fabric.js",
  //     "PostgreSQL",
  //   ],
  //   buttons: [
  //     { label: "Website", icon: "globe", link: "https://brush.shivam.fyi" },
  //   ],
  // },
  // {
  //   title: "Bulk WhatsApp Message Sender",
  //   link: "https://github.com/Shivamc489/bulk-whatsapp-message",
  //   video:
  //     "https://ibivsgivwzqypvfsghwc.supabase.co/storage/v1/object/public/models/Bulk_Whatsapp_Sender.mp4?t=2024-07-13T17%3A15%3A04.916Z",
  //   date: "July 2024",
  //   description:
  //     "A tool for sending bulk WhatsApp messages using a CSV file containing phone numbers and messages. It automates WhatsApp Web using Selenium, allowing users to send text messages and optionally attach images to multiple contacts efficiently.",
  //   tags: ["Python", "Selenium", "CSV", "ChromeDriver"],
  //   buttons: [
  //     {
  //       label: "GitHub",
  //       icon: "github",
  //       link: "https://github.com/Shivamc489/bulk-whatsapp-message",
  //     },
  //   ],
  // },
];

const Icon = ({ name, className }) => {
  switch (name) {
    case "globe":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      );
    case "chrome":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="21.17" x2="12" y1="8" y2="8"></line>
          <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
          <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 438.549 438.549" className={className}>
          <path
            fill="currentColor"
            d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
          ></path>
        </svg>
      );
    default:
      return null;
  }
};

export default function Projects() {
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
    <section id="projects" className="py-12 md:py-16" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="animate-on-scroll inline-block rounded-lg bg-gray-900 text-white px-3 py-1 text-sm opacity-0 translate-y-6 transition-all duration-500 ease-out">
              My Projects
            </div>
            <h2 className="animate-on-scroll text-3xl font-bold tracking-tighter sm:text-5xl opacity-0 translate-y-6 transition-all duration-500 ease-out">
              Check out my latest work
            </h2>
            <p className="animate-on-scroll text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-0 translate-y-6 transition-all duration-500 ease-out">
              I've worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll rounded-lg bg-white dark:bg-gray-800 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 ease-out h-full opacity-0 translate-y-6 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a
                className="block cursor-pointer"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="pointer-events-none mx-auto h-48 w-full object-cover object-top"
                  />
                ) : (
                  <img
                    alt={project.title}
                    loading="lazy"
                    className="h-48 w-full overflow-hidden object-cover object-top"
                    src={project.image}
                  />
                )}
              </a>

              <div className="flex flex-col p-4">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight text-base">
                    {project.title}
                  </h3>
                  <time className="text-xs text-gray-500 dark:text-gray-400">
                    {project.date}
                  </time>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="inline-flex items-center rounded-md border  border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-0.5 text-xs font-medium transition-colors"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.buttons.map((button, btnIndex) => (
                    <a
                      key={btnIndex}
                      href={button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md border border-transparent bg-gray-900 text-white hover:bg-blue-700 px-3 py-1 text-xs font-medium shadow-sm transition-colors gap-2"
                    >
                      <Icon name={button.icon} className="size-3" />
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
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
