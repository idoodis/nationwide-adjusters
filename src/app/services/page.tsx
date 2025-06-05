'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ClipboardDocumentCheckIcon, DocumentTextIcon, CurrencyDollarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

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
    description: 'Expert handling of home insurance claims for water damage, fire, theft, and more.',
    imageUrl: '/residential claims.png',
  },
  {
    name: 'Commercial Claims',
    description: 'Comprehensive commercial property damage assessment and claims management.',
    imageUrl: '/commercial claims.png',
  },
  {
    name: 'Catastrophe Claims',
    description: 'Rapid response and expert handling of large-scale disaster claims.',
    imageUrl: '/catastrophe claims.png',
  },
]

const process = [
  {
    title: 'Initial Assessment',
    description: 'We evaluate your claim and develop a strategy to maximize your settlement.',
    icon: <ClipboardDocumentCheckIcon className="h-12 w-12" />
  },
  {
    title: 'Documentation',
    description: 'We gather and prepare all necessary documentation to support your claim.',
    icon: <DocumentTextIcon className="h-12 w-12" />
  },
  {
    title: 'Negotiation',
    description: 'Our experts negotiate with your insurance company on your behalf.',
    icon: <CurrencyDollarIcon className="h-12 w-12" />
  },
  {
    title: 'Settlement',
    description: 'We ensure you receive the maximum settlement you deserve.',
    icon: <CheckCircleIcon className="h-12 w-12" />
  }
]

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive insurance claims adjusting services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What We Do</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Expert handling of all types of property damage claims
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Process</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              How we help you maximize your insurance claim
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
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