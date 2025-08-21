import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 surface-elevated border-b backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          
          <Button variant="outline" size="sm" className="hidden md:block">
            Download CV
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;