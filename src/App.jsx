import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [a, b] = useState(false);

  const vari1 = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  };

  const vari2 = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className='overflow-hidden relative w-full h-screen bg-zinc-900 text-white font-["gilroy"]'>
      <nav className="w-full py-5 px-20 flex items-center justify-between">
        <motion.h3
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
          className="font-semibold"
        >
          Some Brand
        </motion.h3>
        <div className="links flex gap-10 items-center text-sm">
          {["Home", "About", "Contact", "Pricing"].map((item, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
              key={index}
              href="#"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            onClick={() => b(!a)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
            className="px-6 py-2 bg-zinc-700 rounded-lg capitalize text-xs"
          >
            Open nav
          </motion.button>
        </div>
      </nav>
      <motion.aside
        variants={vari1}
        initial="initial"
        animate={a ? "animate" : "exit"}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          duration: 1.2,
          staggerChildren: 0.2,
        }}
        className="w-96 h-screen bg-zinc-800 fixed right-0 top-0 px-10 py-40"
      >
        <motion.button
          onClick={() => b(!a)}
          variants={vari2}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
        >
          Close
        </motion.button>

        {["Home", "About", "Contact", "Pricing"].map((item, index) => (
          <motion.a
            variants={vari2}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
            key={index}
            className="block text-2xl font-semibold mt-8"
          >
            {item}
          </motion.a>
        ))}
      </motion.aside>
    </div>
  );
};

export default App;
