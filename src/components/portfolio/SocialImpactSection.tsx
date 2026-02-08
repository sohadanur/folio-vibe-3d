import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Users, BookOpen, Shield } from 'lucide-react';

const SocialImpactSection = () => {
  const communityRoles = [
    {
      icon: Users,
      title: "Board of Directors",
      org: "Khandaker Nurul Islam Orphanage",
      since: "Active since 2016",
      description: "Managed a 'Merit-First' tutoring program achieving 100% formal education for 30 resident orphans.",
    },
    {
      icon: BookOpen,
      title: "Tech Educator",
      org: "Abdul Jalil Sarker Smrity Trust",
      since: "Ongoing",
      description: "Teaching ethics and introducing AR/VR and modern technology to underprivileged children to bridge the digital divide.",
    },
    {
      icon: Heart,
      title: "Crisis Coordinator",
      org: "SmileMore Organization",
      since: "Since 2022",
      description: "Leading relief efforts and supply distribution for flood victims and marginalized communities.",
    },
  ];

  return (
    <section id="social-impact" className="py-16 surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Social Impact & Innovation</h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto text-center mb-12">
            Using technology and leadership to create meaningful change in communities.
          </p>

          {/* Featured Project — Sisterhood Shield */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="relative overflow-hidden border-primary/40 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.25)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)] transition-all duration-500">
              {/* Glow accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-primary/15">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    Ongoing Initiative
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Nirapod Sisterhood Shield</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-text-dim leading-relaxed mb-6 max-w-3xl">
                  An AI-powered safety initiative designed to empower and protect women through technology.
                </p>
                <Button
                  variant="default"
                  className="group"
                  onClick={() => window.open('https://nirapod-sisterhood-shield.lovable.app/', '_blank')}
                >
                  Explore Project
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Leadership & Community Roles */}
          <h3 className="text-2xl font-semibold mb-6 text-center">Leadership & Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:glow-effect transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <role.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs text-text-dim">{role.since}</span>
                    </div>
                    <CardTitle className="text-lg">{role.title}</CardTitle>
                    <p className="text-sm text-primary/80 font-medium">{role.org}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-dim text-sm leading-relaxed">{role.description}</p>
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

export default SocialImpactSection;
