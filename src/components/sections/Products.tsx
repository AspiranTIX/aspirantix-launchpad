import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CreditCard,
  ExternalLink,
  Globe,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const products = [
  {
    icon: Globe,
    name: "SendWIN",
    description:
      "Cloud-based browser solution for multi-login session management and secure browsing environments.",
    tags: ["Django", "AWS EC2", "Docker", "Redis", "WebRTC"],
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Multi-session Management",
      "Cloud Browser",
      "Secure Environments",
      "Team Collaboration",
    ],
    link: "#",
  },
  {
    icon: MessageSquare,
    name: "ChatCoach",
    description:
      "AI-powered coaching and training chatbot with personalized learning pathways and progress tracking.",
    tags: ["AI/ML", "NLP", "Django", "Vector DB", "PyTorch"],
    gradient: "from-purple-500 to-pink-500",
    features: [
      "AI Coaching",
      "Personalized Learning",
      "Progress Analytics",
      "Smart Recommendations",
    ],
    link: "#",
  },
  {
    icon: CreditCard,
    name: "MaltaCard",
    description:
      "Secure fintech solution built on Django with advanced cloud infrastructure and compliance features.",
    tags: ["FinTech", "Django", "PostgreSQL", "AWS", "Security"],
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Secure Payments",
      "Compliance Ready",
      "Risk Management",
      "Real-time Processing",
    ],
    link: "#",
  },
  {
    icon: TrendingUp,
    name: "UPx",
    description:
      "Smart analytics platform with ML-driven insights for business intelligence and data visualization.",
    tags: ["ML", "Analytics", "Django", "React", "Data Viz"],
    gradient: "from-orange-500 to-red-500",
    features: [
      "ML Insights",
      "Real-time Analytics",
      "Custom Dashboards",
      "Predictive Models",
    ],
    link: "#",
  },
];

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-sm font-medium"
          >
            Flagship Products
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
            Products That <span className="text-gradient">Scale & Deliver</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our flagship products showcase our expertise in building
            production-ready, scalable applications that solve real-world
            business challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden"
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border/50 hover:shadow-large transition-all duration-500 hover:-translate-y-2">
                  {/* Header with Icon and Gradient */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mr-4 shadow-medium`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-poppins text-foreground">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    {product.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                        asChild
                      >
                        <a
                          href={product.link}
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + tagIndex * 0.1,
                        }}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-hero"
        >
          <h3 className="text-2xl font-bold font-poppins text-white mb-4">
            Want to Build Something Similar?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our team can help you develop custom solutions tailored to your
            specific business needs. Let's discuss your project requirements.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
