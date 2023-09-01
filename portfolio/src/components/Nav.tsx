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
  const matches = useMediaQuery("(max-width: 900px)");
  return (
    <nav className=" bg-[#001E6C] text-white sticky  px-20 mb-24 flex justify-between items-center   font-medium max-md:px-5 max-lg:px-32">
      <div>
        <img
          className="filter brightness-0 invert"
          src="/favicon.png"
          alt=""
          width={70}
        />
      </div>
      {!matches && (
        <div className=" flex ">
          <a
            className=" hover:bg-[#43a2fc] p-1 px-4 rounded transition-all duration-300 "
            href=""
          >
            About
          </a>
          <a
            className=" hover:bg-[#43a2fc] p-1 px-4 rounded transition-all duration-300"
            href=""
          >
            Projects
          </a>
          <a
            className=" hover:bg-[#43a2fc] p-1 px-4 rounded transition-all duration-300"
            href=""
          >
            Skills
          </a>
          <a
            className=" hover:bg-[#43a2fc] p-1 px-4 rounded transition-all duration-300"
            href=""
          >
            Contact
          </a>
          <a
            className=" hover:bg-[#43a2fc] p-1 px-4 rounded transition-all duration-300"
            href=""
          >
            Certifications
          </a>
        </div>
      )}
      {matches && (
        <div
          onClick={() => setToggled((prevToggled) => !prevToggled)}
          className=" space-y-1 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className=" block h-1 w-8 rounded bg-white"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 26 }}
            className=" block h-1 w-6 rounded bg-white"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 30 : 18,
            }}
            className=" block h-1 w-4 rounded bg-white"
          ></motion.span>
        </div>
      )}
      {toggled && matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          className=" fixed flex bg-[#001E6C] bottom-0 left-0 w-full h-screen items-center justify-center"
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
              Projects
            </motion.a>
            <motion.a variants={itemMotion} href="">
              Skills
            </motion.a>
            <motion.a variants={itemMotion} href="">
              Contact
            </motion.a>
            <motion.a variants={itemMotion} href="">
              Certifications
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
