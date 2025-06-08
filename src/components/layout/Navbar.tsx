import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Programs", path: "/Program" },
  { name: "Gallery", path: "/Gallery" },
  { name: "Contact", path: "/Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 mx-auto flex justify-between items-center border-b dark:border-primary bg-light dark:bg-dark transition-colors duration-300 z-50 relative">
      {/* Logo */}
      <motion.div
        className="flex items-center space-x-2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <Link to="/">
          <motion.h1
            className="text-xl font-bold text-primary dark:text-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            ACLF
          </motion.h1>
        </Link>
      </motion.div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-base font-semibold">
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to={item.path}
              className="text-primary hover:text-secondary dark:text-primary transition-colors"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-primary dark:text-light text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-light dark:bg-dark shadow-md flex flex-col items-center gap-4 py-6 md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block text-primary hover:text-secondary dark:text-primary transition-colors text-lg font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
