'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const services = [
  {
    name: 'Residential Claims',
    description: 'Expert handling of home insurance claims for fire, water, wind, and other damages.',
    features: [
      'Thorough damage assessment',
      'Detailed documentation',
      'Negotiation with insurance companies',
      'Maximized settlement amounts',
    ],
    imageUrl: '/services/residential.jpg',
    link: '/services/residential',
  },
  {
    name: 'Commercial Claims',
    description: 'Comprehensive commercial property damage assessment and claim management.',
    features: [
      'Business interruption claims',
      'Inventory loss evaluation',
      'Equipment damage assessment',
      'Loss of income analysis',
    ],
    imageUrl: '/services/commercial.jpg',
    link: '/services/commercial',
  },
  {
    name: 'Catastrophe Adjusting',
    description: 'Rapid response and expert handling of large-scale disaster claims.',
    features: [
      '24/7 emergency response',
      'Large-scale damage assessment',
      'Multi-property claims handling',
      'Disaster recovery coordination',
    ],
    imageUrl: '/services/catastrophe.jpg',
    link: '/services/catastrophe',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive insurance claims adjusting services tailored to your needs
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={fadeIn}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-blue-600 mr-3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Help With Your Claim?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you navigate the claims process and maximize your settlement.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 