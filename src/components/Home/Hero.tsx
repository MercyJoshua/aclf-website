import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="min-h-screen px-4 sm:px-6 py-12 sm:py-16 w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-light dark:bg-dark transition-colors duration-500">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="mb-8 md:mb-0 md:mr-12 flex justify-center"
            >
                <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-lg mx-auto border-2 border-primary">
                    <img
                        src="/assets/hero-bg.png"
                        alt="Children in Africa"
                        className="object-cover w-full h-full"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl flex flex-col items-center md:items-start"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                    African Child Leadership Foundation(ACLiF)
                </h1>
                <p className="text-base sm:text-lg text-secondary mb-6">
                    Building A Sustainable Future, One Child At A Time
                </p>
               
                 <Link
                            to="/Program"
className="px-6 py-3 rounded-full bg-primary text-light font-semibold hover:bg-secondary transition-colors"
                          >
                           Explore Our Work
                          </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
