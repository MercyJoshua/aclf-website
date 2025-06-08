import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/About' },
  { name: 'Programs', path: '/Program' },
  { name: 'Gallery', path: '/Gallery' },
  { name: 'Contact', path: '/Contact' },
];

const Footer = () => {
  return (
    <footer className="bg-light dark:bg-dark text-primary py-10 px-6 border-t dark:border-zinc-700 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">ACLF</h2>
          <p className="text-sm max-w-sm">
            Empowering young African children through leadership, education, and cultural awareness.
          </p>
        </div>

        {/* Navigation links */}
        <ul className="flex flex-wrap justify-center gap-4 text-base font-medium">
          {footerLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={link.path} className="hover:text-secondary text-primary transition-colors">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400"
      >
        © {new Date().getFullYear()} African Child Leadership Foundation. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
