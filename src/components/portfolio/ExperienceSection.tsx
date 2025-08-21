import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovation Corp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading the development of scalable web applications and mentoring junior developers. Architected microservices handling 1M+ daily requests.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
      achievements: [
        "Reduced application load time by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client-facing applications using modern web technologies. Collaborated with design teams to create exceptional user experiences.",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis"],
      achievements: [
        "Built 3 major client applications from scratch",
        "Improved code coverage to 90%",
        "Reduced bug reports by 50%"
      ]
    },
    {
      title: "Software Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Worked in a fast-paced startup environment building MVP products and iterating based on user feedback. Gained experience in multiple technologies and domains.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      achievements: [
        "Shipped MVP in 3 months",
        "Implemented real-time features",
        "Contributed to $2M Series A funding"
      ]
    }
  ];

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
    <section id="experience" className="py-20 surface-elevated">
      <div className="container mx-auto px-6">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
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

        {/* Projects Section */}
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

export default ExperienceSection;