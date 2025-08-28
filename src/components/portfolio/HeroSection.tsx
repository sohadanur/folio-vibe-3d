import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Scene3D from '../3d/Scene3D';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-visible">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D meshCount={36} sizeRange={[0.8, 1.2]} />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p 
            className="text-primary text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>
          
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-glow leading-tight md:leading-normal tracking-tight overflow-visible px-4 pt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block">Transforming Ideas Into</span>
            <span className="hero-gradient bg-clip-text text-transparent block">
              Digital Experiences
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-text-dim mb-8 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            As a passionate explorer of research, innovation, and artificial intelligence, my goal is to build reliable, creative solutions that push the boundaries of what's possible, making technology more accessible and impactful.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="flex justify-center mb-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: Github, href: 'https://github.com/sohadanur', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sohada-hasan-336651231/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sohadanur01@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 surface-elevated rounded-full hover:glow-effect transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;