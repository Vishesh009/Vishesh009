"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
    <section id="contact" className="py-12 md:py-16" ref={sectionRef}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <div className="space-y-4">
          <div className="animate-on-scroll inline-block rounded-lg bg-gray-900 text-white px-3 py-1 text-sm opacity-0 translate-y-6 transition-all duration-500 ease-out">
            Contact
          </div>

          <h2 className="animate-on-scroll text-3xl font-bold tracking-tighter sm:text-5xl opacity-0 translate-y-6 transition-all duration-500 ease-out">
            Get in Touch
          </h2>

          <p className="animate-on-scroll mx-auto max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl opacity-0 translate-y-6 transition-all duration-500 ease-out">
            Want to chat? Just shoot me a dm{" "}
            <a
              href="https://x.com/shesh_v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              with a direct question on twitter
            </a>{" "}
            and I'll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>

        {/* Optional: Add a contact form or additional links here */}
        <div className="animate-on-scroll mt-8 flex justify-center gap-4 opacity-0 translate-y-6 transition-all duration-500 ease-out">
          <a
            href="https://x.com/shesh_v"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Message on X/Twitter
          </a>
          <a
            href="mailto:visheshbajpai9.com"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Email Me
          </a>
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
