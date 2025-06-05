'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

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
    imageUrl: '/Fire damage.png',
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
    imageUrl: '/Water Damage.png',
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
    imageUrl: '/Wind and Hail.png',
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
    imageUrl: '/Theft and Vandalism.png',
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
    imageUrl: '/Business interruption.png',
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
    imageUrl: '/Natural Disasters.png',
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
      <section className="relative bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Types of Loss We Handle
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert handling of all types of property damage claims
            </p>
          </div>
        </div>
      </section>

      {/* Loss Types Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lossTypes.map((loss) => (
              <div key={loss.name} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={loss.imageUrl}
                    alt={loss.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{loss.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{loss.description}</p>
                  <ul className="space-y-2">
                    {loss.details.map((detail) => (
                      <li key={detail} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help With Your Claim?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 