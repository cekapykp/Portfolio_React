/* eslint-disable react/display-name */
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";
import React from "react";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={Infinity}
        wrapper="p"
        steps={[
          "Laravel Developer",
          2000,
          "Software Engineer",
          2000,
          "Youtuber",
          2000,
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
        src="/images/ball-2.svg"
        alt="ball1"
        className="hidden md:block h-auto absolute top-38 right-10 z-[1]"
        whileHover={{ y: -10, rotate: -90, transition: { duration: 0.3 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      ></motion.img>
      <motion.img
        src="/images/ball-1.svg"
        alt="ball2"
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
            <div>
              <TypingAnimation />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
