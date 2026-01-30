import React, { useState } from 'react';
import { Droplets, Sun, CheckCircle, Star, Sparkles, Shield, Award, Clock, DollarSign, Leaf, Phone, Mail, MapPin, MessageCircle, ChevronLeft, ChevronRight, Users, TrendingUp, Calendar } from 'lucide-react';

export default function TrueFlowCleaning() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
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

  const blogPosts = [
    {
      title: "How Often Should You Clean Your Windows?",
      excerpt: "Discover the ideal window cleaning frequency for residential and commercial properties...",
      date: "January 15, 2024",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
    },
    {
      title: "5 Benefits of Regular Solar Panel Cleaning",
      excerpt: "Learn how clean solar panels can increase efficiency by up to 30% and save you money...",
      date: "January 10, 2024",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
    },
    {
      title: "Why Eco-Friendly Cleaning Solutions Matter",
      excerpt: "Understanding the impact of traditional cleaners versus eco-friendly alternatives...",
      date: "January 5, 2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
    }
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & Lead Technician",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    },
    {
      name: "Mike Chen",
      role: "Senior Technician",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&q=80"
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
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 text-center">
        <p className="text-sm md:text-base font-semibold">
          🎉 Limited Time Offer: Get $25 OFF Your First Service! Book Before Jan 31st
        </p>
      </div>

      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* Trust Badges Section */}
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

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose TrueFlow?</h2>
            <p className="text-xl text-slate-600">The benefits that set us apart</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Leaf className="w-12 h-12" />}
              title="Eco-Friendly & Pet-Safe"
              description="We use only environmentally safe, biodegradable cleaning solutions that are completely safe for your family and pets."
            />
            <BenefitCard 
              icon={<Shield className="w-12 h-12" />}
              title="100% Satisfaction Guarantee"
              description="If you're not completely satisfied with our work, we'll return and make it right at no additional cost to you."
            />
            <BenefitCard 
              icon={<Clock className="w-12 h-12" />}
              title="Flexible Scheduling"
              description="We work around your schedule with convenient booking times, including evenings and weekends."
            />
            <BenefitCard 
              icon={<Users className="w-12 h-12" />}
              title="Trained Professionals"
              description="Our fully trained and certified technicians treat your property with the utmost care and respect."
            />
            <BenefitCard 
              icon={<TrendingUp className="w-12 h-12" />}
              title="Advanced Equipment"
              description="We use state-of-the-art tools and techniques to deliver streak-free, crystal-clear results every time."
            />
            <BenefitCard 
              icon={<DollarSign className="w-12 h-12" />}
              title="Transparent Pricing"
              description="No hidden fees or surprise charges. You'll know exactly what you're paying before we start."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600">Professional cleaning solutions for your property</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See The Difference</h2>
            <p className="text-xl text-slate-300">Real results from real customers</p>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Before */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={beforeAfterGallery[currentGalleryImage].before} 
                  alt="Before cleaning"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                  BEFORE
                </div>
              </div>
              
              {/* After */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={beforeAfterGallery[currentGalleryImage].after} 
                  alt="After cleaning"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                  AFTER
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {beforeAfterGallery[currentGalleryImage].title}
              </h3>
              <p className="text-slate-300 text-lg">
                {beforeAfterGallery[currentGalleryImage].description}
              </p>
            </div>
            
            {/* Gallery Navigation */}
            <div className="flex justify-center items-center gap-4">
              <button 
                onClick={() => setCurrentGalleryImage(prev => prev === 0 ? beforeAfterGallery.length - 1 : prev - 1)}
                className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <div className="flex gap-2">
                {beforeAfterGallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentGalleryImage(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === currentGalleryImage ? 'bg-orange-500' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => setCurrentGalleryImage(prev => prev === beforeAfterGallery.length - 1 ? 0 : prev + 1)}
                className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Service Packages</h2>
            <p className="text-xl text-slate-600">Choose the perfect plan for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <PackageCard key={idx} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Get Your Free Quote</h2>
              <p className="text-xl text-slate-600">Instant estimate in 60 seconds</p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Property Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition">
                  <option>Residential Home</option>
                  <option>Commercial Building</option>
                  <option>High-Rise</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Approximate Square Footage</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition">
                  <option>Under 1,500 sq ft</option>
                  <option>1,500 - 2,500 sq ft</option>
                  <option>2,500 - 4,000 sq ft</option>
                  <option>Over 4,000 sq ft</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Windows</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition">
                  <option>1-10 windows</option>
                  <option>11-20 windows</option>
                  <option>21-30 windows</option>
                  <option>30+ windows</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Needed</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 text-orange-500 rounded" />
                    <span>Interior Windows</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 text-orange-500 rounded" />
                    <span>Exterior Windows</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 text-orange-500 rounded" />
                    <span>Solar Panels</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 text-orange-500 rounded" />
                    <span>Screens</span>
                  </label>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Details</label>
                <textarea 
                  rows="4" 
                  placeholder="Any special requirements or questions?"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg">
                  Get My Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Areas We Serve</h2>
            <p className="text-xl text-slate-600">Proudly serving communities across the region</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Placeholder for map - would be replaced with actual Google Maps embed */}
              <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
                <MapPin className="w-24 h-24 text-orange-500" />
              </div>
              <p className="text-center text-slate-600 mt-4 text-sm">
                Interactive map will be embedded here
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Service Coverage</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Downtown', 'North End', 'South Side', 'West Hills', 'East Valley', 'Suburbs', 'Lakefront', 'Mountain View'].map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-orange-50 rounded-xl">
                <h4 className="font-bold text-slate-800 mb-2">Don't See Your Area?</h4>
                <p className="text-slate-600 mb-4">
                  We're always expanding! Contact us to see if we can service your location.
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-300">Real reviews from satisfied customers</p>
          </div>
          
          <div className="bg-slate-800 rounded-2xl p-12 text-center">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <p className="text-slate-300 text-lg mb-4 italic">
              Google Reviews widget will be embedded here
            </p>
            <div className="text-orange-500 font-semibold text-xl">
              4.9 out of 5 stars from 150+ reviews
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
                className={`p-6 rounded-xl transition-all ${
                  activeProcess === idx 
                    ? 'bg-orange-500 text-white shadow-xl scale-105' 
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-3xl font-bold mb-2">{step.number}</div>
                <div className="font-semibold">{step.title}</div>
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {processSteps[activeProcess].title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {processSteps[activeProcess].description}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                  <span className={`text-orange-500 text-2xl transition-transform ${activeFaq === idx ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 py-4 bg-slate-50 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600">The professionals behind your sparkling windows</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About us section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">About TrueFlow Cleaning</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            With over a decade of experience in professional window cleaning, TrueFlow Cleaning has become the trusted name for residential and commercial properties across the region. Our commitment to excellence and attention to detail sets us apart.
          </p>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We use eco-friendly cleaning solutions, state-of-the-art equipment, and proven techniques to deliver results that exceed expectations. Our fully insured team takes pride in every job, treating your property with the care it deserves.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">5000+</div>
              <div className="text-slate-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Cleaning Tips & Resources</h2>
            <p className="text-xl text-slate-600">Expert advice from our team</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-500 transition">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <button className="text-orange-500 font-semibold hover:text-orange-600 transition">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition font-semibold">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Sparkling Clean Windows?
          </h2>
          <p className="text-xl text-slate-200 mb-12">
            Book your service today and experience the TrueFlow difference
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <SqueegeeCTAButton primary large>Schedule Service Now</SqueegeeCTAButton>
            <SqueegeeCTAButton large>Call (555) 123-4567</SqueegeeCTAButton>
          </div>
        </div>
      </section>

      {/* Floating Contact Bubble */}
      <FloatingContactBubble />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="w-6 h-6 text-orange-500" />
                <span className="text-xl font-bold text-white">TrueFlow Cleaning</span>
              </div>
              <p className="mb-4">Professional window and solar panel cleaning services you can trust.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-orange-500 transition">Our Services</a></li>
                <li><a href="#packages" className="hover:text-orange-500 transition">Pricing</a></li>
                <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition">Residential Cleaning</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Commercial Cleaning</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">High-Rise Cleaning</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Solar Panel Cleaning</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Pressure Washing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:5551234567" className="hover:text-orange-500 transition">(555) 123-4567</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:info@trueflowcleaning.com" className="hover:text-orange-500 transition">info@trueflowcleaning.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    123 Main Street<br />Your City, ST 12345
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-sm">© 2024 TrueFlow Cleaning. All rights reserved. | <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a> | <a href="#" className="hover:text-orange-500 transition">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Squeegee Effect Button Component
function SqueegeeCTAButton({ children, primary, large }) {
  return (
    <button className={`
      relative overflow-hidden group
      ${large ? 'px-10 py-5 text-xl' : 'px-8 py-4 text-lg'}
      font-semibold rounded-lg transition-all
      ${primary 
        ? 'bg-orange-500 text-white hover:bg-orange-600' 
        : 'bg-transparent border-2 border-white text-white hover:border-orange-500'
      }
    `}>
      {/* Squeegee wipe effect */}
      <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out origin-left">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></span>
      </span>
      
      {/* Streak-free shine effect */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
        <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
      </span>
      
      <span className="relative z-10 group-hover:text-slate-900 transition-colors duration-300">
        {children}
      </span>
    </button>
  );
}

// Trust Badge Component
function TrustBadge({ icon, text }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="text-orange-500">
        {icon}
      </div>
      <p className="text-sm font-semibold text-slate-700">{text}</p>
    </div>
  );
}

// Benefit Card Component
function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
      <div className="text-orange-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

// Floating Contact Bubble Component
function FloatingContactBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Contact Options Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl p-6 z-50 w-80 animate-slide-up">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
          
          <h3 className="text-xl font-bold text-slate-800 mb-4">Get in Touch</h3>
          
          <div className="space-y-3">
            <a 
              href="tel:5551234567"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition group"
            >
              <div className="bg-orange-500 p-2 rounded-full text-white group-hover:scale-110 transition">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">Call Us</div>
                <div className="text-sm text-slate-600">(555) 123-4567</div>
              </div>
            </a>
            
            <a 
              href="mailto:info@trueflowcleaning.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition group"
            >
              <div className="bg-orange-500 p-2 rounded-full text-white group-hover:scale-110 transition">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">Email Us</div>
                <div className="text-sm text-slate-600">info@trueflowcleaning.com</div>
              </div>
            </a>
            
            <button 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition group w-full"
            >
              <div className="bg-orange-500 p-2 rounded-full text-white group-hover:scale-110 transition">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-800">Live Chat</div>
                <div className="text-sm text-slate-600">We're online now!</div>
              </div>
            </button>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              Average response time: Under 5 minutes
            </p>
          </div>
        </div>
      )}
      
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white animate-pulse"></span>
      </button>
    </>
  );
}

