'use client'

import React, { useState } from 'react'
import { Button } from './ui/MovingBorder'
import { ChevronUp, ChevronDown, Code, Database, Globe, Layers, Cloud, Settings } from 'lucide-react'

const TechStack = () => {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'stacked'>('grid');

  const techStacks = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      technologies: ['Python', 'Java', 'JavaScript', 'SQL'],
      description: 'Core programming languages I use for development',
      bgGradient: 'bg-gradient-to-br from-blue-500/10 to-purple-600/10'
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB'],
      description: 'Database systems for data storage and management',
      bgGradient: 'bg-gradient-to-br from-green-500/10 to-emerald-600/10'
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      technologies: ['ReactJS', 'NextJS', 'HTML', 'CSS', 'VertexAI'],
      description: 'Frontend and web development technologies',
      bgGradient: 'bg-gradient-to-br from-orange-500/10 to-red-600/10'
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      icon: <Layers className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      technologies: ['FastAPI', 'Flask', 'Langchain', 'LangGraph'],
      description: 'Backend frameworks and AI development tools',
      bgGradient: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10'
    },
    {
      id: 'devops',
      title: 'Cloud/DevOps Tools',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600',
      technologies: ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'Bash', 'Git', 'Github Actions', 'CI/CD'],
      description: 'Tools for deployment, automation, and infrastructure',
      bgGradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10'
    },
    {
      id: 'cloud',
      title: 'Cloud Technologies',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-600',
      technologies: ['Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)'],
      description: 'Cloud platforms for scalable applications',
      bgGradient: 'bg-gradient-to-br from-indigo-500/10 to-purple-600/10'
    }
  ];

  const handleStackClick = (stackId: string) => {
    if (selectedStack === stackId) {
      setSelectedStack(null);
    } else {
      setSelectedStack(stackId);
    }
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'stacked' : 'grid');
    setSelectedStack(null);
  };

  return (
    <div className='py-20' id="techstack">
        <h1 className='heading'>
        My
        <span className='text-purple'> Tech Stack</span>
       </h1>
      <div className='flex items-center justify-between mb-12'>
        <button
          onClick={toggleViewMode}
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-xl text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 group"
        >
          <div className={`transition-transform duration-300 ${viewMode === 'grid' ? 'rotate-0' : 'rotate-180'}`}>
            {viewMode === 'grid' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
          <span className="font-medium">
            {viewMode === 'grid' ? 'Stack View' : 'Grid View'}
          </span>
          <div className="w-0 group-hover:w-2 h-2 bg-white/50 rounded-full transition-all duration-300"></div>
        </button>
      </div>

        {viewMode === 'grid' ? (
  <div className='w-full mt-12 px-4 md:px-8 animate-in fade-in duration-500'>
    <div className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
        {techStacks.map((stack) => (
          <div key={stack.id} className='w-full'>
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius='1.75rem'
              className='text-white border-neutral-200 dark:border-slate-800 cursor-pointer w-full h-full'
              onClick={() => handleStackClick(stack.id)}
            >
            <div className={`flex flex-col p-5 gap-3 ${stack.bgGradient} transition-all duration-300 ${selectedStack === stack.id ? 'scale-105' : ''} hover:scale-105 hover:shadow-lg`}>
              <div className='flex items-center gap-3'>
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${stack.color}`}>
                  {stack.icon}
                </div>
                <div className='flex-1'>
                  <h1 className='text-start text-lg md:text-xl font-bold mb-1'>
                    {stack.title}
                  </h1>
                  <p className='text-start text-white-100 font-semibold text-xs md:text-sm'>
                    {stack.description}
                  </p>
                </div>
              </div>

              {selectedStack === stack.id ? (
                <div className='grid grid-cols-2 gap-2 mt-2'>
                  {stack.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className='px-2.5 py-1.5 bg-white/10 rounded-lg text-xs md:text-sm text-white backdrop-blur-sm border border-white/20 text-center hover:bg-white/20 transition-colors duration-200'
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              ) : (
                <div className='flex flex-wrap gap-1.5'>
                  {stack.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className='px-2.5 py-1 bg-white/5 rounded-full text-xs text-white/80 border border-white/10'
                    >
                      {tech}
                    </span>
                  ))}
                  {stack.technologies.length > 3 && (
                    <span className='px-2.5 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10 border-dashed'>
                      +{stack.technologies.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
                      </Button>
          </div>
        ))}
      </div>
    </div>
  </div>
) : (
        // Enhanced Stacked View - Interactive Stack Design
        <div className='w-full mt-12 animate-in fade-in duration-500'>
          <div className='max-w-4xl mx-auto px-4'>
            <div className='relative' style={{ height: selectedStack ? '420px' : '280px' }}>
              {techStacks.map((stack, index) => {
                const isSelected = selectedStack === stack.id;
                const selectedIndex = selectedStack ? techStacks.findIndex(s => s.id === selectedStack) : -1;
                const isAboveSelected = selectedStack && index < selectedIndex;
                const isBelowSelected = selectedStack && index > selectedIndex;
                
                return (
                  <div
                    key={stack.id}
                    className={`absolute w-full cursor-pointer transition-all duration-700 ease-out ${
                      isSelected ? 'z-30' : isBelowSelected ? 'z-10' : 'z-20'
                    } hover:z-40`}
                    style={{
                      top: isSelected 
                        ? '0px' 
                        : isAboveSelected 
                          ? `${index * 12}px`
                          : isBelowSelected 
                            ? `${200 + (index - selectedIndex - 1) * 12}px`
                            : `${index * 18}px`,
                      transform: isSelected 
                        ? 'scale(1.0) translateY(0px)' 
                        : isAboveSelected
                          ? 'scale(0.96) translateY(-15px)'
                          : isBelowSelected
                            ? 'scale(0.96) translateY(15px)'
                            : 'scale(0.98)',
                      opacity: !selectedStack || isSelected ? 1 : 0.8,
                    }}
                    onClick={() => handleStackClick(stack.id)}
                  >
                    <Button
                      duration={Math.floor(Math.random() * 10000) + 10000}
                      borderRadius='1.75rem'
                      className='w-full text-white border-neutral-200 dark:border-slate-800'
                    >
                      <div className={`flex flex-col gap-4 ${stack.bgGradient} ${
                        isSelected 
                          ? 'shadow-2xl shadow-purple-500/30 ring-2 ring-purple-500/20 p-6 md:p-8' 
                          : 'hover:shadow-xl shadow-black/20 hover:scale-[1.02] p-5 md:p-6'
                      } transition-all duration-300 min-h-[80px]`}>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-4'>
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${stack.color} transition-all duration-300 ${
                              isSelected ? 'scale-110' : 'scale-100'
                            }`}>
                              <div className="w-6 h-6">{React.cloneElement(stack.icon, { className: 'w-6 h-6' })}</div>
                            </div>
                            <div className='flex-1'>
                              <h1 className={`text-start font-bold transition-all duration-300 ${
                                isSelected ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                              }`}>
                                {stack.title}
                              </h1>
                              <p className='text-start text-white-100 font-medium text-xs md:text-sm mt-1'>
                                {stack.description}
                              </p>
                            </div>
                          </div>
                          <div className='flex flex-col items-end gap-1'>
                            <div className='text-white/60 text-sm'>
                              {stack.technologies.length}
                            </div>
                            <div className={`text-white/40 text-xs transition-all duration-300 ${
                              isSelected ? 'rotate-180' : 'rotate-0'
                            }`}>
                              ▼
                            </div>
                          </div>
                        </div>

                        {isSelected && (
                          <div className='animate-in slide-in-from-top duration-500 ease-out'>
                            <div className='w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4'></div>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                              {stack.technologies.map((tech, techIndex) => (
                                <div
                                  key={techIndex}
                                  className='px-3 py-2 bg-white/10 rounded-lg text-sm text-white backdrop-blur-sm border border-white/20 text-center hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer'
                                  style={{
                                    animationDelay: `${techIndex * 50}ms`
                                  }}
                                >
                                  {tech}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Button>
                  </div>
                );
              })}
            </div>
            
            {/* Visual Indicators */}
            <div className='flex justify-center mt-6 gap-2'>
              {techStacks.map((stack, index) => (
                <div
                  key={stack.id}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    selectedStack === stack.id 
                      ? 'bg-purple-500 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => handleStackClick(stack.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className='text-center mt-8'>
        <p className='text-white-100 text-sm opacity-70'>
          {viewMode === 'grid' 
            ? 'Click on any category to explore technologies • Switch to stack view for an interactive experience' 
            : 'Click on any stack layer to explore technologies • Switch to grid view for better overview'
          }
        </p>
      </div>
    </div>
  )
}

export default TechStack