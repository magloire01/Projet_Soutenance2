import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'CEO, TechStart',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Incroyable ! J\'ai créé le MVP de ma startup en moins d\'une heure. L\'IA a généré exactement ce que j\'avais en tête.',
      rating: 5
    },
    {
      id: 2,
      name: 'Thomas Martin',
      role: 'Designer Freelance',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'L\'éditeur drag & drop est fantastique. Je peux maintenant proposer des prototypes web à mes clients en plus du design.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      avatar: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Perfect pour les landing pages ! Plus besoin d\'attendre les développeurs, je crée mes pages en autonomie.',
      rating: 5
    },
    {
      id: 4,
      name: 'Pierre Lefebvre',
      role: 'Entrepreneur',
      avatar: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Le code généré est propre et professionnel. J\'ai pu le remettre à mon équipe de dev sans problème.',
      rating: 5
    },
    {
      id: 5,
      name: 'Amélie Chen',
      role: 'Product Manager',
      avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Les templates sont magnifiques et la personnalisation est intuitive. Exactement ce qu\'il nous fallait !',
      rating: 5
    },
    {
      id: 6,
      name: 'Lucas Garcia',
      role: 'Développeur',
      avatar: 'https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Même en tant que dev, j\'utilise cette plateforme pour le prototypage rapide. Un gain de temps énorme !',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                utilisateurs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi des milliers d'entrepreneurs nous font confiance pour créer leurs applications
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-8 h-8 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Projets créés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction client</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">5min</div>
                <div className="text-gray-600">Temps moyen</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support disponible</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;