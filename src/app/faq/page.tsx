'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

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

const faqs = [
  {
    question: 'What is a public adjuster?',
    answer: 'A public adjuster is a licensed professional who works on behalf of policyholders to help them navigate the insurance claims process and maximize their settlement. Unlike insurance company adjusters, public adjusters work exclusively for the policyholder.',
  },
  {
    question: 'How much does it cost to hire a public adjuster?',
    answer: 'Public adjusters work on a contingency fee basis, typically charging a percentage of the final settlement amount. This means you only pay if we successfully increase your settlement. We offer a free initial consultation to evaluate your claim.',
  },
  {
    question: 'When should I hire a public adjuster?',
    answer: 'It\'s best to hire a public adjuster as soon as possible after a loss occurs. This allows us to document the damage, review your policy, and begin working on your claim immediately. However, we can also help if you\'ve already filed a claim and are dissatisfied with the settlement offer.',
  },
  {
    question: 'What types of claims do you handle?',
    answer: 'We handle all types of insurance claims, including fire damage, water damage, wind and hail damage, theft and vandalism, business interruption, and natural disasters. Our team has experience with both residential and commercial claims.',
  },
  {
    question: 'How long does the claims process take?',
    answer: 'The duration of the claims process varies depending on the complexity of the claim, the type of damage, and the insurance company\'s response time. We work efficiently to resolve claims as quickly as possible while ensuring you receive the maximum settlement you deserve.',
  },
  {
    question: 'Can I still hire a public adjuster if I\'ve already filed a claim?',
    answer: 'Yes, you can hire a public adjuster at any point in the claims process. Even if you\'ve already filed a claim or received a settlement offer, we can review your case and help you get a better settlement if you\'re entitled to more.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide services nationwide, helping policyholders across the United States with their insurance claims. Our team is licensed and experienced in handling claims in multiple states.',
  },
  {
    question: 'What makes Nationwide Adjusters different?',
    answer: 'We stand out for our extensive experience, client-focused approach, and commitment to maximizing settlements. Our team includes licensed professionals with decades of combined experience, and we use advanced technology to document and process claims efficiently.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services and the claims process
          </motion.p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-blue-600 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Our team is ready to answer any questions you may have.
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