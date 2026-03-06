import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-black dark:text-white mb-4"
        >
          Nathanael Jonathan Feryanto
        </Link>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm text-center max-w-md">
          Software Engineering graduate dedicated to building reliable and
          user-centric web applications.
        </p>
        <div className="flex space-x-6 mt-8">
          <a
            href="mailto:nathanaelferyanto@gmail.com"
            className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <span className="sr-only">Email</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nathanaeljferyanto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <p className="border-t border-zinc-300 dark:border-zinc-800 w-full text-center py-6 mt-8 text-zinc-500 dark:text-zinc-500 text-sm">
          © {new Date().getFullYear()} Nathanael Jonathan Feryanto. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
