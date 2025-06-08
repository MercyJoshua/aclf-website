import { motion } from "framer-motion";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for submission logic (API call, toast, etc.)
    alert("Message sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 bg-light dark:bg-zinc-800"
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-800 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-800 dark:text-white"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            value={form.subject}
            onChange={handleChange}
            className="p-3 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-800 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="p-3 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-800 dark:text-white"
          />
          <button
            type="submit"
            className="w-full md:w-fit px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Form;
