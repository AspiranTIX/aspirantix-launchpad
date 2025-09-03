import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Aspirantix transformed our customer service with their intelligent chatbot powered by OpenAI. The seamless integration and natural conversation flow increased our customer satisfaction by 85% and reduced response time dramatically.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    content: "Their AI-powered analytics platform built with React and Claude integration provides insights we never thought possible. The predictive capabilities have transformed our decision-making process and boosted revenue by 40%.",
    author: "Michael Rodriguez",
    role: "Head of Product",
    company: "DataSync Corp",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    content: "The intelligent document processing system they built using Gemini AI has revolutionized our workflow. What used to take hours of manual work now happens in minutes with incredible accuracy.",
    author: "Emily Watson",
    role: "Operations Director",
    company: "DocuTech Solutions",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    content: "Their modern web application with AI-powered features exceeded all expectations. The React/Next.js architecture is blazing fast, and the intelligent automation has streamlined our entire business process.",
    author: "David Kim",
    role: "Founder",
    company: "SmartBiz AI",
    rating: 5,
    image: "/api/placeholder/64/64"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
            <span className="text-gradient">Trusted by</span> Founders Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about 
            working with Aspirantix on their mission-critical projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-card border border-border/50 shadow-large">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-muted-foreground">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border/50 hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border/50 hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Thumbnail Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-primary bg-primary/10'
                    : 'border-border/50 bg-card hover:border-primary/50'
                }`}
              >
                <div className="text-sm font-medium text-foreground mb-1">
                  {testimonial.author}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.company}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Social Proof Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-6 rounded-2xl bg-muted/50 border border-border/30"
        >
          <div className="flex items-center justify-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent fill-current" />
              <span className="font-medium">4.9/5 Average Rating</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border" />
            <div className="font-medium">
              Trusted by 50+ Companies
            </div>
            <div className="hidden md:block w-px h-6 bg-border" />
            <div className="font-medium">
              100+ Projects Delivered
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}