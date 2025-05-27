import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ name, image, description, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-navy-800 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-medium hover:text-cyan-700 dark:hover:text-cyan-300"
        >
          View Project
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      name: "@FDFT_tarot",
      image: "https://images.pexels.com/photos/7194439/pexels-photo-7194439.jpeg",
      description: "Driving organic growth and community engagement for this Web3 tarot platform.",
      link: "#"
    },
    {
      name: "@Cryptsync_io",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
      description: "Strategic marketing and token adoption campaign for this crypto syncing service.",
      link: "#"
    },
    {
      name: "@ReelBro_25",
      image: "https://images.pexels.com/photos/8358575/pexels-photo-8358575.jpeg",
      description: "Growth strategy implementation resulting in 150% increase in user acquisition.",
      link: "#"
    },
    {
      name: "@HoppyCoin_x",
      image: "https://images.pexels.com/photos/8369590/pexels-photo-8369590.jpeg",
      description: "Community building and token marketing for this emerging cryptocurrency.",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-navy-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing successful Web3 growth strategies and token adoption campaigns for leading projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
              key={index}
              name={item.name}
              image={item.image}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;