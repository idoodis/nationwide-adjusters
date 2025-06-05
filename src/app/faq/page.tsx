'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

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
    answer: 'A public adjuster is a licensed professional who advocates for policyholders in the preparation, filing, and negotiation of insurance claims. We work exclusively for you, not the insurance company, to ensure you receive the maximum settlement you deserve.'
  },
  {
    question: 'Why should I hire a public adjuster?',
    answer: 'Hiring a public adjuster can significantly increase your insurance settlement. We have the expertise to properly document and value your damages, negotiate with your insurance company, and ensure you receive the full benefits of your policy.'
  },
  {
    question: 'How much does it cost to hire a public adjuster?',
    answer: 'We work on a contingency fee basis, meaning we only get paid if you receive a settlement. Our fee is a percentage of the settlement amount, and we don\'t charge any upfront fees or costs.'
  },
  {
    question: 'What types of claims do you handle?',
    answer: 'We handle all types of property damage claims, including fire, water damage, wind damage, hail, theft, vandalism, and more. We work with both residential and commercial properties.'
  },
  {
    question: 'How long does the claims process take?',
    answer: 'The duration of the claims process varies depending on the complexity of the damage and the insurance company\'s response time. We work diligently to expedite the process while ensuring you receive the maximum settlement.'
  },
  {
    question: 'When should I hire a public adjuster?',
    answer: 'It\'s best to hire a public adjuster as soon as possible after a loss occurs. This allows us to document the damage, review your policy, and begin working on your claim immediately. However, we can also help if you\'ve already filed a claim and are dissatisfied with the settlement offer.',
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
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const toggleFaq = (question: string) => {
    setOpenFaq(openFaq === question ? null : question)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about insurance claims and our services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.question)}
                    className="w-full px-6 py-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon
                        className={`h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${
                          openFaq === faq.question ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={`px-6 pb-4 transition-all duration-200 ${
                      openFaq === faq.question ? 'block' : 'hidden'
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for personalized assistance
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 