import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable Web Applications with React and TypeScript",
      excerpt: "Explore best practices for creating maintainable and performant React applications using TypeScript.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      featured: true
    },
    {
      title: "Machine Learning in the Browser: TensorFlow.js Deep Dive",
      excerpt: "Learn how to implement machine learning models directly in the browser for real-time predictions.",
      date: "2024-01-08",
      readTime: "12 min read",
      tags: ["ML", "JavaScript", "TensorFlow"]
    },
    {
      title: "Optimizing Cloud Infrastructure for Modern Applications",
      excerpt: "A comprehensive guide to designing efficient and cost-effective cloud architectures.",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["Cloud", "DevOps", "AWS"]
    }
  ];

  return (
    <section id="blog" className="py-16 surface-elevated">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about technology, development, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                className="h-full hover:glow-effect transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-text-dim" />
                    <span className="text-sm text-text-dim">{post.date}</span>
                    <Clock className="w-4 h-4 text-text-dim ml-2" />
                    <span className="text-sm text-text-dim">{post.readTime}</span>
                  </div>
                  
                  <CardTitle className="text-xl leading-tight">
                    {post.title}
                  </CardTitle>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-text-dim mb-6">{post.excerpt}</p>
                  
                  <Button variant="ghost" className="group p-0 h-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;