import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import DonateButton from "../common/DonateButton";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  {
    name: "Programs",
    dropdown: true,
    items: [
      { name: "KidLeaders Fun Lab", path: "/Kidleaders" },
      { name: "Project Think4Impact", path: "/project-think4impact" },
      { name: "Dream. Lead. Innovate.", path: "/dream-lead-innovate" },
    ],
  },
  { name: "Advocacy Campaigns", path: "/advocacy-campaigns" },
  { name: "Gallery", path: "/Gallery" },
  { name: "Contact", path: "/Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 mx-auto flex justify-between items-center border-b dark:border-primary bg-light dark:bg-dark transition-colors duration-300 z-50 relative">
      {/* Logo */}
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Link to="/" className="block">
          <motion.img
            src="/assets/ACLF-logo.png"
            alt="Children in Africa"
            className="object-contain w-40 h-20 md:w-36 md:h-24"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </Link>
      </motion.div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 items-center text-base font-semibold relative">
        {navItems.map((item, index) =>
          item.dropdown ? (
            <motion.li
              key={item.name}
              className="relative"
              onMouseEnter={() => setProgramDropdownOpen(true)}
              onMouseLeave={() => setProgramDropdownOpen(false)}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <span className="cursor-pointer text-primary hover:text-secondary dark:text-primary transition-colors">
                {item.name}
              </span>

              {/* Dropdown */}
              <AnimatePresence>
                {programDropdownOpen && (
                  <motion.ul
                    className="absolute left-0 top-full mt-2 flex flex-col bg-white dark:bg-dark shadow-lg rounded-md py-2 w-56 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 text-primary dark:text-light transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ) : (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.path ?? "#"}
                className="text-primary hover:text-secondary dark:text-primary transition-colors"
              >
                {item.name}
              </Link>
            </motion.li>
          )
        )}

        {/* Donate Button */}
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <DonateButton className="hidden md:block" />
        </motion.li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-primary dark:text-primary text-2xl bg-dark"
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
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="w-full text-center">
                  <button
                    onClick={() => setProgramDropdownOpen(!programDropdownOpen)}
                    className="text-primary dark:text-primary font-semibold"
                  >
                    {item.name}
                  </button>

                  {/* Dropdown list */}
                  {programDropdownOpen && (
                    <ul className="mt-2 space-y-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className="block text-sm text-primary hover:text-secondary dark:text-light"
                            onClick={() => setMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    to={item.path ?? "#"}
                    className="block text-primary hover:text-secondary dark:text-primary transition-colors text-lg font-semibold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}

            {/* Donate Button - Mobile */}
            <li>
              <DonateButton className="w-full text-center" />
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
