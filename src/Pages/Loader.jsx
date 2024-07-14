import React from "react";

import { motion } from "framer-motion";
import { tailChase } from "ldrs";

const Loader = ({ setIsLoading }) => {
  tailChase.register();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 5 }}
      onAnimationComplete={() => setIsLoading(false)}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0D0C1B",
      }}
    >
      <div className=" flex">
        <h6 className=" text-lg mb-3 me-3 font-bold" style={{ color: "white" }}>
          Welcome to{" "}
        </h6>
        <img
          src="/logo.png"
          height={100}
          width={130}
          alt=""
          className="mb-3 "
        />
      </div>

      <h1>
        <l-tail-chase size="40" speed="1.5" color="white"></l-tail-chase>
      </h1>
    </motion.div>
  );
};

export default Loader;
