import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";

const navMotion = {
  visible: {
    opacity: 10,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Nav = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <nav className=" relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className=" absolute bottom-0 left-1/2 -translate-x-1/2"
        width={250}
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path d="M2 2L428 2" stroke="#282828" /* strokeLinecap=" round" */ />
      </svg>
      <div>
        <img src="/favicon.png" alt="" width={70} />
      </div>
      {!matches && (
        <div className=" flex gap-12">
          <a href="">About</a>
          <a href="">Expirience</a>
          <a href="">Skills</a>
          <a href="">Certifications</a>
          <a href="">Projects</a>
        </div>
      )}
      {matches && (
        <div
          onClick={() => setToggled((prevToggled) => !prevToggled)}
          className=" space-y-1 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className=" block h-1 w-8 rounded bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 26 }}
            className=" block h-1 w-6 rounded bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 30 : 18,
            }}
            className=" block h-1 w-4 rounded bg-black"
          ></motion.span>
        </div>
      )}
      {toggled && matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          className=" fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center"
        >
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className=" flex flex-col gap-12 text-lg"
          >
            <motion.a variants={itemMotion} href="">
              About
            </motion.a>
            <motion.a variants={itemMotion} href="">
              Expirience
            </motion.a>
            <motion.a variants={itemMotion} href="">
              Skills
            </motion.a>
            <motion.a variants={itemMotion} href="">
              Certifications
            </motion.a>
            <motion.a variants={itemMotion} href="">
              Projects
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
