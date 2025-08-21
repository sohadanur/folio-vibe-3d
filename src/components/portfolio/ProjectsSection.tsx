import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics platform with machine learning insights for business intelligence.",
      technologies: ["React", "TensorFlow.js", "D3.js", "FastAPI"],
      status: "Completed",
      featured: true
    },
    {
      title: "Collaborative Code Editor",
      description: "Web-based code editor with real-time collaboration features and syntax highlighting.",
      technologies: ["Vue.js", "WebSockets", "Monaco Editor", "Node.js"],
      status: "In Progress"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
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
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-xs">
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

export default ProjectsSection;