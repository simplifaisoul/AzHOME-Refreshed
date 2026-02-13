import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Hammer,
  Construction,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConcreteCutting() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Slab & Wall Cutting",
      description: "Accurate horizontal and vertical cuts for door/window openings, expansion joints, trenching, and structural alterations. Our methods reduce vibration and overcutting.",
      points: [
        "Door and window openings",
        "Expansion joints",
        "Trenching for utilities",
        "Structural alterations"
      ]
    },
    {
      title: "Concrete Coring (Core Drilling)",
      description: "Perfectly round, clean holes ideal for plumbing, electrical, HVAC, anchoring, and ventilation. Available in a wide range of diameters and depths.",
      points: [
        "Plumbing and pipe penetrations",
        "Electrical and HVAC installations",
        "Anchoring and doweling",
        "Ventilation openings"
      ]
    },
    {
      title: "Saw Cutting",
      description: "Precision flat and wall saw cutting for floors, slabs, pavements, walls, and foundations. Suitable for both interior and exterior applications.",
      points: [
        "Floors, slabs, and pavements",
        "Walls and foundations",
        "Interior and exterior applications"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/concrete-cutting-3.jpg"
            alt="Concrete Cutting Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Concrete Cutting & Coring Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Precision Concrete Cutting You Can Rely On for residential, commercial, and industrial projects.
            </motion.p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Precision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide professional concrete cutting and coring services for residential, commercial, and industrial projects.
              Whether you need clean openings for plumbing and electrical, controlled slab removal, or structural modifications,
              our experienced team delivers precise results with minimal disruption. Using modern, high-performance equipment,
              we cut through reinforced concrete, asphalt, masonry, and stone safely and efficiently—no guesswork, no unnecessary damage.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  {index === 0 ? <Construction className="h-6 w-6 text-blue-600" /> :
                    index === 1 ? <Hammer className="h-6 w-6 text-blue-600" /> :
                      <Wrench className="h-6 w-6 text-blue-600" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Image Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-xl overflow-hidden shadow-lg h-80">
              <img
                src="/images/concrete-cutting-4.jpg"
                alt="Concrete Coring"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-80 bg-gray-100">
              <img
                src="/images/concrete-cutting-equipment.jpg"
                alt="Precision Cutting"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for professional concrete cutting and coring services.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
