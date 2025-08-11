import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onClick: (template: Template) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 cursor-pointer group"
      onClick={() => onClick(template)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img
          src={template.image}
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex space-x-2">
          {template.is_new && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
              Nouveau
            </span>
          )}
          {template.is_popular && (
            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center space-x-1">
              <Star className="w-3 h-3" />
              <span>Populaire</span>
            </span>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {template.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transform group-hover:opacity-100 opacity-0 transition-all duration-300"
          >
            <span>Utiliser ce modèle</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {template.name}
          </h3>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="w-3 h-3 mr-1" />
            <span>5min</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {template.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {template.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              +{template.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2">
          <span>Commencer</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default TemplateCard;