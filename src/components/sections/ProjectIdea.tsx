import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Lightbulb, FileText, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

interface ProjectIdeaProps {
  onBookCall: () => void;
}

export default function ProjectIdea({ onBookCall }: ProjectIdeaProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const { toast } = useToast();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (honeypot) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call - in production, this would send to your analysis endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Project idea submitted successfully!",
        description: "We'll analyze your project and send you a detailed system flow within 48 hours.",
      });
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        projectType: '', 
        budget: '', 
        timeline: '', 
        description: '' 
      });
    } catch (error) {
      toast({
        title: "Failed to submit project idea",
        description: "Please try again or book a call to discuss directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const features = [
    {
      icon: FileText,
      title: "System Flow Design",
      description: "Complete technical architecture and data flow diagrams"
    },
    {
      icon: Users,
      title: "Team Requirements",
      description: "Detailed breakdown of skills and roles needed"
    },
    {
      icon: CheckCircle,
      title: "Service Documents",
      description: "API specifications, database schemas, and deployment guides"
    }
  ];

  return (
    <section id="project-idea" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            <Star className="w-4 h-4 mr-2" />
            Free Analysis
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
            Share Your Project Idea,{' '}
            <span className="text-gradient">Get Free Analysis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tell us about your project vision and we'll prepare a comprehensive system flow, 
            technical requirements, and service documentation - completely free.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - What You Get */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-poppins mb-6">
                What You'll Receive
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start p-6 rounded-xl bg-muted/30 border border-border/50 hover:shadow-medium transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">{feature.title}</div>
                      <div className="text-muted-foreground text-sm">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-hero text-white">
              <div className="flex items-center mb-3">
                <Lightbulb className="w-6 h-6 mr-2" />
                <h4 className="text-xl font-bold font-poppins">
                  Need to Discuss Complex Requirements?
                </h4>
              </div>
              <p className="text-white/90 mb-6">
                For detailed discussions about complex projects, book a strategy call 
                with our technical leads.
              </p>
              <Button
                onClick={onBookCall}
                size="lg"
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Project Idea Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-large">
              <h3 className="text-2xl font-bold font-poppins mb-6">
                Tell Us About Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="h-12"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Modern Web Application</option>
                      <option value="ai-integration">AI-Powered Solution</option>
                      <option value="chatbot">Intelligent Chatbot</option>
                      <option value="analytics">Predictive Analytics</option>
                      <option value="document-ai">Document Intelligence</option>
                      <option value="saas">AI-Enhanced SaaS</option>
                      <option value="ecommerce">Smart E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush)</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="over-12-months">Over 12 months</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your project idea, key features, target users, technical requirements, and any specific challenges you're facing..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground h-12 font-semibold group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Analyzing Project...
                    </div>
                  ) : (
                    <>
                      Get Free Project Analysis
                      <Lightbulb className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll send you a detailed analysis within 48 hours. 
                  No commitment required.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}