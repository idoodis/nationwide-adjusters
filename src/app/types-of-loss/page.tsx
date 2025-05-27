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

const lossTypes = [
  {
    name: 'Fire Damage',
    description: 'Comprehensive handling of fire damage claims, including structural damage, smoke damage, and personal property loss.',
    imageUrl: '/loss-types/fire.jpg',
    details: [
      'Structural damage assessment',
      'Smoke and soot damage evaluation',
      'Personal property inventory',
      'Temporary housing coordination',
      'Restoration planning',
    ],
  },
  {
    name: 'Water Damage',
    description: 'Expert handling of water damage claims, from burst pipes to flood damage.',
    imageUrl: '/loss-types/water.jpg',
    details: [
      'Water source identification',
      'Mold assessment and remediation',
      'Structural drying evaluation',
      'Flooring and wall damage',
      'Content restoration',
    ],
  },
  {
    name: 'Wind & Hail',
    description: 'Professional assessment of wind and hail damage claims for residential and commercial properties.',
    imageUrl: '/loss-types/wind.jpg',
    details: [
      'Roof damage assessment',
      'Siding and exterior damage',
      'Window and door damage',
      'Debris removal coordination',
      'Emergency repairs',
    ],
  },
  {
    name: 'Theft & Vandalism',
    description: 'Thorough handling of theft and vandalism claims, including property damage and stolen items.',
    imageUrl: '/loss-types/theft.jpg',
    details: [
      'Property damage assessment',
      'Stolen item documentation',
      'Security system evaluation',
      'Police report coordination',
      'Replacement cost analysis',
    ],
  },
  {
    name: 'Business Interruption',
    description: 'Comprehensive handling of business interruption claims, ensuring compensation for lost income and expenses.',
    imageUrl: '/loss-types/business.jpg',
    details: [
      'Lost income calculation',
      'Extra expense documentation',
      'Business records analysis',
      'Market impact assessment',
      'Recovery timeline planning',
    ],
  },
  {
    name: 'Natural Disasters',
    description: 'Expert handling of claims resulting from natural disasters such as hurricanes, earthquakes, and tornadoes.',
    imageUrl: '/loss-types/natural.jpg',
    details: [
      'Large-scale damage assessment',
      'Emergency response coordination',
      'Multiple property handling',
      'Government assistance coordination',
      'Long-term recovery planning',
    ],
  },
]

export default function TypesOfLoss() {
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
            Types of Loss We Handle
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Our experienced team handles all types of insurance claims with expertise and dedication
          </motion.p>
        </motion.div>
      </section>

      {/* Loss Types Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {lossTypes.map((loss) => (
              <motion.div
                key={loss.name}
                variants={fadeIn}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={loss.imageUrl}
                    alt={loss.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{loss.name}</h3>
                  <p className="text-gray-600 mb-6">{loss.description}</p>
                  <ul className="space-y-3">
                    {loss.details.map((detail) => (
                      <li key={detail} className="flex items-center text-gray-600">
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
                        {detail}
                      </li>
                    ))}
                  </ul>
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
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 