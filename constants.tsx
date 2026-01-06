
import React from 'react';
import { Gamepad2, BrainCircuit, Code2, Palette, Film, GraduationCap } from 'lucide-react';
import { Branch } from './types';

export const BRANCHES: Branch[] = [
  {
    id: 'games',
    name: 'Studio of Games',
    tagline: 'Unity-Powered Worlds.',
    description: 'Specialized game development studio focused on crafting high-quality, polished experiences using the Unity Engine. We believe in smooth mechanics and unique art styles.',
    color: 'from-blue-600 via-cyan-400 to-indigo-600',
    icon: 'gamepad',
    services: [
      'Unity Engine Core',
      'C# Scripting Systems',
      '2D/3D Hybrid Visuals',
      'Mobile & PC Optimization'
    ],
    projects: [
      { 
        title: "Echoless", 
        description: "A survival experience built from the ground up in Unity. Explore the silence. Face the unknown. (COMING SOON)", 
        category: "Survival", 
        tags: ["Unity", "C#", "Coming Soon"] 
      }
    ]
  },
  {
    id: 'ai',
    name: 'Quantara AI',
    tagline: 'Intelligence for the Real World',
    description: 'We architect next-generation neural systems. From advanced data analysis to autonomous agent frameworks, we are building the cognitive foundation for the next decade.',
    color: 'from-purple-500 via-violet-400 to-indigo-500',
    icon: 'brain',
    services: [
      'Neural Network Design',
      'Inference Optimization',
      'Data Intelligence Systems',
      'Cognitive R&D'
    ],
    projects: [] 
  },
  {
    id: 'software',
    name: 'Software Works',
    tagline: 'Structural Systems & Web Apps',
    description: 'We build high-performance web applications and resilient cloud infrastructure. Led by Co-Founder Anagh Singh, we specialize in architecting systems that sustain millions of operations.',
    color: 'from-blue-500 to-indigo-700',
    icon: 'code',
    services: [
      'Modern Web Applications',
      'Distributed Systems',
      'Backend Engineering',
      'Cloud Native Infrastructure'
    ],
    projects: [] 
  },
  {
    id: 'design',
    name: 'Quantara Design',
    tagline: 'Aesthetic Logic & Visual Strategy',
    description: 'The creative pulse of the Nexus. Led by Co-Founder Anagh Singh, we master Figma to synthesize form and function into high-fidelity digital art and user experiences. Our canvas is the future.',
    color: 'from-pink-500 via-fuchsia-500 to-orange-400',
    icon: 'palette',
    services: [
      'High-Fidelity UI/UX',
      'Figma Component Architect',
      'Brand Identity Systems',
      'Visual Product Strategy'
    ],
    projects: [] 
  },
  {
    id: 'media',
    name: 'Quantara Media',
    tagline: 'High-Fidelity Visual Narrative',
    description: 'Modern solutions for the attention economy. Led by Co-Founder Anagh Singh, we handle high-end production, cinematic storytelling, and digital ecosystems that drive global engagement.',
    color: 'from-red-600 via-orange-500 to-yellow-500',
    icon: 'film',
    services: [
      'Cinematic Production',
      'Motion Graphics',
      'Brand Storytelling',
      'Digital Ecosystems'
    ],
    projects: [] 
  },
  {
    id: 'education',
    name: 'Quantara Education',
    tagline: 'Mastery Across Disciplines',
    description: 'Bridging the gap between theory and industry. Led by Co-Founder Anagh Singh, we provide elite tutorials in software technologies and fundamental subjects like Maths, Science, English, and Hindi. Learning, redefined.',
    color: 'from-emerald-400 via-teal-500 to-cyan-600',
    icon: 'education',
    services: [
      'Software Tech Tutorials',
      'Academic Excellence (Maths/Science)',
      'Language Mastery (Hindi/English)',
      'Technical Mentorship'
    ],
    projects: [] // No projects as requested
  }
];

export const ICONS = {
  gamepad: <Gamepad2 className="w-6 h-6" />,
  brain: <BrainCircuit className="w-6 h-6" />,
  code: <Code2 className="w-6 h-6" />,
  palette: <Palette className="w-6 h-6" />,
  film: <Film className="w-6 h-6" />,
  education: <GraduationCap className="w-6 h-6" />
};
