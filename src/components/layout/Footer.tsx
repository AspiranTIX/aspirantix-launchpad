import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/aspirantix', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/aspirantix', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/aspirantix', icon: Twitter },
  ];

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 mb-6 md:mb-0"
          >
            <img
              src="/lovable-uploads/742334e5-8095-4ec8-9210-39132715718b.png"
              alt="Aspirantix Logo"
              className="w-8 h-8"
            />
            <span className="text-lg font-bold font-poppins">
              Aspirantix
            </span>
          </motion.div>

          {/* Center - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-8 mb-6 md:mb-0"
          >
            <a 
              href="#privacy" 
              className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span className="text-sm text-navy-foreground/70">
              © {currentYear} Aspirantix. All rights reserved.
            </span>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-navy-foreground/10 flex items-center justify-center hover:bg-navy-foreground/20 transition-colors duration-300 group"
                >
                  <Icon className="w-5 h-5 text-navy-foreground/70 group-hover:text-navy-foreground transition-colors duration-300" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-navy-foreground/20 text-center"
        >
          <p className="text-sm text-navy-foreground/60">
            Building intelligent software with Django, AI, and Cloud technology
          </p>
        </motion.div>
      </div>
    </footer>
  );
}