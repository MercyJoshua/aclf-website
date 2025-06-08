import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
// import logo from "../../assets/logo.png";

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
    <nav className="w-full py-4 px-6 mx-auto flex justify-between items-center border-b dark:border-primary bg-light dark:bg-dark transition-colors duration-300 z-50">
      {/* Logo Section */}
      <motion.div
        className="flex items-center space-x-2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <Link to="/">
          {/* <img src='' alt="ACLF Logo" className="w-10 h-10 object-contain" /> */}
          <motion.h1
            className="text-xl font-bold text-primary dark:text-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
          >
            ACLF
          </motion.h1>
          </Link>
          </motion.div>
      <ul className="hidden md:flex gap-6 text-base font-semibold">
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: false }}
          >
            <Link to={item.path} className=" text-primary hover:text-secondary dark:text-primary transition-colors">{item.name}</Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        {/* Mobile Nav */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-light dark:bg-dark shadow-md flex flex-col items-center gap-4 py-4 z-50 transition-all">
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
          </ul>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
