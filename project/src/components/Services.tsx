import React from 'react';
import { TrendingUp, Users, Megaphone, BarChart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-navy-800/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-navy-700 group hover:border-cyan-200 dark:hover:border-cyan-900">
      <div className="w-14 h-14 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Growth Strategy",
      description: "Custom growth strategies tailored to your Web3 project's specific goals, target audience, and market position."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Community Building",
      description: "Develop and nurture engaged communities around your project with authentic relationship building and value creation."
    },
    {
      icon: <Megaphone className="w-7 h-7" />,
      title: "Token Marketing",
      description: "Strategic marketing approaches to increase token adoption, awareness, and utility within your ecosystem."
    },
    {
      icon: <BarChart className="w-7 h-7" />,
      title: "Analytics & Optimization",
      description: "Data-driven insights and continuous optimization to maximize ROI and sustainable growth metrics."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-navy-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Strategic support to help your Web3 project reach its full potential through organic growth and genuine community engagement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;