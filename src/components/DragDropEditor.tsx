import React, { useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { motion } from 'framer-motion';
import { 
  Type, 
  Image, 
  Square, 
  MousePointer, 
  Video, 
  Layout,
  Plus,
  Settings,
  Eye,
  Smartphone,
  Tablet,
  Monitor
} from 'lucide-react';
import { DragBlock } from '../types';

const DragDropEditor: React.FC = () => {
  const [blocks, setBlocks] = useState<DragBlock[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  const sensors = useSensors(useSensor(PointerSensor));

  const blockTypes = [
    { id: 'text', icon: Type, label: 'Texte', color: 'blue' },
    { id: 'image', icon: Image, label: 'Image', color: 'green' },
    { id: 'button', icon: Square, label: 'Bouton', color: 'purple' },
    { id: 'form', icon: MousePointer, label: 'Formulaire', color: 'orange' },
    { id: 'video', icon: Video, label: 'Vidéo', color: 'red' },
    { id: 'section', icon: Layout, label: 'Section', color: 'indigo' },
  ];

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) return;

    if (active.id !== over.id) {
      const activeIndex = blocks.findIndex((block) => block.id === active.id);
      const overIndex = blocks.findIndex((block) => block.id === over.id);
      
      if (activeIndex !== -1 && overIndex !== -1) {
        setBlocks((blocks) => arrayMove(blocks, activeIndex, overIndex));
      }
    }
    
    setActiveId(null);
  };

  const addBlock = (type: string) => {
    const newBlock: DragBlock = {
      id: `${type}-${Date.now()}`,
      type: type as any,
      content: getDefaultContent(type),
      styles: getDefaultStyles(type),
      position: { x: 0, y: blocks.length * 100 }
    };
    
    setBlocks([...blocks, newBlock]);
  };

  const getDefaultContent = (type: string) => {
    switch (type) {
      case 'text':
        return { text: 'Votre texte ici...' };
      case 'image':
        return { src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image' };
      case 'button':
        return { text: 'Cliquez ici', link: '#' };
      case 'form':
        return { fields: ['email'], submitText: 'Envoyer' };
      case 'video':
        return { src: '', autoplay: false };
      case 'section':
        return { backgroundColor: '#ffffff', padding: '2rem' };
      default:
        return {};
    }
  };

  const getDefaultStyles = (type: string) => {
    return {
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '1rem',
      margin: '0.5rem 0',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb'
    };
  };

  const renderBlock = (block: DragBlock) => {
    switch (block.type) {
      case 'text':
        return (
          <div className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-lg">
            <p>{block.content.text}</p>
          </div>
        );
      case 'image':
        return (
          <div className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-lg">
            <img src={block.content.src} alt={block.content.alt} className="w-full h-32 object-cover rounded" />
          </div>
        );
      case 'button':
        return (
          <div className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-lg">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              {block.content.text}
            </button>
          </div>
        );
      case 'form':
        return (
          <div className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-lg">
            <form className="space-y-4">
              <input type="email" placeholder="Votre email" className="w-full p-2 border rounded" />
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                {block.content.submitText}
              </button>
            </form>
          </div>
        );
      case 'section':
        return (
          <div className="p-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg min-h-24">
            <p className="text-center text-gray-500">Section vide - Glissez des éléments ici</p>
          </div>
        );
      default:
        return <div className="p-4 bg-gray-100 rounded">Élément inconnu</div>;
    }
  };

  const getPreviewWidth = () => {
    switch (previewMode) {
      case 'mobile': return 'max-w-sm';
      case 'tablet': return 'max-w-2xl';
      case 'desktop': return 'max-w-full';
      default: return 'max-w-full';
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar - Components */}
      <div className="w-80 bg-white border-r border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Composants</h2>
        
        <div className="space-y-4">
          {blockTypes.map((blockType) => (
            <motion.button
              key={blockType.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => addBlock(blockType.id)}
              className={`w-full flex items-center space-x-3 p-4 bg-${blockType.color}-50 border border-${blockType.color}-200 rounded-lg hover:bg-${blockType.color}-100 transition-colors`}
            >
              <blockType.icon className={`w-5 h-5 text-${blockType.color}-600`} />
              <span className={`font-medium text-${blockType.color}-800`}>
                {blockType.label}
              </span>
              <Plus className={`w-4 h-4 text-${blockType.color}-600 ml-auto`} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-900">Mon Projet</h1>
            <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`p-2 rounded-md transition-colors ${
                  previewMode === 'desktop' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewMode('tablet')}
                className={`p-2 rounded-md transition-colors ${
                  previewMode === 'tablet' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`p-2 rounded-md transition-colors ${
                  previewMode === 'mobile' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Settings className="w-4 h-4" />
              <span>Paramètres</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Eye className="w-4 h-4" />
              <span>Aperçu</span>
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 p-6 overflow-auto">
          <div className={`mx-auto ${getPreviewWidth()} transition-all duration-300`}>
            <DndContext
              sensors={sensors}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={blocks.map(b => b.id)} strategy={verticalListSortingStrategy}>
                <div className="bg-white rounded-lg shadow-sm min-h-96 p-6">
                  {blocks.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                      <Layout className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <h3 className="text-xl font-medium mb-2">Votre toile est vide</h3>
                      <p>Glissez des composants depuis le panneau de gauche pour commencer</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {blocks.map((block) => (
                        <div key={block.id}>
                          {renderBlock(block)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </SortableContext>

              <DragOverlay>
                {activeId ? renderBlock(blocks.find(b => b.id === activeId)!) : null}
              </DragOverlay>
            </DndContext>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Properties */}
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Propriétés</h2>
        
        <div className="text-center py-12 text-gray-500">
          <Settings className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>Sélectionnez un élément pour modifier ses propriétés</p>
        </div>
      </div>
    </div>
  );
};

export default DragDropEditor;