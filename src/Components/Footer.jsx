import React from "react";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const iconVariants = {
  inital: { opacity: 0, y: -20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
    },
  }),
};
const pageVariants = {
  inital: { opacity: 0, y: -20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
    },
  }),
};

const Footer = () => {
  return (
    <footer className="w-full flex  flex-col items-center bg-[#07001f] text-white py-12">
      <div className=" flex justify-around w-full max-w-5xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <img
            className="h-4 sm:h-8"
            alt="Career connect high"
            src="/logo.png"
          />
          <p className="text-xs sm:text-xl font-bold mt-4">
            Trusted Professional Reliable
          </p>
        </motion.div>
        <div className="text-center">
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs sm:text-xl font-light mb-4"
          >
            Follow us on
          </motion.h3>
          <div className="flex flex-col gap-5">
            <motion.div
              custom={1}
              initial="inital"
              whileInView="animate"
              variants={iconVariants}
              className="div"
            >
              {" "}
              <FontAwesomeIcon icon={faInstagram} className="fa-lg	" />{" "}
            </motion.div>
            <motion.div
              custom={2}
              initial="inital"
              whileInView="animate"
              variants={iconVariants}
              className="div"
            >
              {" "}
              <FontAwesomeIcon icon={faXTwitter} className="fa-md	" />{" "}
            </motion.div>
            <motion.div
              custom={3}
              initial="inital"
              whileInView="animate"
              variants={iconVariants}
              className="div"
            >
              {" "}
              <FontAwesomeIcon icon={faFacebook} className="fa-md	" />
            </motion.div>
          </div>
        </div>
        <div className="text-center">
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs sm:text-xl font-semibold mb-4"
          >
            Pages
          </motion.h3>
          <div className="space-y-2">
            <motion.p
              custom={1}
              initial="inital"
              whileInView="animate"
              variants={pageVariants}
              className=" text-xs sm:text-xl font-light"
            >
              Register
            </motion.p>
            <motion.p
              custom={2}
              initial="inital"
              whileInView="animate"
              variants={pageVariants}
              className=" text-xs sm:text-xl font-light"
            >
              Login
            </motion.p>
            <motion.p
              custom={3}
              initial="inital"
              whileInView="animate"
              variants={pageVariants}
              className=" text-xs sm:text-xl font-light"
            >
              Job Page
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
