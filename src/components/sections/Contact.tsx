import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

interface ContactProps {
  onBookCall: () => void;
}

export default function Contact({ onBookCall }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      const { submitContactForm } = await import('@/utils/contact');
      await submitContactForm(formData);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: (
          <span>
            Please try again or email us directly at{' '}
            <a href="mailto:contact@aspirantix.com" className="underline">
              contact@aspirantix.com
            </a>
          </span>
        ),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
            Ready to Build Something{' '}
            <span className="text-gradient">Amazing?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project requirements and see how our expertise 
            in Django, AI, and cloud technologies can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-poppins mb-6">
                Let's Start the Conversation
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:contact@aspirantix.com"
                  className="flex items-center p-4 rounded-xl bg-card border border-border/50 hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email Us</div>
                    <div className="text-muted-foreground">contact@aspirantix.com</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <div className="flex items-center p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Response Time</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Global Team</div>
                    <div className="text-muted-foreground">Remote-first, worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="p-6 rounded-2xl bg-gradient-hero text-white">
              <h4 className="text-xl font-bold font-poppins mb-3">
                Prefer to Talk Directly?
              </h4>
              <p className="text-white/90 mb-6">
                Book a 30-minute strategy call to discuss your project in detail. 
                No commitment required.
              </p>
              <Button
                onClick={onBookCall}
                size="lg"
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-large">
              <h3 className="text-2xl font-bold font-poppins mb-6">
                Send Us a Message
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

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and requirements..."
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
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours. 
                  For urgent matters, please use the email link above.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}