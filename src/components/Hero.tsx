import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate(`/create?prompt=${encodeURIComponent(prompt)}`);
    }
  };

  const examplePrompts = [
    "Crée-moi un site e-commerce pour vendre des vêtements",
    "Une landing page pour mon application SaaS",
    "Un portfolio pour designer graphique",
    "Un blog de voyage avec galerie photos"
  ];

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">Propulsé par l'IA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Créez votre{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                application web
              </span>{' '}
              en quelques minutes
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Notre IA génère du code de qualité professionnelle. Personnalisez avec notre éditeur visuel.
              Déployez en un clic. Aucune compétence technique requise.
            </p>
          </motion.div>

          {/* Prompt Input */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="mb-8"
          >
            <div className="relative max-w-3xl mx-auto">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Décrivez votre projet en quelques mots..."
                className="w-full px-6 py-4 pr-32 text-lg rounded-2xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 bg-white/80 backdrop-blur-sm shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
              >
                <Zap className="w-4 h-4" />
                <span className="font-medium">Générer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.form>

          {/* Example Prompts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-sm text-gray-500 mb-4">Exemples d'idées :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(example)}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
                >
                  "{example}"
                </button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">10k+</div>
              <div className="text-sm text-gray-600">Projets générés</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">5min</div>
              <div className="text-sm text-gray-600">Temps moyen</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg mb-3">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;