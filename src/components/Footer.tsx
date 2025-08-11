import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AIBuilder
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Créez des applications web professionnelles en quelques minutes grâce à l'IA et à notre éditeur visuel intuitif.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@aibuilder.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Produit</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-gray-400 hover:text-white transition-colors">
                  Modèles
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-400 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="text-gray-400 hover:text-white transition-colors">
                  Nouveautés
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white transition-colors">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">
                  Tutoriels
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-gray-400 hover:text-white transition-colors">
                  Statut du service
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Légal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-white transition-colors">
                  Sécurité
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-400 hover:text-white transition-colors">
                  Conformité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} AIBuilder. Fait avec</span>
              <Heart className="w-4 h-4 text-red-500 mx-2 fill-current" />
              <span>en France</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Plan du site
              </Link>
              <Link to="/api" className="hover:text-white transition-colors">
                API
              </Link>
              <Link to="/partners" className="hover:text-white transition-colors">
                Partenaires
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;