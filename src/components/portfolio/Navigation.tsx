import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Blog', href: '#blog' },
    { label: 'Social Impact', href: '#social-impact' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 border-b border-border/20 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-xl font-bold text-primary cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            Sohada
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:block"
              onClick={() => {
                alert("CV download will be available once you provide the CV file!");
              }}
            >
              Download CV
            </Button>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/20 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="mt-2 w-full"
                onClick={() => {
                  alert("CV download will be available once you provide the CV file!");
                  setMobileOpen(false);
                }}
              >
                Download CV
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
