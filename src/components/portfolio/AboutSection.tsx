import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Scene3D from '../3d/Scene3D';

const AboutSection = () => {
  const skills = [
    'Python & SQL', 'Django & FastAPI', 'Machine Learning',
    'QA Testing', 'Postman & Selenium', 'Natural Language Processing',
    'Computer Vision', 'API Testing', 'Git & GitHub'
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
              I'm a motivated QA Engineer and AI Engineer with a strong foundation in software testing, 
              machine learning, and full-stack development. I have experience in manual testing, 
              API testing, and building AI-powered applications using Python and Django.
            </p>
            <p className="text-lg text-text-dim mb-8 leading-relaxed">
              Currently working at BacBon Limited as a Junior AI Engineer, I'm passionate about 
              delivering reliable, user-friendly software. I hold a BSc in Computer Science and Engineering 
              from AIUB with a CGPA of 3.95, and I'm constantly learning new technologies.
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