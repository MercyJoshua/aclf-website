import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import DonateButton from '../common/DonateButton';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/About' },
  { name: 'Programs', path: '/Program' },
  { name: "Advocacy Campaigns", path: "/advocacy-campaigns" },
  { name: 'Gallery', path: '/Gallery' },
  { name: 'Contact', path: '/Contact' },
];

const contactInfo = {
  phone: '+234 8026502050',
  email: 'africanchildleadershipfdn@gmail.com',
};

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/african-child-leadership-foundation/', icon: FaLinkedin },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61555560666250&mibextid=ZbWKwL', icon: FaFacebook },
  { name: 'X', url: 'https://twitter.com/African_Seeds?t=d9O9GcCDdAcmqOF77MgLGA&s=09', icon: FaXTwitter },
  { name: 'Instagram', url: 'https://www.instagram.com/african_seeds?igsh=MWQwZDRrMG5nNHZ2bw==', icon: FaInstagram },
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
        {/* Logo & Tagline */}
        <div className="text-center md:text-left">
          <motion.img
            src="/assets/ACLF-logo.png"
            alt="Children in Africa"
            className="object-contain w-40 h-20 md:w-36 md:h-24"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <p className="text-sm max-w-sm">
            Empowering young African children through leadership, education, and cultural awareness.
          </p>
        </div>

        {/* Navigation & Contact */}
        <div className="flex flex-col items-center gap-4">
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
           <DonateButton className="hidden md:block" />

          {/* Contact Info */}
          <div className="text-sm text-center">
            <p>Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-secondary text-primary">{contactInfo.email}</a></p>
            <p>Phone: <a href={`tel:${contactInfo.phone}`} className="hover:text-secondary text-primary">{contactInfo.phone}</a></p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <social.icon
                  aria-label={social.name}
                  className="w-6 h-6 hover:scale-110 transition-transform hover:text-secondary text-primary"
                />
              </motion.a>
            ))}
            
          </div>
        </div>
      </motion.div>

     

      {/* Copyright */}
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
