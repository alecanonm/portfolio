import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <nav className=" bg-[#001E6C] text-white  px-20 mb-14 flex justify-between items-center   font-medium max-md:px-5 max-lg:px-32">
      <figure>
        <a href="/">
          <img
            className="filter brightness-0 invert"
            src="/favicon.png"
            alt=""
            width={70}
          />
        </a>
      </figure>
      {!matches && (
        <section className=" flex ">
          <a
            className=" hover:bg-[#43a2fc] p-1 px-4 rounded transition-all duration-300 "
            href="/#about"
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
            href="/#skills"
          >
            Skills
          </a>
          <a
            className=" hover:bg-[#43a2fc] p-1 px-4 rounded transition-all duration-300"
            href="/contact"
          >
            Contact
          </a>
          <a
            className=" hover:bg-[#43a2fc] p-1 px-4 rounded transition-all duration-300"
            href=""
          >
            Certifications
          </a>
        </section>
      )}
      {matches && (
        <section
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
        </section>
      )}
      {toggled && matches && (
        <motion.section
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          className=" fixed flex bg-[#001E6C] bottom-0 left-0 w-full h-screen items-center justify-center"
        >
          <motion.section
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className=" flex flex-col gap-12 text-lg"
          >
            <motion.a
              onClick={() => {
                setToggled((prev) => !prev);
              }}
              variants={itemMotion}
              href="/#about"
            >
              About
            </motion.a>
            <motion.a variants={itemMotion} href="">
              Projects
            </motion.a>
            <motion.a
              onClick={() => {
                setToggled((prev) => !prev);
              }}
              variants={itemMotion}
              href="/#skills"
            >
              Skills
            </motion.a>
            <motion.a variants={itemMotion} href="/contact">
              Contact
            </motion.a>
            <motion.a variants={itemMotion} href="">
              Certifications
            </motion.a>
          </motion.section>
        </motion.section>
      )}
    </nav>
  );
};

export default Nav;
