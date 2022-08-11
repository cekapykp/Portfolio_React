/* eslint-disable react/display-name */
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";
import React from "react";

import GithubIcon from "../components/icons/Github";
import LinkedinIcon from "../components/icons/Linkedin";
import TwitterIcon from "../components/icons/Twitter";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={Infinity}
        wrapper="p"
        steps={[
          "Laravel Developer",
          4000,
          "Software Engineer",
          4000,
          "Youtuber",
          4000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);
export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My portfolio"}>
      <motion.img
        src="/images/NewLogo.png"
        alt="checkupcodes"
        width={150}
        className="hidden md:block h-auto absolute top-38 right-10 z-[1]"
        whileHover={{ y: -10, rotate: -90, transition: { duration: 0.3 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      ></motion.img>
      <motion.img
        src="/images/NewLogo.png"
        alt="checkupcodes"
        width={150}
        className="hidden md:block h-auto absolute bottom-20 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 180, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      ></motion.img>
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt6 ">
          <div className="flex flex-col item-center justify-center md:item-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello</span>
            </h4>
            <h1
              className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-5xl md:mt-4 dark:text-white"
              style={{ fontWeight: "bolder" }}
            >
              Yakup Sarı
            </h1>
            <div className="mt-5 text-xl font-normal text-transparent bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-2">
              <TypingAnimation />
            </div>
            {/*Social*/}
            <div className="flex item-center mt-8 space-x-6 md:mt-4">
              <motion.a>
                <GithubIcon className={"h-8 w-8 fill-current"}></GithubIcon>
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
