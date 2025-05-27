import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, position, image }) => {
  return (
    <div className="bg-white dark:bg-navy-800 rounded-xl p-8 shadow-md relative">
      <div className="absolute top-6 left-6 text-cyan-500 opacity-20">
        <Quote className="w-12 h-12" />
      </div>
      <div className="relative z-10">
        <p className="text-gray-700 dark:text-gray-200 mb-6 italic">"{content}"</p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={image} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-navy-900 dark:text-white">{author}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      content: "Delight's growth strategy transformed our project. We saw a 200% increase in community engagement and a significant boost in token adoption within just 3 months.",
      author: "Alex Morgan",
      position: "Founder, CryptoSync",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
      content: "Working with Delight was the best decision we made for our Web3 project. Their strategic approach to community building and genuine understanding of the space is unmatched.",
      author: "Sarah Chen",
      position: "CEO, HoppyCoin",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    },
    {
      content: "The organic growth we've experienced since working with Delight has been remarkable. They truly understand how to create authentic connections in the Web3 space.",
      author: "Michael Rodriguez",
      position: "Marketing Director, ReelBro",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-navy-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">What Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from Web3 founders and teams who have experienced remarkable growth with our strategies.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="transition-all duration-500 transform">
              <Testimonial 
                content={testimonials[currentIndex].content}
                author={testimonials[currentIndex].author}
                position={testimonials[currentIndex].position}
                image={testimonials[currentIndex].image}
              />
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-navy-800 shadow-sm hover:shadow-md transition-all text-navy-900 dark:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-navy-800 shadow-sm hover:shadow-md transition-all text-navy-900 dark:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;