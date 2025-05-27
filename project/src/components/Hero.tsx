import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-navy-950 dark:to-navy-900"
    >
      {/* Background gradient circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block py-1 px-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
              <p className="text-sm font-medium text-cyan-800 dark:text-cyan-400">WEB3 GROWTH STRATEGIST</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white leading-tight animate-fade-in">
              Drive Organic <span className="text-gradient">Growth</span> & <span className="text-gradient">Adoption</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Strategic support for Web3 projects looking to expand their audience, 
              increase token adoption, and build sustainable growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-navy-900 dark:bg-navy-800 rounded-3xl overflow-hidden border-2 border-white/10 shadow-xl">
              <div className="h-1/2 bg-navy-800 dark:bg-navy-700 flex items-center justify-center">
                <h2 className="text-6xl font-bold text-white tracking-wider animate-pulse-slow">DELIGHT</h2>
              </div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-navy-800 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="h-1/2 pt-24 px-6 flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-white">Delight</h3>
                  <span className="text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <p className="text-sm text-gray-300 mt-2 text-center">
                  Driving organic growth and token adoption for leading Web3 projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;