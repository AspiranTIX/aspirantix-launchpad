import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
  onSeeWork: () => void;
}

export default function Hero({ onBookCall, onSeeWork }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
            7+ Years • 10+ Engineers • Production Ready
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight"
          >
            We build{' '}
            <span className="text-gradient relative">
              intelligent software
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
            {' '}with Django, AI, and Cloud
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            <p className="mb-4">
              With 7+ years of experience and a 10+ member team, we deliver products that scale.
            </p>
            <p>
              Our portfolio includes <span className="text-primary font-semibold">SendWIN</span>, <span className="text-primary font-semibold">ChatCoach</span>, <span className="text-primary font-semibold">MaltaCard</span>, and <span className="text-primary font-semibold">UPx</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={onBookCall}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-large hover:shadow-glow transition-all duration-300 group"
            >
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button
              onClick={onSeeWork}
              variant="outline"
              size="lg"
              className="border-2 border-primary/30 text-foreground hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              See Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/30"
          >
            {[
              { number: '20+', label: 'Projects Launched' },
              { number: '7+', label: 'Years Experience' },
              { number: '10+', label: 'Expert Engineers' },
              { number: '<2.5s', label: 'Average LCP' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}