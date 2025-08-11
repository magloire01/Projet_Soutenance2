import React from 'react';
import { motion } from 'framer-motion';
import { Plus, FolderOpen, Star, Calendar, Users, BarChart3, Settings, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const recentProjects = [
    {
      id: 1,
      name: 'E-commerce Fashion',
      template: 'E-commerce Store',
      lastEdited: '2024-01-15',
      status: 'published',
      views: 1250
    },
    {
      id: 2,
      name: 'Mon Portfolio',
      template: 'Portfolio Créatif',
      lastEdited: '2024-01-14',
      status: 'draft',
      views: 0
    },
    {
      id: 3,
      name: 'SaaS Landing',
      template: 'SaaS Landing Page',
      lastEdited: '2024-01-12',
      status: 'published',
      views: 890
    }
  ];

  const stats = [
    {
      icon: FolderOpen,
      label: 'Projets créés',
      value: '3',
      change: '+1',
      color: 'blue'
    },
    {
      icon: BarChart3,
      label: 'Vues totales',
      value: '2,140',
      change: '+12%',
      color: 'green'
    },
    {
      icon: Star,
      label: 'Templates utilisés',
      value: '3',
      change: '0',
      color: 'purple'
    },
    {
      icon: Users,
      label: 'Visiteurs uniques',
      value: '1,850',
      change: '+8%',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Bonjour, {user?.email?.split('@')[0] || 'Utilisateur'} 👋
            </h1>
            <p className="text-gray-600">
              Voici un aperçu de vos projets et statistiques
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      stat.change.startsWith('+') 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Projets récents</h2>
                  <Link
                    to="/projects"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Voir tout
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <FolderOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {project.template} • {project.lastEdited}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {project.status === 'published' ? 'Publié' : 'Brouillon'}
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {project.views} vues
                          </p>
                        </div>
                        <Link
                          to={`/editor/${project.id}`}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Link
                  to="/create"
                  className="mt-6 w-full flex items-center justify-center space-x-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <Plus className="w-5 h-5" />
                  <span>Nouveau projet</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <Link
                  to="/create"
                  className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <Plus className="w-5 h-5" />
                  <span>Nouveau projet</span>
                </Link>
                <Link
                  to="/templates"
                  className="w-full flex items-center space-x-3 p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Star className="w-5 h-5" />
                  <span>Parcourir les modèles</span>
                </Link>
                <Link
                  to="/settings"
                  className="w-full flex items-center space-x-3 p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span>Paramètres</span>
                </Link>
              </div>
            </motion.div>

            {/* Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Activité récente</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm text-gray-900">Projet "E-commerce Fashion" publié</p>
                    <p className="text-xs text-gray-500">Il y a 2 heures</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm text-gray-900">Template "Portfolio Créatif" utilisé</p>
                    <p className="text-xs text-gray-500">Hier</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="text-sm text-gray-900">Compte créé</p>
                    <p className="text-xs text-gray-500">Il y a 3 jours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;