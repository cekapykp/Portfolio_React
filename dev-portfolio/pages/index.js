/* eslint-disable react/display-name */
import Link from "next/link";
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
              <motion.a
                href="https://github.com/cekapykp"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.5 }}
              >
                <GithubIcon className={"h-8 w-8 fill-current"}></GithubIcon>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/yakup-sar%C4%B1-0443921a1/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.5 }}
              >
                <LinkedinIcon className={"h-8 w-8 fill-current"}></LinkedinIcon>
              </motion.a>

              <motion.a
                href="https://twitter.com/codes_check"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.5 }}
              >
                <TwitterIcon className={"h-8 w-8 fill-current"}></TwitterIcon>
              </motion.a>
            </div>
          </div>
          {/*Code Area*/}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons I'm really in love with them 🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQFQTAbxFhC5BA/profile-displayphoto-shrink_400_400/0/1636623164303?e=1665619200&v=beta&t=BhhOG6RxCSzHVjKVdZ4wHSHrtA2b6y2x1OpkqUr9xxQ"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">2</span> =
                        ["Reactjs", "Nextjs", "Graphql", "Nodejs"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">3</span> =
                        ["Solidity", "Web3.js", "Ethers.js"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects">
                      <a className="transition duration-300">Projects</a>
                    </Link>

                    <a
                      href="https://www.youtube.com/channel/UCfGXEo2uCkVqcIqkIaFNGcA"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300"
                    >
                      Youtube
                    </a>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
