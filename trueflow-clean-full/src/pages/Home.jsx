import { useState } from 'react';
import {
  Droplets, Sun, CheckCircle, Star, Sparkles, Shield, Award, Clock, DollarSign, Leaf,
  Phone, Mail, MapPin, ChevronLeft, ChevronRight, Users, TrendingUp
} from 'lucide-react';

import SqueegeeCTAButton from '../components/SqueegeeCTAButton';
import TrustBadge from '../components/TrustBadge';
import BenefitCard from '../components/BenefitCard';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import FloatingContactBubble from '../components/FloatingContactBubble';

export default function Home() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const beforeAfterGallery = [
    {
      before: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      after: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
      title: "Residential Windows",
      description: "Complete interior and exterior transformation"
    },
    {
      before: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
      after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      title: "Commercial Building",
      description: "High-rise office building restoration"
    },
    {
      before: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      after: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      title: "Solar Panels",
      description: "Efficiency restored to peak performance"
    }
  ];

  const faqs = [
    {
      question: "Do you provide your own equipment and cleaning supplies?",
      answer: "Yes! We bring all professional-grade equipment and eco-friendly cleaning solutions. You don't need to provide anything."
    },
    {
      question: "Are you insured and bonded?",
      answer: "Absolutely. We carry full liability insurance and are bonded for your peace of mind and property protection."
    },
    {
      question: "How long does a typical window cleaning take?",
      answer: "Most residential homes take 2-4 hours depending on size and number of windows. We'll provide an accurate estimate during your free quote."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with any aspect of our work, we'll return and make it right at no additional cost."
    },
    {
      question: "Do you clean windows in winter?",
      answer: "Yes! We offer year-round service. We use professional solutions that work effectively in cold weather conditions."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit cards, debit cards, and e-transfer for your convenience. Payment is due upon completion of service."
    }
  ];

  const services = [
    {
      title: "Window Cleaning",
      description: "Crystal clear windows that let the light shine through",
      icon: <Sparkles className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
    },
    {
      title: "Solar Panel Cleaning",
      description: "Maximize efficiency with professionally cleaned panels",
      icon: <Sun className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
    }
  ];

  const packages = [
    {
      name: "Basic Clean",
      price: "$149",
      benefits: [
        "Exterior window cleaning",
        "Screen cleaning included",
        "Streak-free guarantee",
        "Basic touch-up service"
      ]
    },
    {
      name: "Premium Clean",
      price: "$299",
      benefits: [
        "Interior & exterior cleaning",
        "Track & sill detail work",
        "Screen cleaning & repair",
        "Hard water stain removal",
        "90-day warranty"
      ],
      featured: true
    },
    {
      name: "Complete Care",
      price: "$449",
      benefits: [
        "Full interior & exterior",
        "Solar panel cleaning",
        "Gutter debris removal",
        "Window track restoration",
        "Seasonal maintenance plan",
        "180-day warranty"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Inspection & Preparation",
      description: "We assess your windows and prepare the area with protective coverings to ensure a clean, safe process."
    },
    {
      number: "02",
      title: "Deep Clean Solution",
      description: "Professional-grade cleaning solution is applied to break down dirt, grime, and hard water deposits."
    },
    {
      number: "03",
      title: "Squeegee Technique",
      description: "Our expert technicians use precision squeegee methods for a completely streak-free finish."
    },
    {
      number: "04",
      title: "Detail & Inspection",
      description: "Final touch-ups, frame wiping, and quality inspection ensure perfection before we leave."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 text-center">
        <p className="text-sm md:text-base font-semibold">
          🎉 Limited Time Offer: Get $25 OFF Your First Service! Book Before Jan 31st
        </p>
      </div>

      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-slate-800">TrueFlow Cleaning</span>
          </div>
          <div className="hidden md:flex gap-8 text-slate-600 font-medium">
            <a href="#services" className="hover:text-orange-500 transition">Services</a>
            <a href="#packages" className="hover:text-orange-500 transition">Packages</a>
            <a href="#process" className="hover:text-orange-500 transition">Our Process</a>
            <a href="#about" className="hover:text-orange-500 transition">About</a>
          </div>
        </div>
      </nav>

      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1600&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crystal Clear Views,<br />
            <span className="text-orange-500">Every Time</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Professional window and solar panel cleaning services that bring the sunshine back into your home
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <SqueegeeCTAButton primary>Book a Service</SqueegeeCTAButton>
            <SqueegeeCTAButton>Get Free Quote</SqueegeeCTAButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <TrustBadge icon={<Shield className="w-8 h-8" />} text="Fully Insured & Bonded" />
            <TrustBadge icon={<Award className="w-8 h-8" />} text="10+ Years Experience" />
            <TrustBadge icon={<Clock className="w-8 h-8" />} text="Same-Day Quotes" />
            <TrustBadge icon={<DollarSign className="w-8 h-8" />} text="No Hidden Fees" />
            <TrustBadge icon={<Leaf className="w-8 h-8" />} text="Eco-Friendly Solutions" />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose TrueFlow?</h2>
            <p className="text-xl text-slate-600">The benefits that set us apart</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard icon={<Leaf className="w-12 h-12" />} title="Eco-Friendly & Pet-Safe"
              description="We use only environmentally safe, biodegradable cleaning solutions that are completely safe for your family and pets." />
            <BenefitCard icon={<Shield className="w-12 h-12" />} title="100% Satisfaction Guarantee"
              description="If you're not completely satisfied with our work, we'll return and make it right at no additional cost to you." />
            <BenefitCard icon={<Clock className="w-12 h-12" />} title="Flexible Scheduling"
              description="We work around your schedule with convenient booking times, including evenings and weekends." />
            <BenefitCard icon={<Users className="w-12 h-12" />} title="Trained Professionals"
              description="Our fully trained and certified technicians treat your property with the utmost care and respect." />
            <BenefitCard icon={<TrendingUp className="w-12 h-12" />} title="Advanced Equipment"
              description="We use state-of-the-art tools and techniques to deliver streak-free, crystal-clear results every time." />
            <BenefitCard icon={<DollarSign className="w-12 h-12" />} title="Transparent Pricing"
              description="No hidden fees or surprise charges. You'll know exactly what you're paying before we start." />
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600">Professional cleaning solutions for your property</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => <ServiceCard key={idx} service={service} />)}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See The Difference</h2>
            <p className="text-xl text-slate-300">Real results from real customers</p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={beforeAfterGallery[currentGalleryImage].before} alt="Before cleaning" className="w-full h-96 object-cover" />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">BEFORE</div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={beforeAfterGallery[currentGalleryImage].after} alt="After cleaning" className="w-full h-96 object-cover" />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold">AFTER</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{beforeAfterGallery[currentGalleryImage].title}</h3>
              <p className="text-slate-300 text-lg">{beforeAfterGallery[currentGalleryImage].description}</p>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentGalleryImage(prev => prev === 0 ? beforeAfterGallery.length - 1 : prev - 1)}
                className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex gap-2">
                {beforeAfterGallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentGalleryImage(idx)}
                    className={`w-3 h-3 rounded-full transition ${idx === currentGalleryImage ? 'bg-orange-500' : 'bg-slate-600'}`}
                    aria-label={`Gallery ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentGalleryImage(prev => prev === beforeAfterGallery.length - 1 ? 0 : prev + 1)}
                className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Service Packages</h2>
            <p className="text-xl text-slate-600">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => <PackageCard key={idx} package={pkg} />)}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 bg-gradient-to-br from-orange-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our 4-Stage Process</h2>
            <p className="text-xl text-slate-600">How we deliver streak-free perfection</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProcess(idx)}
                className={`p-6 rounded-xl transition-all ${activeProcess === idx ? 'bg-orange-500 text-white shadow-xl scale-105' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
              >
                <div className="text-3xl font-bold mb-2">{step.number}</div>
                <div className="font-semibold">{step.title}</div>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{processSteps[activeProcess].title}</h3>
            <p className="text-lg text-slate-600 leading-relaxed">{processSteps[activeProcess].description}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-lg text-slate-800">{faq.question}</span>
                  <span className={`text-orange-500 text-2xl transition-transform ${activeFaq === idx ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 py-4 bg-slate-50 text-slate-600 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">About TrueFlow Cleaning</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            With over a decade of experience in professional window cleaning, TrueFlow Cleaning has become the trusted name for residential and commercial properties across the region.
          </p>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We use eco-friendly cleaning solutions, state-of-the-art equipment, and proven techniques to deliver results that exceed expectations.
          </p>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-sm">© 2026 TrueFlow Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <FloatingContactBubble />
    </div>
  );
}
