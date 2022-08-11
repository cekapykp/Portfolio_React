import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My portfolio"}>
      <motion.img
        src="/images/ball-2.svg"
        alt="ball1"
        className="hidden md:block h-auto absolute top-38 right-10 z-[1]"
        whileHover={{ y: -10, rotate: -90, transition: { duration: 0.3 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, botton: 0 }}
      ></motion.img>
      <motion.img
        src="/images/ball-1.svg"
        alt="ball2"
        className="hidden md:block h-auto absolute bottom-20 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 180, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, botton: 0 }}
      ></motion.img>
      <main>
        <motion.h1 className="text-green-500" whileHover={{ y: 3 }}>
          Hello
        </motion.h1>
      </main>
    </Layout>
  );
}
