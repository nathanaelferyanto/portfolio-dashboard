export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section
        id="home"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1 space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-2">
            Software Engineering Graduate
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            Hi, I'm <span className="text-blue-500">Nathanael</span>.<br />
            Web Developer.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I specialize in developing scalable web applications using
            JavaScript, TypeScript, React, Laravel, and Express. Experienced in
            building RESTful APIs, integrating systems, and implementing CI/CD
            pipelines.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md relative aspect-square rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 shadow-2xl overflow-hidden backdrop-blur-3xl flex items-center justify-center">
          <div className="absolute inset-x-0 bottom-0 top-10 bg-zinc-900 rounded-full blur-3xl opacity-20 dark:opacity-40 animate-pulse"></div>
          <div className="relative z-10 text-center space-y-2">
            <div className="text-7xl font-bold opacity-30 select-none">NJF</div>
            <div className="text-sm font-medium opacity-50 uppercase tracking-widest">
              Profile Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-zinc-50 dark:bg-zinc-900/50 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
              About Me
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              I am a Software Engineering graduate seeking opportunities to
              further develop technical expertise and contribute to building
              software solutions that support real business operations.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Based in Bogor, Indonesia, I have a deep interest in modern web
              development technologies and cloud infrastructure. I approach
              problems with a growth mindset and am adaptable to new tools and
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-16"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Work Experience
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            My professional journey in software development.
          </p>
        </div>

        <div className="space-y-12">
          {/* Job 1 */}
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"></div>

            <div className="md:flex gap-8 relative">
              <div className="md:w-1/4 pb-4 md:pb-0 z-10 flex flex-col items-start md:items-end md:text-right">
                <div className="absolute left-0 w-3 h-3 rounded-full bg-blue-500 top-2 md:hidden -ml-[5px]"></div>
                <div className="hidden md:block absolute left-1/4 w-3 h-3 rounded-full bg-blue-500 top-2 -ml-[5px] ring-4 ring-white dark:ring-black"></div>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  Dec 2024 - Present
                </span>
                <span className="text-sm font-medium text-zinc-500 mt-1">
                  Bogor, Indonesia
                </span>
              </div>
              <div className="md:w-3/4 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">IT Staff</h3>
                  <div className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                    PT Sukaharja Quail Indonesia
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <li>
                    Built a web-based expense management system for cash
                    requests, reimbursements, and approval workflows, used by
                    approximately 20 employees.
                  </li>
                  <li>
                    Developed an inventory monitoring system to record daily,
                    monthly, and yearly quail egg production and population data
                    with data visualizations.
                  </li>
                  <li>
                    Implemented a sales management system to handle sales
                    orders, delivery records, invoice generation, and product
                    returns for internal distribution workflows.
                  </li>
                  <li>
                    Developed a web-based remote attendance system using GPS
                    location validation to verify employee check-ins.
                  </li>
                  <li>
                    Designed and built a public corporate website with a custom
                    CMS allowing non-technical staff updates.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "React",
                    "Laravel",
                    "Express",
                    "MySQL",
                    "Docker",
                    "GitHub Actions",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"></div>
            <div className="md:flex gap-8 relative">
              <div className="md:w-1/4 pb-4 md:pb-0 z-10 flex flex-col items-start md:items-end md:text-right">
                <div className="absolute left-0 w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 top-2 md:hidden -ml-[5px]"></div>
                <div className="hidden md:block absolute left-1/4 w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 top-2 -ml-[5px] ring-4 ring-white dark:ring-black"></div>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Jul 2024 - Dec 2024
                </span>
                <span className="text-sm font-medium text-zinc-500 mt-1">
                  Bogor, Indonesia
                </span>
              </div>
              <div className="md:w-3/4 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">Web Developer Intern</h3>
                  <div className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                    PT Sukaharja Quail Indonesia
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <li>
                    Developed an investment management module supporting
                    investor registration and participation in batch-based
                    livestock investments.
                  </li>
                  <li>
                    Implemented investor account registration, verification, and
                    dedicated dashboard for monitoring history.
                  </li>
                  <li>
                    Built functionality for investors to join/withdraw from
                    batches, and administrators to manage participation.
                  </li>
                  <li>
                    Developed bulk data import features to streamline investor
                    administration.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Figma", "React", "Express", "MySQL"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job 3 */}
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"></div>
            <div className="md:flex gap-8 relative">
              <div className="md:w-1/4 pb-4 md:pb-0 z-10 flex flex-col items-start md:items-end md:text-right">
                <div className="absolute left-0 w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 top-2 md:hidden -ml-[5px]"></div>
                <div className="hidden md:block absolute left-1/4 w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 top-2 -ml-[5px] ring-4 ring-white dark:ring-black"></div>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Jan 2024 - May 2024
                </span>
                <span className="text-sm font-medium text-zinc-500 mt-1">
                  Jakarta, Indonesia
                </span>
              </div>
              <div className="md:w-3/4 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">Web Developer Intern</h3>
                  <div className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                    Badan Standardisasi Nasional
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <li>
                    Developed a web-based registration platform for the SNI
                    Award program for businesses to submit assessment data.
                  </li>
                  <li>
                    Built and maintained master data management (CRUD) modules
                    for administrators.
                  </li>
                  <li>
                    Implemented participant registration and verification
                    workflows with validation and approval systems.
                  </li>
                  <li>
                    Integrated frontend interfaces with backend services to
                    support secure data handling.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Laravel", "MySQL"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section
        id="education"
        className="w-full bg-zinc-50 dark:bg-zinc-900/50 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formal Education */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black tracking-tight">Education</h2>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
              <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                <div>
                  <h3 className="text-xl font-bold">IPB University</h3>
                  <div className="text-zinc-600 dark:text-zinc-400">
                    Bogor, Indonesia
                  </div>
                </div>
                <span className="text-sm font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full">
                  Aug 2021 - Aug 2025
                </span>
              </div>
              <div>
                <div className="font-semibold text-lg">
                  Bachelor of Applied Science
                </div>
                <div className="font-medium text-zinc-700 dark:text-zinc-300">
                  Software Engineering Technology
                </div>
              </div>
              <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                GPA:{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  3.68/4.00
                </span>
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                <strong className="text-zinc-900 dark:text-zinc-100">
                  Final Project:
                </strong>{" "}
                Development of an Investor Management Module for Batch-Based
                Investment in the Sukaharja Quail Business Investment
                Application
              </div>
            </div>

            {/* Non Formal Education */}
            <h2 className="text-2xl font-black tracking-tight pt-4">
              Non-Formal Education
            </h2>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
              <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    Bangkit Academy
                  </h3>
                  <div className="text-zinc-600 dark:text-zinc-400 text-sm">
                    led by Google, Tokopedia, Gojek, & Traveloka
                  </div>
                </div>
                <span className="text-sm font-bold bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 px-3 py-1 rounded-full whitespace-nowrap">
                  Aug 2023 - Jan 2024
                </span>
              </div>
              <div>
                <div className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                  Cloud Computing Cohort
                </div>
                <div className="text-sm font-medium text-zinc-500">
                  Studi Independen Kampus Merdeka • Remote
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <li>
                  Focusing on full-stack web development principles and soft
                  skills.
                </li>
                <li>
                  Deepened technical proficiency in Node.js to build scalable
                  RESTful APIs.
                </li>
                <li>
                  Gained foundational exposure to DevOps practices and cloud
                  infrastructure.
                </li>
                <li>
                  Collaborated on a Capstone Project to deliver backend
                  integration.
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black tracking-tight">
              Certifications
            </h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-1 hover:border-blue-500 transition-colors">
                <h3 className="font-bold text-lg">
                  Software Engineer Competency Certification
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 flex justify-between items-center">
                  <span>BNSP</span>
                  <span className="text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                    Valid: Sep 2025 - Sep 2028
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-1 hover:border-blue-500 transition-colors">
                <h3 className="font-bold text-lg">
                  Cloud Computing Program Certificate
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 flex justify-between items-center">
                  <span>Bangkit Academy</span>
                  <span className="text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                    Jan 2024
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-1 hover:border-blue-500 transition-colors">
                <h3 className="font-bold text-lg">
                  English for Business Communication
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 flex justify-between items-center">
                  <span>The British Institute</span>
                  <span className="text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                    Nov 2023
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-black tracking-tight pt-8">
              Languages
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="font-bold">Indonesian</div>
                <div className="text-sm text-zinc-500 mt-1">Native</div>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="font-bold">English</div>
                <div className="text-sm text-zinc-500 mt-1">Conversational</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-16"
      >
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center">
          Technical Arsenal & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Hard Skills
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Laravel",
                "Express.js",
                "MySQL",
                "HTML",
                "CSS",
                "TailwindCSS",
                "Docker",
                "GitHub Actions",
                "Figma",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                "Growth mindset",
                "Critical thinking",
                "Problem solving",
                "Adaptability",
                "Professional communication",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-5 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-transparent font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full bg-blue-600 dark:bg-blue-900 py-24 md:py-32 text-center space-y-8"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Seeking opportunities to further develop technical expertise and
            contribute to building robust software solutions. My inbox is always
            open.
          </p>
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:nathanaelferyanto@gmail.com"
              className="px-10 py-4 text-lg rounded-full bg-white text-blue-700 font-bold tracking-wide hover:bg-zinc-50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl shadow-blue-800/20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/nathanaeljferyanto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-lg rounded-full border border-blue-400 text-white font-bold tracking-wide hover:bg-blue-700 dark:hover:bg-blue-800 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              LinkedIn Profile
            </a>
          </div>
          <p className="text-blue-200 mt-8 text-sm">
            Bogor, Indonesia • +62 895 6131 62019
          </p>
        </div>
      </section>
    </div>
  );
}
