import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Junior AI Engineer",
      company: "BacBon Limited",
      location: "Dhaka, Bangladesh",
      period: "Nov 2024 - Present",
      type: "Full-time",
      description: "Working on AI algorithms and researching AI models and tools. Contributing to innovative AI solutions for real-world applications.",
      technologies: ["Python", "Machine Learning", "AI Models", "Research"],
      achievements: [
        "Researched and implemented AI algorithms",
        "Contributed to AI model development",
        "Collaborated on innovative AI solutions"
      ]
    },
    {
      title: "Research Assistant",
      company: "EIT",
      location: "Melbourne, Australia",
      period: "July 2024 - Present",
      type: "Part-time",
      description: "Currently researching and preparing a paper on ergonomic risk assessment for industrial sectors using deep learning models. This ongoing work aims to develop a new methodology to identify and mitigate workplace hazards.",
      technologies: ["Research", "Academic Writing", "Data Analysis"],
      achievements: [
        "Currently researching and preparing a paper on ergonomic risk assessment using deep learning for industrial sectors",
        "This ongoing work aims to develop a new methodology to identify and mitigate workplace hazards",
        "Learning and discovering new innovative solutions"
      ]
    },
    {
      title: "AI Engineer Intern",
      company: "BacBon Limited", 
      location: "Dhaka, Bangladesh",
      period: "Aug 2024 - Oct 2024",
      type: "Internship",
      description: "Worked on AI algorithms and researched AI models and tools. Gained hands-on experience in machine learning and AI development.",
      technologies: ["Python", "TensorFlow", "PyTorch", "ML Models"],
      achievements: [
        "Developed AI-powered applications",
        "Researched machine learning algorithms",
        "Built proof-of-concept AI solutions"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Battery Low Interactive Limited",
      location: "Dhaka, Bangladesh", 
      period: "Jan 2023 - Apr 2023",
      type: "Internship",
      description: "Worked on developing and modifying the Peacify website. Gained experience in web development and project collaboration.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      achievements: [
        "Enhanced Peacify website functionality",
        "Collaborated with development team",
        "Improved user interface components"
      ]
    }
  ];


  return (
    <section id="experience" className="py-20 surface-elevated">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto text-center mb-12">
            Professional journey and key achievements in software development.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:glow-effect transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                        <div className="flex items-center gap-4 text-text-dim">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1 text-text-dim">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-text-dim mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-text-dim">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;