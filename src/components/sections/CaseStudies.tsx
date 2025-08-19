import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, FileText, Search, Eye, Bot, Target } from 'lucide-react';

interface CaseStudiesProps {
  onBookCall: () => void;
}

const caseStudies = [
  {
    icon: Database,
    title: 'Q&A Chatbot with Vector DB',
    description: 'Built an intelligent Q&A system using Qdrant vector database for semantic search and context-aware responses.',
    results: 'Reduced support queries by 70% with 95% accuracy in responses',
    tags: ['Qdrant', 'NLP', 'Django', 'Vector Search'],
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: FileText,
    title: 'LMS Course Video Summarization',
    description: 'Automated video content analysis and summarization for educational platforms using AI/ML models.',
    results: 'Saved 80% time in content creation with automated summaries',
    tags: ['ML', 'Video Processing', 'NLP', 'LMS Integration'],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Search,
    title: 'PDF Book Chatbot for LMS',
    description: 'Interactive chatbot that answers questions from PDF textbooks and course materials with precise citations.',
    results: 'Improved student engagement by 60% with instant answers',
    tags: ['PDF Processing', 'RAG', 'Citation Engine', 'Django'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Eye,
    title: 'YOLO Object Detection',
    description: 'Custom object detection system with specialized classes for industrial quality control and monitoring.',
    results: 'Achieved 98% accuracy in defect detection, reducing manual inspection',
    tags: ['YOLO', 'Computer Vision', 'PyTorch', 'Real-time'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Bot,
    title: 'AI Text Detection System',
    description: 'Advanced classifier to distinguish between human-written and AI-generated content with high precision.',
    results: '94% accuracy in AI content detection across multiple domains',
    tags: ['NLP', 'Classification', 'TensorFlow', 'API'],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Target,
    title: 'Predictive Analytics Platform',
    description: 'ML-powered platform for business forecasting and trend analysis with real-time data processing.',
    results: 'Improved forecast accuracy by 45% with automated insights',
    tags: ['Time Series', 'ML', 'Analytics', 'AWS'],
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function CaseStudies({ onBookCall }: CaseStudiesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="case-studies" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            Case Studies
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
            <span className="text-gradient">Real Results</span> for Real Challenges
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore how we've helped businesses transform their operations with 
            AI-powered solutions and intelligent automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                  {/* Icon with Gradient Background */}
                  <div className="relative mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center shadow-medium`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-poppins mb-3 text-foreground">
                    {study.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="mb-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <p className="text-sm font-medium text-accent-foreground">
                      📈 {study.results}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
            Have a Similar Challenge?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique, but the challenges are often similar. 
            Let's discuss how we can adapt our proven approaches to solve your specific needs.
          </p>
          <Button
            onClick={onBookCall}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl group"
          >
            Book a Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}