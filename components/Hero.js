"use client";

import { useAnimate, useInView } from "framer-motion";

export default function Hero() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });

  if (isInView) {
    animate([
      [".title", { opacity: 1, y: 0 }, { duration: 0.6, delay: 0.1 }],
      [
        ".underline",
        { scaleX: 1 },
        { duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
      ],
      [".description", { opacity: 1, y: 0 }, { duration: 0.6, delay: 0.5 }],
      [".buttons", { opacity: 1, y: 0 }, { duration: 0.6, delay: 0.7 }],
      [".avatar", { opacity: 1, scale: 1 }, { duration: 0.6, delay: 0.2 }],
      [".avatar-border", { opacity: 1 }, { duration: 0.4, delay: 1 }],
    ]);
  }

  return (
    <section id="hero" className="py-12 md:py-16 lg:py-20" ref={scope}>
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Text Content */}
          <div className="flex-1 space-y-4">
            <h1 className="title text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none opacity-0 translate-y-5">
              <span>Hi, I'm Vishesh 👋</span>
              <span className="underline block h-2 w-16 bg-blue-500/80 mt-2 origin-left scale-x-0" />
            </h1>

            <p className="description text-lg text-gray-600 dark:text-gray-300 md:text-xl max-w-[600px] opacity-0 translate-y-5">
              Software Engineer crafting{" "}
              <span className="text-gray-900 dark:text-white font-medium">
                scalable solutions
              </span>{" "}
              with modern tech. I share{" "}
              <span className="text-gray-900 dark:text-white font-medium">
                code insights
              </span>{" "}
              and{" "}
              <span className="text-gray-900 dark:text-white font-medium">
                project journeys
              </span>{" "}
              across platforms.
            </p>
          </div>

          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="avatar relative flex h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg opacity-0 scale-90">
              <img
                className="aspect-square h-full w-full"
                alt="Vishesh"
                src="https://avatars.githubusercontent.com/u/45231818?v=4"
                fetchPriority="high"
              />
              <div className="avatar-border absolute inset-0 rounded-full border-2 border-blue-400/50 pointer-events-none opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
