import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Residential Claims',
    description: 'Expert handling of residential property damage claims, ensuring you receive the maximum settlement you deserve.',
    image: '/residential claims.png',
    link: '/services/residential',
  },
  {
    title: 'Commercial Claims',
    description: 'Comprehensive commercial property damage assessment and claims management for businesses of all sizes.',
    image: '/commercial claims.png',
    link: '/services/commercial',
  },
  {
    title: 'Catastrophe Claims',
    description: 'Rapid response and expert handling of large-scale disaster claims, from natural disasters to major incidents.',
    image: '/catastrophe claims.png',
    link: '/services/catastrophe',
  },
  {
    title: 'Claim Review',
    description: 'Thorough review of existing claims to ensure you receive the full settlement you are entitled to.',
    image: '/Fire damage.png',
    link: '/services/claim-review',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive insurance claims adjusting services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-32 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block bg-blue-600 text-white px-3 py-1.5 text-sm rounded hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 