import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Clock, 
  Target, 
  CheckCircle2, 
  Database,
  FileText,
  Search,
  Eye,
  Bot,
  Target as TargetIcon
} from 'lucide-react';
import { useCalendly } from '@/hooks/useCalendly';

interface CaseStudyData {
  id: string;
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  timeline: string;
  teamSize: string;
  category: string;
  image: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  keyFeatures: string[];
  learnings: string[];
}

const caseStudiesData: Record<string, CaseStudyData> = {
  'qa-chatbot-vector-db': {
    id: 'qa-chatbot-vector-db',
    icon: Database,
    title: 'Q&A Chatbot with Vector Database',
    subtitle: 'Intelligent semantic search and context-aware responses',
    description: 'Built an advanced Q&A system using Qdrant vector database for semantic search, enabling natural language queries with highly accurate, context-aware responses.',
    challenge: 'The client needed an intelligent customer support system that could understand natural language queries and provide accurate answers from their extensive knowledge base. Traditional keyword-based search was failing to capture semantic meaning and context.',
    solution: 'We implemented a sophisticated vector database solution using Qdrant, combined with advanced NLP models for semantic understanding. The system converts both queries and knowledge base content into high-dimensional vectors, enabling semantic similarity matching.',
    results: [
      'Reduced support queries by 70% through accurate self-service',
      'Achieved 95% accuracy in response relevance',
      'Cut average response time from 24 hours to under 30 seconds',
      'Increased customer satisfaction scores by 40%'
    ],
    technologies: ['Qdrant Vector DB', 'Python', 'Django', 'NLP', 'OpenAI API', 'PostgreSQL', 'Redis', 'Docker'],
    timeline: '3 months',
    teamSize: '4 developers',
    category: 'AI/ML',
    image: '/lovable-uploads/742334e5-8095-4ec8-9210-39132715718b.png',
    metrics: [
      { label: 'Query Accuracy', value: '95%', description: 'Response relevance score' },
      { label: 'Support Reduction', value: '70%', description: 'Decrease in manual tickets' },
      { label: 'Response Time', value: '<30s', description: 'Average query response' },
      { label: 'User Satisfaction', value: '4.8/5', description: 'Customer rating' }
    ],
    keyFeatures: [
      'Semantic search with vector similarity',
      'Context-aware response generation',
      'Multi-language support',
      'Real-time learning from interactions',
      'Admin dashboard for knowledge management',
      'API integration with existing systems'
    ],
    learnings: [
      'Vector databases significantly outperform traditional search for semantic queries',
      'Fine-tuning embedding models on domain-specific data improves accuracy by 25%',
      'Implementing feedback loops allows the system to continuously improve',
      'Proper chunking strategies are crucial for optimal retrieval performance'
    ]
  },
  'lms-video-summarization': {
    id: 'lms-video-summarization',
    icon: FileText,
    title: 'LMS Course Video Summarization',
    subtitle: 'Automated content analysis and intelligent summarization',
    description: 'Developed an AI-powered system that automatically analyzes educational videos and generates comprehensive summaries, key points, and interactive content for enhanced learning experiences.',
    challenge: 'Educational institutions were struggling with the time-intensive process of creating course summaries and key takeaways from video content. Manual summarization was taking educators 3-4 hours per video, limiting course development speed.',
    solution: 'We created an automated pipeline using advanced AI models for video transcription, content analysis, and intelligent summarization. The system extracts key concepts, generates timestamped summaries, and creates interactive elements.',
    results: [
      'Reduced content creation time by 80% - from 4 hours to 45 minutes',
      'Improved student engagement by 60% through structured summaries',
      'Increased course completion rates by 35%',
      'Generated 500+ automated summaries within first 6 months'
    ],
    technologies: ['OpenAI Whisper', 'GPT-4', 'Django', 'Celery', 'FFmpeg', 'PostgreSQL', 'AWS S3', 'Redis'],
    timeline: '4 months',
    teamSize: '5 developers',
    category: 'EdTech',
    image: '/lovable-uploads/742334e5-8095-4ec8-9210-39132715718b.png',
    metrics: [
      { label: 'Time Saved', value: '80%', description: 'Content creation efficiency' },
      { label: 'Engagement Boost', value: '60%', description: 'Student interaction increase' },
      { label: 'Completion Rate', value: '+35%', description: 'Course completion improvement' },
      { label: 'Accuracy Score', value: '92%', description: 'Summary quality rating' }
    ],
    keyFeatures: [
      'Automatic video transcription and analysis',
      'AI-generated chapter breakdowns',
      'Key concept extraction and highlighting',
      'Interactive timeline with summary points',
      'Multi-format export (PDF, HTML, slides)',
      'Integration with popular LMS platforms'
    ],
    learnings: [
      'Combining multiple AI models yields better results than single-model approaches',
      'Custom fine-tuning on educational content improves summarization quality',
      'Real-time processing requires careful resource management and queuing',
      'User feedback integration is essential for continuous model improvement'
    ]
  }
};

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const { openCalendlyPopup } = useCalendly();
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null);

  useEffect(() => {
    if (id && caseStudiesData[id]) {
      setCaseStudy(caseStudiesData[id]);
    }
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = caseStudy.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-custom flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <Button onClick={() => openCalendlyPopup()}>
            Book a Call
          </Button>
        </div>
      </header>

      <main className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-large">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <Badge variant="outline" className="mb-4">
              {caseStudy.category}
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {caseStudy.subtitle}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {caseStudy.timeline}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {caseStudy.teamSize}
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                {caseStudy.category}
              </div>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            {caseStudy.metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-gradient mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <Icon className="w-24 h-24 text-primary/60" />
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-primary" />
                    Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Results & Impact</CardTitle>
                <CardDescription>
                  Measurable outcomes and business impact achieved
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{result}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technology Stack & Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {caseStudy.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Key Learnings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Key Learnings & Insights</CardTitle>
                <CardDescription>
                  Technical insights and best practices discovered during development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {caseStudy.learnings.map((learning, index) => (
                    <div key={index} className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                      <p className="text-sm text-muted-foreground">{learning}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center p-8 rounded-2xl bg-gradient-card border border-border/50"
          >
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Have a Similar Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can apply our expertise and proven methodologies 
              to solve your specific challenges and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openCalendlyPopup()}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4"
              >
                Schedule a Consultation
              </Button>
              <Link to="/">
                <Button variant="outline" size="lg" className="px-8 py-4">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}