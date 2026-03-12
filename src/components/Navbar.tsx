"use client";

import Link from "next/link";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiBookOpen,
  FiMail,
  FiCode,
} from "react-icons/fi";
import { useState, useEffect } from "react";

const navItems = [
  {
    href: "home",
    id: "home",
    label: "Home",
    icon: <FiHome className="w-5 h-5" />,
  },
  {
    href: "about",
    id: "about",
    label: "About",
    icon: <FiUser className="w-5 h-5" />,
  },
  {
    href: "experience",
    id: "experience",
    label: "Experience",
    icon: <FiBriefcase className="w-5 h-5" />,
  },
  {
    href: "projects",
    id: "projects",
    label: "Projects",
    icon: <FiCode className="w-5 h-5" />,
  },
  {
    href: "education",
    id: "education",
    label: "Education",
    icon: <FiBookOpen className="w-5 h-5" />,
  },
  {
    href: "contact",
    id: "contact",
    label: "Contact",
    icon: <FiMail className="w-5 h-5" />,
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-300">
        <nav className="flex flex-col gap-3 sm:gap-4 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-2 sm:p-3 border border-zinc-200/50 dark:border-zinc-800/50 rounded-full shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative group flex items-center justify-center p-2.5 sm:p-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-110"
                    : "bg-white dark:bg-zinc-800 text-zinc-500 hover:text-blue-500 dark:text-zinc-400 hover:bg-blue-50 dark:hover:bg-zinc-700 hover:scale-110"
                }`}
                aria-label={item.label}
              >
                {item.icon}

                {/* Tooltip Hover Indicator */}
                <div className="absolute left-full ml-4 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-0 -translate-y-1 transition-all whitespace-nowrap hidden md:block shadow-xl">
                  {/* Left pointing arrow */}
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-black dark:border-r-white"></div>
                  {item.label}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
