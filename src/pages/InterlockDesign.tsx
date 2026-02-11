import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Layout, Home, MousePointer2 } from 'lucide-react';

export default function InterlockDesign() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/Interlock Driveway.jpg"
                        alt="Interlock Driveway Design"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            Interlock Design & Installation
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-300 mb-8 leading-relaxed"
                        >
                            Transform your outdoor space with durable, high-end interlock solutions. From driveways to patios, we build surfaces that stand the test of time.
                        </motion.p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
                        >
                            Get a Free Estimate
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Built to Last, Designed to Impress</h2>
                            <div className="prose prose-lg text-gray-600">
                                <p className="mb-6">
                                    Your driveway and walkway are the first things people see. We don't just lay stones; we engineer a foundation that resists shifting, sinking, and frost heaves. Our team focuses on proper base preparation—the most critical part of any interlock project—to ensure your investment looks perfect for years.
                                </p>
                                <p>
                                    Whether you're looking for a modern, sleek look or a traditional cobblestone feel, we help you select the right materials and patterns to complement your home's architecture.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Custom Patio Design",
                                    "Heavy-Duty Driveways",
                                    "Elegant Walkways",
                                    "Retaining Walls",
                                    "Pool Decks",
                                    "Repair & Re-leveling"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center text-gray-700 font-medium">
                                        <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                            <img
                                src="/images/Interlock patio and privacy fence.png"
                                alt="Interlock Patio with Privacy Fence"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <Layout className="h-10 w-10 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Patterns</h3>
                            <p className="text-gray-600">
                                Herringbone, basket weave, or running bond—we lay interlock in patterns that enhance structural integrity and visual appeal.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <Home className="h-10 w-10 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Curb Appeal</h3>
                            <p className="text-gray-600">
                                Boost your property value with a professionally designed entrance. A well-built driveway pays for itself in home equity.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <MousePointer2 className="h-10 w-10 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Precision Installation</h3>
                            <p className="text-gray-600">
                                We use polymer sand and high-grade edge restraints to lock everything in place, preventing weed growth and lateral movement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Highlight */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">See the difference quality craftsmanship makes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group relative overflow-hidden rounded-xl aspect-video">
                            <img
                                src="/images/Interlock Walkway.png"
                                alt="Interlock Walkway"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">Elegant Walkways</span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-xl aspect-video">
                            <img
                                src="/images/Interlock Patio.png"
                                alt="Backyard Patio"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">Custom Patios</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/gallery" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                            View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-blue-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Upgrade Your Curb Appeal?</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Contact us today for a free consultation. We'll measure your space, discuss your vision, and provide a detailed quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Get Your Quote
                        </Link>
                        <a
                            href="tel:343-558-2330"
                            className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
                        >
                            Call 343-558-2330
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
