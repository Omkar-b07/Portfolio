import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-[#121212] text-white min-h-screen scroll-smooth">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Hero />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <About />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Projects />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
