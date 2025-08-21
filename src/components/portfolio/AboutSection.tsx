import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Scene3D from '../3d/Scene3D';

const AboutSection = () => {
  const skills = [
    'React & TypeScript', 'Node.js & Python', 'Machine Learning',
    'Cloud Architecture', 'UI/UX Design', 'DevOps & CI/CD'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-text-dim mb-6 leading-relaxed">
              I'm a passionate software developer with expertise in full-stack development, 
              machine learning, and cloud technologies. I love creating elegant solutions 
              to complex problems and turning ideas into reality.
            </p>
            <p className="text-lg text-text-dim mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, writing 
              technical articles, or contributing to open-source projects. I believe in 
              continuous learning and sharing knowledge with the community.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-3 text-center surface-elevated hover:glow-effect transition-all duration-300">
                    <CardContent className="p-0">
                      <span className="text-sm font-medium">{skill}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <Scene3D meshCount={4} enableControls={false} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;