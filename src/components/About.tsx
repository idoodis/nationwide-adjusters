import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nationwide Adjusters is a team of experienced insurance claims professionals dedicated to helping policyholders receive the maximum settlement they deserve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] rounded-lg overflow-hidden shadow-xl"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/About us.png"
                alt="Our Mission"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To provide expert claims adjusting services that ensure policyholders receive fair and maximum settlements for their insurance claims.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Our Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                With years of experience in the insurance industry, our team has successfully handled thousands of claims, from residential properties to large commercial complexes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Our Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We combine technical expertise with personalized service, working closely with our clients to navigate the complex claims process and achieve optimal results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 