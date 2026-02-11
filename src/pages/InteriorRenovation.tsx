import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bath, Ruler, PaintBucket, CheckCircle2 } from 'lucide-react';

export default function InteriorRenovation() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    {/* Using Egress window image as fallback for interior context, blurred for background */}
                    <img
                        src="/images/Egress window installation And After.jpg"
                        alt="Interior Renovation"
                        className="w-full h-full object-cover opacity-20 blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/80 to-blue-900/40" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            Interior Renovation & Remodeling
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-300 mb-8 leading-relaxed"
                        >
                            Maximize your home's potential. We specialize in functional basement finishing, modern bathroom updates, and creating spaces that work for your family.
                        </motion.p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Solutions for Every Room</h2>
                            <div className="prose prose-lg text-gray-600 mb-8">
                                <p>
                                    Renovating isn't just about changing colors; it's about improving how you live. We focus on practical, high-impact renovations that add real value and comfort to your home.
                                </p>
                                <p>
                                    From turning a cold, unfinished basement into a cozy family room or rental suite, to updating an outdated bathroom with modern fixtures and waterproofing, we handle the details so you don't have to. We work cleanly, respecting your home and minimizing dust and disruption.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                                            <Bath className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Bathroom Renovations</h3>
                                        <p className="mt-2 text-gray-600">
                                            Full gut and remodel or cosmetic updates. We specialize in space-efficient designs for standard 40sqft bathrooms, ensuring you get the most out of every inch.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                                            <Ruler className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Basement Finishing</h3>
                                        <p className="mt-2 text-gray-600">
                                            Transform wasted storage space into living space. We handle framing, drywall, flooring, and lighting to create warm, inviting basements.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                                            <PaintBucket className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Egress Windows</h3>
                                        <p className="mt-2 text-gray-600">
                                            Adding a bedroom to your basement? We professionally install code-compliant egress windows, adding safety and natural light to your lower level.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Special Rates for standard bathroom layouts",
                                    "Clean workspace policy - we use dust control",
                                    "Licensed & Insured for all structural work",
                                    "Clear timelines and communication",
                                    "Quality materials that fit your budget"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                        <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 relative overflow-hidden rounded-xl h-64 shadow-lg">
                                <img
                                    src="/images/Egress window installation Before.jpg"
                                    alt="Before Renovation"
                                    className="absolute left-0 top-0 w-1/2 h-full object-cover"
                                />
                                <img
                                    src="/images/Egress window installation And After.jpg"
                                    alt="After Renovation"
                                    className="absolute right-0 top-0 w-1/2 h-full object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-xs py-1 text-center font-mono">
                                    BEFORE // AFTER
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Discuss Your Renovation</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Whether it's a single bathroom or a basement suite, we bring experience and integrity to every job.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
                        >
                            Get a Free Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
