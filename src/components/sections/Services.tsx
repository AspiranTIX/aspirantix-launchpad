import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Brain, 
  MessageSquare, 
  GraduationCap, 
  Cloud, 
  ArrowRight 
} from 'lucide-react';

interface ServicesProps {
  onBookCall: () => void;
}

const services = [
  {
    icon: Globe,
    title: 'Django Web Apps & APIs',
    description: 'Full-stack Django applications with REST/GraphQL APIs, real-time features, and scalable architecture.',
    features: ['Django REST Framework', 'Real-time WebSockets', 'PostgreSQL/Redis', 'Authentication & Security']
  },
  {
    icon: Brain,
    title: 'AI/ML Model Training',
    description: 'Custom machine learning models including YOLO object detection, NLP, and AI text detection systems.',
    features: ['YOLO Object Detection', 'NLP & Text Analysis', 'Custom Model Training', 'AI Text Detection']
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Intelligent chatbots with Vector DB integration for Q&A, PDF processing, and LMS assistants.',
    features: ['Vector Database Q&A', 'PDF Document Chat', 'LMS Integration', 'Context-Aware Responses']
  },
  {
    icon: GraduationCap,
    title: 'EdTech Automations',
    description: 'Educational technology solutions including course video summarization and learning management.',
    features: ['Video Summarization', 'Course Analytics', 'Learning Pathways', 'Progress Tracking']
  },
  {
    icon: Cloud,
    title: 'AWS Cloud Solutions',
    description: 'Complete cloud infrastructure with EC2, S3, Lambda, auto-scaling, monitoring, and security.',
    features: ['Auto-scaling EC2', 'S3 & CDN', 'Serverless Lambda', 'Monitoring & Security']
  }
];

export default function Services({ onBookCall }: ServicesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
            <span className="text-gradient">End-to-End</span> Development Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI-powered applications to scalable cloud infrastructure, 
            we provide comprehensive development services that drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border/50 hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-poppins">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={onBookCall}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between group-hover:bg-primary/10 transition-colors duration-300"
                  >
                    Discuss this service
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center p-8 rounded-2xl bg-gradient-card border border-border/50"
        >
          <h3 className="text-2xl font-bold font-poppins mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our expertise in Django, AI, and cloud technologies 
            can help you build the next generation of intelligent software.
          </p>
          <Button
            onClick={onBookCall}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}