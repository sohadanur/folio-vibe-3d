import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "BCDP Website - Bangladesh Climate Development Partnership",
      description: "A role-based web platform for managing user access, project data, graph representation, and performance reporting with API testing using Postman.",
      technologies: ["Django", "GenAI", "Numpy", "Pandas", "Postman"],
      status: "Completed",
      featured: true,
      url: "https://bcdp-front.clmsbd.com/"
    },
    {
      title: "Textbook Generator", 
      description: "Dynamic textbook generation system based on grade, subject, and word count using Mistral ML model with comprehensive QA testing.",
      technologies: ["FastAPI", "Streamlit", "Pydantic", "Mistral AI"],
      status: "Completed",
      url: "http://103.209.40.213:8501/"
    },
    {
      title: "AI Chatbot for Portfolio",
      description: "Real-time AI chatbot using Flask and Gemini-Pro API with comprehensive API testing and conversational QA validation.",
      technologies: ["Flask", "Gemini-Pro API", "Python", "Postman"],
      status: "Completed",
      url: "https://www.yellowpenguin.co.kr/"
    },
    {
      title: "Course Recommendation System",
      description: "Flask-based recommendation system using TF-IDF, cosine similarity, and fuzzy matching with extensive functional testing.",
      technologies: ["Flask", "Scikit-learn", "FuzzyWuzzy", "TF-IDF"],
      status: "Completed"
    },
    {
      title: "E-Learning with Speaker Detection",
      description: "E-learning platform with built-in speaker detection feature for enhanced user engagement and interaction analysis.",
      technologies: ["Django", "Speaker Recognition API", "Analytics"],
      status: "Completed"
    },
    {
      title: "Loop Deck - Arduino Controller",
      description: "Hardware and software device built with Arduino Leonardo to make Photoshop and gaming features easier using knobs.",
      technologies: ["Arduino", "C++", "Hardware Design"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto text-center mb-12">
            A selection of projects that showcase my skills and passion for innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`h-full hover:glow-effect transition-all duration-300 ${
                    project.featured ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant={project.status === 'Completed' ? 'default' : 'outline'}
                        className={project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : ''}
                      >
                        {project.status}
                      </Badge>
                      {project.featured && (
                        <Badge variant="outline" className="text-primary border-primary">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-text-dim mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {project.url && (
                      <div className="flex justify-end">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="group p-0 h-auto text-primary"
                          onClick={() => window.open(project.url, '_blank')}
                        >
                          View Project
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button>
                      </div>
                    )}
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

export default ProjectsSection;