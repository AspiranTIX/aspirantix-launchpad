import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Rocket, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: '7+ years shipping SaaS & AI solutions',
    description: 'From startup MVPs to enterprise-scale applications'
  },
  {
    icon: Award,
    title: '10+ engineers (Django, ML, AWS)',
    description: 'Full-stack expertise with proven production experience'
  },
  {
    icon: Rocket,
    title: 'From MVP to scale on cloud',
    description: 'End-to-end development and deployment pipeline'
  },
  {
    icon: Shield,
    title: 'Production-ready CI/CD',
    description: 'Automated testing, security, and deployment workflows'
  }
];

const stats = [
  { value: '20+', label: 'Product Launches' },
  { value: '<2.5s', label: 'LCP Performance' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support Available' }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            About Aspirantix
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
            Building the Future of{' '}
            <span className="text-gradient">Intelligent Software</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of engineers who believe in the power of intelligent software 
            to transform businesses. Our expertise spans Django development, machine learning, 
            and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-poppins mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between cutting-edge technology and 
                practical business solutions, Aspirantix has grown from a small team of Django 
                enthusiasts to a comprehensive software development powerhouse.
              </p>
              <p>
                Our journey began with a simple belief: great software should be intelligent, 
                scalable, and accessible. Today, we've helped dozens of companies transform 
                their operations with AI-powered solutions built on robust, production-ready foundations.
              </p>
              <p>
                From chatbots that understand context to ML models that predict user behavior, 
                we're not just building software—we're crafting the intelligent systems that 
                will power tomorrow's businesses.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-card border border-border/50"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient font-poppins mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}