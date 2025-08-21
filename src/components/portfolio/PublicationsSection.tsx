import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Calendar } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Advanced Machine Learning Techniques for Real-Time Data Processing",
      journal: "IEEE Transactions on Pattern Analysis",
      year: "2024",
      authors: ["Your Name", "Co-Author 1", "Co-Author 2"],
      abstract: "This paper presents novel approaches to machine learning optimization for real-time data processing applications.",
      status: "Published",
      doi: "10.1109/TPAMI.2024.xxxxx",
      featured: true
    },
    {
      title: "Scalable Web Architecture Patterns for Modern Applications",
      conference: "International Conference on Software Engineering",
      year: "2023",
      authors: ["Your Name", "Research Partner"],
      abstract: "An in-depth analysis of scalable web architecture patterns and their implementation in modern cloud environments.",
      status: "Accepted",
      featured: false
    },
    {
      title: "Optimizing User Experience in Progressive Web Applications",
      journal: "ACM Computing Surveys",
      year: "2023",
      authors: ["Your Name"],
      abstract: "A comprehensive survey of UX optimization techniques specifically tailored for progressive web applications.",
      status: "Under Review",
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Accepted": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Under Review": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Research & Publications</h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto">
            Academic contributions and research work in computer science, machine learning, and software engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`h-full hover:glow-effect transition-all duration-300 ${
                  pub.featured ? 'ring-2 ring-primary' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getStatusColor(pub.status)}>
                      {pub.status}
                    </Badge>
                    {pub.featured && (
                      <Badge variant="outline" className="text-primary border-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl leading-tight mb-3">
                    {pub.title}
                  </CardTitle>
                  
                  <div className="space-y-2 text-sm text-text-dim">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{pub.year}</span>
                      <span className="mx-2">•</span>
                      <span className="font-medium">
                        {pub.journal || pub.conference}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5" />
                      <span>{pub.authors.join(", ")}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-text-dim mb-6 text-sm leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    {pub.doi && (
                      <Button variant="ghost" size="sm" className="group p-0 h-auto">
                        View Paper
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="group p-0 h-auto text-text-dim">
                      Cite
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Publications
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;