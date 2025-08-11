import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MousePointer, 
  Code, 
  Smartphone, 
  Zap, 
  Cloud, 
  Palette, 
  Shield,
  Users,
  BarChart3,
  Github,
  Download
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'IA Générative Avancée',
      description: 'Générez du code React, TypeScript et Tailwind CSS de qualité professionnelle en quelques secondes.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MousePointer,
      title: 'Éditeur Drag & Drop',
      description: 'Interface visuelle intuitive pour personnaliser votre application sans coder.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Design Responsive',
      description: 'Tous vos projets s\'adaptent automatiquement à tous les appareils et tailles d\'écran.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimisée',
      description: 'Code optimisé pour les meilleures performances et le SEO.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Cloud,
      title: 'Déploiement Instantané',
      description: 'Publiez votre application en un clic sur nos serveurs sécurisés.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Palette,
      title: 'Personnalisation Complète',
      description: 'Modifiez les couleurs, polices, espacements et styles à volonté.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Sécurité Garantie',
      description: 'Authentification sécurisée et protection des données utilisateurs.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travaillez en équipe sur vos projets en temps réel.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Intégrés',
      description: 'Suivez les performances de votre application avec des métriques détaillées.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Github,
      title: 'Export GitHub',
      description: 'Exportez votre code directement vers GitHub avec propriété complète.',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: Download,
      title: 'Téléchargement ZIP',
      description: 'Téléchargez votre projet complet pour l\'héberger où vous voulez.',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Code,
      title: 'Code Propre',
      description: 'Code généré suivant les meilleures pratiques et standards de l\'industrie.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tout ce dont vous avez besoin pour{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                réussir
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une plateforme complète qui combine la puissance de l'IA avec la simplicité d'un éditeur visuel
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à créer votre prochaine application ?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'entrepreneurs qui font confiance à notre plateforme
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Commencer gratuitement
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;