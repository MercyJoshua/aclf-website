import { motion } from "framer-motion";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF />, url: "https://web.facebook.com/profile.php?id=61555560666250" },
  { name: "X", icon: <FaXTwitter />, url: "https://x.com/african_seeds" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/african-child-leadership-foundation/" },
];

const ContactInfo = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 bg-white dark:bg-zinc-900 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Connect With Us Online
        </h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-6">
          Follow us on social media to stay updated on our programs, events, and impact stories.
        </p>
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-xl p-3 rounded-full border border-secondary hover:bg-secondary hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
