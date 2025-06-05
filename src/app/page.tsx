'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheckIcon, CurrencyDollarIcon, UserGroupIcon, MapIcon } from "@heroicons/react/24/outline";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Expert Insurance Claims Adjusters
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We help policyholders maximize their insurance claims for residential, commercial, and catastrophe losses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Get Help Now
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Comprehensive claims adjusting services for all types of property damage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Experience the difference of working with professional public adjusters
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation
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
  );
}

const services = [
  {
    title: "Residential Claims",
    description: "Expert handling of home insurance claims for water damage, fire, theft, and more.",
    image: "/residential claims.png"
  },
  {
    title: "Commercial Claims",
    description: "Comprehensive commercial property damage assessment and claims management.",
    image: "/commercial claims.png"
  },
  {
    title: "Catastrophe Claims",
    description: "Rapid response and expert handling of large-scale disaster claims.",
    image: "/catastrophe claims.png"
  }
];

const features = [
  {
    title: "Expert Knowledge",
    description: "Licensed public adjusters with extensive industry experience",
    icon: <ShieldCheckIcon className="h-12 w-12" />
  },
  {
    title: "Maximum Settlement",
    description: "We fight to ensure you receive the full value of your claim",
    icon: <CurrencyDollarIcon className="h-12 w-12" />
  },
  {
    title: "Personal Service",
    description: "Dedicated adjuster assigned to your case from start to finish",
    icon: <UserGroupIcon className="h-12 w-12" />
  },
  {
    title: "Nationwide Coverage",
    description: "Available to assist with claims across the United States",
    icon: <MapIcon className="h-12 w-12" />
  }
];
