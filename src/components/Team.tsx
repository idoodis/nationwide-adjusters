import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Katie Tlaczani',
    role: 'Lead Claims Adjuster',
    image: '/Katie Tlaczani.JPG',
    bio: 'With over 15 years of experience in insurance claims adjusting, Katie leads our team with expertise and dedication.',
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet our experienced team of insurance claims professionals dedicated to serving your needs.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden max-w-md"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 