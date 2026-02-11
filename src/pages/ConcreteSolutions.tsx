import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, PenTool } from 'lucide-react';

export default function ConcreteSolutions() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/Concrete Slabs.jpg"
                        alt="Concrete Work"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            Professional Concrete Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-300 mb-8 leading-relaxed"
                        >
                            From foundations to finishes, we deliver structural integrity and aesthetic concrete work. Expert repairs, installations, and refinishing.
                        </motion.p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Request a Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Concrete Expertise</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Concrete is the backbone of your property. We ensure it's poured right, finished smoothly, and maintained to last a lifetime.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Service 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Layers className="h-7 w-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Garage Floors</h3>
                            <p className="text-gray-600 mb-6">
                                Cracked, pitted garage floor? We offer complete removal and replacement, or professional resurfacing to give you a showroom-quality finish that resists oil, salt, and tire marks.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck className="h-7 w-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Foundation Repair</h3>
                            <p className="text-gray-600 mb-6">
                                Water intrusion can damage your home's structure. We specialize in crack injection, parging, and waterproofing to keep your basement dry and your foundation solid.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <PenTool className="h-7 w-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Slabs & Walkways</h3>
                            <p className="text-gray-600 mb-6">
                                Need a pad for a hot tub, shed, or a new sidewalk? We pour perfectly leveled and reinforced concrete slabs designed to handle the load and weather conditions.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Concrete Capabilities</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Garage Floor Replacement",
                                        "Epoxy & Resurfacing",
                                        "Parging Repair",
                                        "Crack Injection",
                                        "Retaining Walls",
                                        "Concrete Steps",
                                        "Walkways & Curbs",
                                        "Shed & Hot Tub Pads"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center text-gray-700">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/images/Concrete garage floor replacement.png"
                                    alt="Garage Floor"
                                    className="rounded-xl shadow-md w-full h-48 object-cover"
                                />
                                <img
                                    src="/images/Concrete steps and landing.png"
                                    alt="Concrete Steps"
                                    className="rounded-xl shadow-md w-full h-48 object-cover"
                                />
                                <img
                                    src="/images/Concrete crack injection and waterproofing.jpg"
                                    alt="Crack Injection"
                                    className="rounded-xl shadow-md w-full h-48 object-cover"
                                />
                                <img
                                    src="/images/Concrete garage floor resurfacing.png"
                                    alt="Resurfacing"
                                    className="rounded-xl shadow-md w-full h-48 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">Need Concrete Work Done Right?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Don't settle for cracks and crumbling. Get permanent solutions from our expert team.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                        >
                            Get a Free Estimate
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
