"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const tabs = [
  {
    title: "What is Study Sphere?",
    description:
      "Study Sphere is a free and open-source educational platform designed to help students enhance their learning experience. It offers features such as note-taking, quizzes, and interactive chat with study buddies.",
  },
  {
    title: "Which technologies are used in Study Sphere?",
    description:
      "Study Sphere is built using modern technologies including CopilotKit, Next.js, Framer Motion for animations, and Tailwind CSS for styling. These technologies ensure a responsive and interactive user experience.",
  },
  {
    title: "How can I contribute to Study Sphere?",
    description:
      "Since Study Sphere is open source, you can contribute by visiting our GitHub repository. You can submit bug reports, suggest new features, or contribute code to help improve the app.",
  },
  {
    title: "Is Study Sphere free to use?",
    description:
      "Yes, Study Sphere is completely free to use. Our goal is to provide valuable educational tools to students without any cost. You can access all features of the app without any subscriptions or hidden fees.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeItem, setActiveItem] = useState<
    | {
        title: string;
        description: string;
      }
    | undefined
  >(tabs[0]);

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = tabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <>
      <div className="container mx-auto pb-10 pt-2">
        <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">
          FAQ
        </h1>
        <div className="h-fit border  rounded-lg p-2 dark:bg-[#111111] bg-[#F2F2F2]">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs.length - 1 ? "border-b" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer items-center transition-all font-semibold dark:text-white text-black   flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex === index ? "rotate-45" : "rotate-0 "
                  } transition-transform ease-in-out w-5 h-5 dark:text-gray-200 text-gray-600`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={`dark:text-white text-black p-3 pt-0 w-[90%]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
