'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from './ui/MovingBorder'
import { ChevronUp, ChevronDown, Code, Database, Globe, Layers, Cloud, Settings } from 'lucide-react'

const TechStack = () => {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'stacked'>('grid');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [cardPositions, setCardPositions] = useState<{ [key: string]: { x: number, y: number, width: number, height: number } }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement }>({});

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

  // Capture card positions before animation
  const captureCardPositions = () => {
    const positions: { [key: string]: { x: number, y: number, width: number, height: number } } = {};
    
    techStacks.forEach((stack) => {
      const element = cardRefs.current[stack.id];
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (containerRect) {
          positions[stack.id] = {
            x: rect.left - containerRect.left,
            y: rect.top - containerRect.top,
            width: rect.width,
            height: rect.height
          };
        }
      }
    });
    
    setCardPositions(positions);
  };

  const handleStackClick = (stackId: string) => {
    if (selectedStack === stackId) {
      setSelectedStack(null);
    } else {
      setSelectedStack(stackId);
    }
  };

  const toggleViewMode = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (viewMode === 'grid') {
      // Capture positions before switching
      captureCardPositions();
      
      // Start folding animation
      setViewMode('stacked');
      setAnimationStep(0);
      
      // Animate cards one by one from last to first
      techStacks.reverse().forEach((_, index) => {
        setTimeout(() => {
          setAnimationStep(prev => prev + 1);
        }, index * 200);
      });
      
      // Complete animation
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationStep(0);
      }, techStacks.length * 200 + 500);
      
    } else {
      // Reverse animation - unfold from first to last
      setAnimationStep(techStacks.length);
      
      techStacks.forEach((_, index) => {
        setTimeout(() => {
          setAnimationStep(prev => prev - 1);
        }, index * 200);
      });
      
      setTimeout(() => {
        setViewMode('grid');
        setIsAnimating(false);
        setAnimationStep(0);
      }, techStacks.length * 200 + 300);
    }
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
          disabled={isAnimating}
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-xl text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className={`transition-transform duration-300 ${viewMode === 'grid' ? 'rotate-0' : 'rotate-180'}`}>
            {viewMode === 'grid' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
          <span className="font-medium">
            {isAnimating ? (viewMode === 'grid' ? 'Folding...' : 'Unfolding...') : viewMode === 'grid' ? 'Stack View' : 'Grid View'}
          </span>
          <div className="w-0 group-hover:w-2 h-2 bg-white/50 rounded-full transition-all duration-300"></div>
        </button>
      </div>

      <div ref={containerRef} className="relative w-full">
        {viewMode === 'grid' ? (
          // Grid View
          <div className='w-full mt-12 px-4 md:px-8'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                {techStacks.map((stack, index) => (
                  <div 
                    key={stack.id} 
                    className='w-full'
                    ref={el => {
                      if (el) cardRefs.current[stack.id] = el;
                    }}
                  >
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
                            {stack.technologies.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className='px-2.5 py-1.5 bg-white/10 rounded-lg text-xs md:text-sm text-white backdrop-blur-sm border border-white/20 text-center hover:bg-white/20 transition-colors duration-200'
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className='flex flex-wrap gap-1.5'>
                            {stack.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
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
          // Stacked View with Sequential Folding Animation
          <div className='w-full mt-12'>
            <div className='max-w-4xl mx-auto px-4'>
              <div className='relative' style={{ height: selectedStack ? '500px' : '350px' }}>
                {techStacks.map((stack, index) => {
                  const isSelected = selectedStack === stack.id;
                  const selectedIndex = selectedStack ? techStacks.findIndex(s => s.id === selectedStack) : -1;
                  const isAboveSelected = selectedStack && index < selectedIndex;
                  const isBelowSelected = selectedStack && index > selectedIndex;
                  
                  // Animation logic for folding
                  const reverseIndex = techStacks.length - 1 - index;
                  const shouldAnimate = isAnimating && animationStep > reverseIndex;
                  const animationDelay = reverseIndex * 200;
                  
                  // Calculate positions for folding animation
                  let animatedStyle = {};
                  if (isAnimating && viewMode === 'stacked' && cardPositions[stack.id]) {
                    const startPos = cardPositions[stack.id];
                    const endX = 0;
                    const endY = index * 25;
                    
                    animatedStyle = {
                      position: 'absolute' as const,
                      left: shouldAnimate ? `${endX}px` : `${startPos.x}px`,
                      top: shouldAnimate ? `${endY}px` : `${startPos.y}px`,
                      width: shouldAnimate ? '100%' : `${startPos.width}px`,
                      height: shouldAnimate ? 'auto' : `${startPos.height}px`,
                      transform: shouldAnimate 
                        ? `scale(${0.95 - index * 0.01}) rotateX(${index * 1}deg) rotateY(${index * 0.5}deg)`
                        : 'scale(1) rotateX(0deg) rotateY(0deg)',
                      transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${animationDelay}ms`,
                      transformOrigin: 'center center',
                      perspective: '1000px',
                      transformStyle: 'preserve-3d' as const,
                      zIndex: shouldAnimate ? techStacks.length - index : index
                    };
                  } else if (!isAnimating) {
                    // Final stacked positions
                    animatedStyle = {
                      position: 'absolute' as const,
                      left: 0,
                      top: isSelected 
                        ? '0px' 
                        : isAboveSelected 
                          ? `${index * 20}px`
                          : isBelowSelected 
                            ? `${250 + (index - selectedIndex - 1) * 20}px`
                            : `${index * 25}px`,
                      width: '100%',
                      transform: isSelected 
                        ? 'scale(1.0) translateY(0px) rotateX(0deg) rotateY(0deg)' 
                        : isAboveSelected
                          ? `scale(0.94) translateY(-15px) rotateX(-3deg) rotateY(${index * 0.5}deg)`
                          : isBelowSelected
                            ? `scale(0.94) translateY(15px) rotateX(3deg) rotateY(${index * 0.5}deg)`
                            : `scale(${0.95 - index * 0.01}) rotateX(${index * 1}deg) rotateY(${index * 0.5}deg)`,
                      opacity: !selectedStack || isSelected ? 1 : 0.8,
                      transformOrigin: 'center center',
                      perspective: '1000px',
                      transformStyle: 'preserve-3d' as const,
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex: isSelected ? 50 : isBelowSelected ? 10 : 30 - index,
                      boxShadow: isSelected 
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.2)' 
                        : `0 ${10 + index * 3}px ${20 + index * 5}px -10px rgba(0, 0, 0, ${0.15 + index * 0.03})`
                    };
                  }
                  
                  return (
                    <div
                      key={stack.id}
                      className={`cursor-pointer transition-all duration-700 hover:z-50 ${
                        isAnimating ? 'pointer-events-none' : ''
                      }`}
                      style={animatedStyle}
                      onClick={() => !isAnimating && handleStackClick(stack.id)}
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
                        } transition-all duration-500 min-h-[100px] backdrop-blur-sm relative overflow-hidden`}>
                          
                          {/* Animated background gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${stack.color} opacity-5 transition-opacity duration-500 ${
                            isSelected ? 'opacity-10' : ''
                          }`}></div>
                          
                          <div className='flex items-center justify-between relative z-10'>
                            <div className='flex items-center gap-4'>
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${stack.color} transition-all duration-500 ${
                                isSelected ? 'scale-110 rotate-0' : 'scale-100'
                              } shadow-lg relative`}>
                                <div className="w-6 h-6">{React.cloneElement(stack.icon, { className: 'w-6 h-6' })}</div>
                                {/* Icon glow effect */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stack.color} opacity-50 blur-sm transition-opacity duration-500 ${
                                  isSelected ? 'opacity-70' : 'opacity-0'
                                }`}></div>
                              </div>
                              <div className='flex-1'>
                                <h1 className={`text-start font-bold transition-all duration-500 ${
                                  isSelected ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                                }`}>
                                  {stack.title}
                                </h1>
                                <p className='text-start text-white-100 font-medium text-xs md:text-sm mt-1 opacity-90'>
                                  {stack.description}
                                </p>
                              </div>
                            </div>
                            <div className='flex flex-col items-end gap-1'>
                              <div className={`text-white/60 text-sm font-semibold transition-all duration-300 ${
                                isSelected ? 'scale-110 text-purple-300' : ''
                              }`}>
                                {stack.technologies.length}
                              </div>
                              <div className={`text-white/40 text-xs transition-all duration-500 ${
                                isSelected ? 'rotate-180 scale-125 text-purple-400' : 'rotate-0'
                              }`}>
                                ▼
                              </div>
                            </div>
                          </div>

                          {isSelected && (
                            <div className='relative z-10 animate-in slide-in-from-top duration-700 ease-out'>
                              <div className='w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-6 relative'>
                                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse'></div>
                              </div>
                              <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                                {stack.technologies.map((tech, techIndex) => (
                                  <div
                                    key={techIndex}
                                    className='px-3 py-2.5 bg-white/10 rounded-xl text-sm text-white backdrop-blur-sm border border-white/20 text-center hover:bg-white/20 hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg relative overflow-hidden group'
                                    style={{
                                      animationDelay: `${techIndex * 100}ms`,
                                      animation: 'slideInUp 0.8s ease-out forwards'
                                    }}
                                  >
                                    <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                    <span className='relative z-10'>{tech}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </Button>
                      
                      {/* Enhanced depth layers */}
                      <div className={`absolute inset-0 rounded-[1.75rem] bg-gradient-to-br ${stack.color} transition-all duration-500 -z-10`}
                           style={{
                             opacity: isSelected ? 0.1 : 0.05,
                             transform: `translateY(${3 + index * 2}px) translateX(${2 + index}px)`,
                             filter: 'blur(1px)'
                           }}
                      />
                      <div className={`absolute inset-0 rounded-[1.75rem] bg-gradient-to-br ${stack.color} transition-all duration-500 -z-20`}
                           style={{
                             opacity: 0.03,
                             transform: `translateY(${6 + index * 3}px) translateX(${4 + index * 1.5}px)`,
                             filter: 'blur(2px)'
                           }}
                      />
                    </div>
                  );
                })}
              </div>
              
              {/* Enhanced Visual Indicators */}
              <div className='flex justify-center mt-10 gap-3'>
                {techStacks.map((stack, index) => (
                  <div
                    key={stack.id}
                    className={`transition-all duration-500 cursor-pointer group relative ${
                      selectedStack === stack.id 
                        ? 'w-12 h-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full shadow-lg shadow-purple-500/30' 
                        : 'w-3 h-3 bg-white/20 hover:bg-white/40 rounded-full hover:scale-125 hover:shadow-md'
                    } ${isAnimating ? 'pointer-events-none' : ''}`}
                    onClick={() => !isAnimating && handleStackClick(stack.id)}
                  >
                    {selectedStack === stack.id && (
                      <div className='absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 rounded-full animate-pulse'></div>
                    )}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${stack.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='text-center mt-10'>
        <p className='text-white-100 text-sm opacity-70 transition-opacity duration-300'>
          {isAnimating 
            ? (viewMode === 'grid' ? 'Cards are folding into a neat stack...' : 'Cards are unfolding back to grid...')
            : viewMode === 'grid' 
              ? 'Click on any category to explore technologies • Switch to stack view for an interactive experience' 
              : 'Click on any stack layer to explore technologies • Switch to grid view for better overview'
          }
        </p>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
        
        .slide-in-from-top {
          animation: slideInFromTop 0.7s ease-out forwards;
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default TechStack