// Service Card Component
function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl cursor-pointer h-96 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <div className={`transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-orange-500 mb-4">
            {service.icon}
          </div>
        </div>
        <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
        <p className={`text-slate-200 text-lg transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          {service.description}
        </p>
      </div>
      
      {/* Squeegee reveal effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent transform transition-transform duration-700 ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}></div>
    </div>
  );
}

// Package Card Component
function PackageCard({ package: pkg }) {
  return (
    <div className={`
      relative rounded-2xl p-8 transition-all hover:scale-105 hover:shadow-2xl
      ${pkg.featured 
        ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl scale-105' 
        : 'bg-slate-50 text-slate-800'
      }
    `}>
      {pkg.featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
      <div className="text-4xl font-bold mb-6">{pkg.price}</div>
      
      <ul className="space-y-4">
        {pkg.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle className={`w-6 h-6 flex-shrink-0 mt-0.5 ${pkg.featured ? 'text-white' : 'text-orange-500'}`} />
            <span className="text-lg">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <button className={`
        w-full mt-8 py-4 rounded-lg font-semibold text-lg transition-all
        ${pkg.featured 
          ? 'bg-white text-orange-500 hover:bg-slate-100' 
          : 'bg-orange-500 text-white hover:bg-orange-600'
        }
      `}>
        Choose Plan
      </button>
    </div>
  );
}



