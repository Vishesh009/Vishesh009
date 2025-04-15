export default function About() {
  return (
    <section id="about" className="mt-10 py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">About</h2>

        <div className="prose prose-sm max-w-full text-pretty text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            I'm an{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              incessant learner
            </span>{" "}
            and
            <span className="font-medium text-gray-900 dark:text-white">
              {" "}
              problem solver
            </span>{" "}
            passionate about transforming ideas into scalable digital solutions.
            My journey blends technical expertise with entrepreneurial thinking,
            constantly pushing boundaries in web development.
          </p>

          <p>
            Currently at{" "}
            <a
              href="https://www.cognizant.com/in/en"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cognizant
            </a>
            , I drive{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              architectural decisions
            </span>{" "}
            and
            <span className="font-medium text-gray-900 dark:text-white">
              {" "}
              framework development.
            </span>{" "}
            I thrive at the intersection of{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              AI, SaaS, and developer tools
            </span>
            , always exploring how emerging technologies can solve real-world
            challenges.
          </p>

          <p className="pt-2">
            <span className="font-medium text-gray-900 dark:text-white">
              Open for opportunities
            </span>{" "}
            where I can leverage my full-stack expertise to build impactful,
            high-performance applications.
          </p>
        </div>
      </div>
    </section>
  );
}
