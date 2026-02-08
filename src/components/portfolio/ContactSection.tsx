import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Scene3D from '../3d/Scene3D';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeoodwjn';

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sohadanur01@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sohadanur01@gmail.com&su=Let's%20Connect&body=Hi%20Sohan,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect..."
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+88016871348",
      href: "tel:+88016871348"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        toast({
          title: '✅ Message Sent!',
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      toast({
        title: '❌ Something went wrong',
        description: 'Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Scene3D meshCount={6} enableControls={false} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="surface-elevated">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4 py-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-primary" />
                    <h3 className="text-xl font-semibold">Message Sent Successfully!</h3>
                    <p className="text-text-dim max-w-md">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name *</label>
                        <Input
                          name="name"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject *</label>
                      <Input
                        name="subject"
                        placeholder="Project discussion"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message *</label>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project or ideas..."
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full hero-gradient glow-effect group"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-text-dim mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just 
                want to chat about technology, I'm always open to interesting conversations.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href !== '#' ? '_blank' : undefined}
                  rel={item.href !== '#' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 surface-elevated rounded-lg hover:glow-effect transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-text-dim">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 surface-elevated rounded-lg"
            >
              <h4 className="font-semibold mb-2">Response Time</h4>
              <p className="text-text-dim text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via phone.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
