import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Scene3D from '../3d/Scene3D';

const AboutSection = () => {
  const skills = [
    'Python & SQL', 'Django & FastAPI', 'Machine Learning',
    'QA Testing', 'Postman & Selenium', 'Natural Language Processing',
    'Computer Vision', 'API Testing', 'Git & GitHub',
    'Communication', 'Data Visualization', 'Data Wrangling'
  ];

  return (
    <section id="about" className="pt-12 pb-6 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
            <div className="text-center">
              <p className="text-lg text-text-dim mb-6 leading-relaxed">
                Motivated and technically proficient Data Scientist & AI engineer with a robust foundation in machine learning, artificial intelligence, and software engineering. Graduated with distinction from the American International University of Bangladesh, bringing hands-on experience in developing and fine-tuning AI algorithms, exploring model architectures, and working with diverse datasets. Seeking an impactful role to apply machine learning and Python expertise in a dynamic, growth-oriented company.
              </p>
              <p className="text-lg text-text-dim mb-6 leading-relaxed">
                My journey is fueled by a love for research, innovation, and the endless possibilities of artificial intelligence. I'm immersed in the exciting world of machine learning, crafting and refining applications that don't just work, but delight users with their reliability and seamless functionality. I thrive on building AI-powered solutions, primarily leveraging the power of Python and Django.
              </p>
              <p className="text-lg text-text-dim mb-8 leading-relaxed">
                I'm driven by an insatiable curiosity to learn, create, and share. I believe in the power of code to tell stories and solve real-world challenges, and I'm always on the lookout for the next big idea to bring to life. Let's innovate and build the future, one line of code at a time!
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center lg:justify-start">
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
            <Scene3D meshCount={10} enableControls={false} />
          </motion.div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none -mt-6 h-56 opacity-30">
        <Scene3D meshCount={36} enableControls={false} sizeRange={[1.2, 2.2]} />
      </div>
    </section>
  );
};

export default AboutSection;