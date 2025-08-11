import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Template } from '../types';
import { templates } from '../data/templates';
import TemplateCard from './TemplateCard';

const TemplateGallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['Tous', ...Array.from(new Set(templates.map(t => t.category)))];
  
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Tous' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTemplateClick = (template: Template) => {
    console.log('Selected template:', template);
    // Navigate to editor with template
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              modèle parfait
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Démarrez avec l'un de nos modèles professionnels, puis personnalisez-le selon vos besoins
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un modèle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-gray-200 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Template Sections */}
        <div className="space-y-16">
          {/* New Templates */}
          {filteredTemplates.some(t => t.is_new) && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  Nouveau
                </span>
                Derniers modèles
              </h3>
              <div className={`grid gap-6 ${
                viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
              }`}>
                {filteredTemplates
                  .filter(template => template.is_new)
                  .map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <TemplateCard template={template} onClick={handleTemplateClick} />
                    </motion.div>
                  ))}
              </div>
            </div>
          )}

          {/* Popular Templates */}
          {filteredTemplates.some(t => t.is_popular) && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  Populaire
                </span>
                Les plus utilisés
              </h3>
              <div className={`grid gap-6 ${
                viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
              }`}>
                {filteredTemplates
                  .filter(template => template.is_popular)
                  .map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <TemplateCard template={template} onClick={handleTemplateClick} />
                    </motion.div>
                  ))}
              </div>
            </div>
          )}

          {/* All Templates */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Tous les modèles
            </h3>
            <div className={`grid gap-6 ${
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            }`}>
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TemplateCard template={template} onClick={handleTemplateClick} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucun modèle trouvé
            </h3>
            <p className="text-gray-500">
              Essayez d'ajuster vos filtres ou votre recherche
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TemplateGallery;