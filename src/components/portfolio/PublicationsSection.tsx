import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Calendar } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Touchscreen Interaction for Error Minimization Using Fitts' Law and Error Probability",
      conference: "International Conference on Computing Advancements (ICCA-2024)",
      year: "2024",
      authors: ["Khandaker Fatema Nur Sohada", "Co-Author"],
      abstract: "This paper explores methods for minimizing errors in touchscreen interactions by applying Fitts' Law principles and error probability analysis to improve user interface design.",
      status: "Published",
      doi: "https://dl.acm.org/doi/full/10.1145/3723178.3723211",
      featured: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-primary/20 text-primary border-primary/30";
      case "Accepted": return "bg-primary/10 text-primary border-primary/20";
      case "Under Review": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="publications" className="py-16">
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
                  className="h-full hover:glow-effect transition-all duration-300"
                >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getStatusColor(pub.status)}>
                      {pub.status}
                    </Badge>
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
                        {pub.conference}
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
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group p-0 h-auto"
                        onClick={() => window.open(pub.doi, '_blank')}
                      >
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

      </div>
    </section>
  );
};

export default PublicationsSection;
