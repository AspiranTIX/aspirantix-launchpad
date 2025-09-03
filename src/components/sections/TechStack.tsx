import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';

const techStack = [
  {
    category: 'Frontend Technologies',
    technologies: [
      { name: 'React', color: 'from-cyan-500 to-blue-500' },
      { name: 'Next.js', color: 'from-gray-800 to-gray-600' },
      { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
      { name: 'Tailwind CSS', color: 'from-cyan-500 to-teal-500' },
      { name: 'Framer Motion', color: 'from-pink-500 to-violet-500' },
      { name: 'Vite', color: 'from-purple-600 to-blue-600' }
    ]
  },
  {
    category: 'AI Services & APIs',
    technologies: [
      { name: 'OpenAI GPT', color: 'from-green-600 to-emerald-500' },
      { name: 'Claude AI', color: 'from-orange-600 to-red-500' },
      { name: 'Google Gemini', color: 'from-blue-600 to-purple-600' },
      { name: 'Anthropic API', color: 'from-purple-600 to-pink-500' },
      { name: 'Hugging Face', color: 'from-yellow-500 to-orange-500' },
      { name: 'Langchain', color: 'from-green-700 to-blue-600' }
    ]
  },
  {
    category: 'Backend & Database',
    technologies: [
      { name: 'Node.js', color: 'from-green-600 to-green-500' },
      { name: 'Express.js', color: 'from-gray-700 to-gray-500' },
      { name: 'PostgreSQL', color: 'from-blue-700 to-blue-500' },
      { name: 'MongoDB', color: 'from-green-600 to-green-700' },
      { name: 'Redis', color: 'from-red-600 to-red-500' },
      { name: 'Supabase', color: 'from-green-500 to-emerald-600' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    technologies: [
      { name: 'Vercel', color: 'from-gray-800 to-black' },
      { name: 'AWS', color: 'from-orange-600 to-orange-500' },
      { name: 'Docker', color: 'from-blue-600 to-cyan-500' },
      { name: 'GitHub Actions', color: 'from-gray-700 to-gray-900' },
      { name: 'Cloudflare', color: 'from-orange-500 to-yellow-500' }
    ]
  }
];

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="tech-stack" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            Technology Stack
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
            <span className="text-gradient">Proven Tools</span> for Modern Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge web technologies and AI services to build intelligent, 
            high-performance applications that scale with your business needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-6">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + techIndex * 0.1 
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl p-4 bg-card border border-border/50 hover:shadow-medium transition-all duration-300">
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Tech Name */}
                      <div className="relative z-10">
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                      
                      {/* Decorative Element */}
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${tech.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-card border border-border/50"
        >
          <h3 className="text-2xl font-bold font-poppins mb-4">
            Our Technology Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-2">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-foreground">Performance First</h4>
              <p className="text-sm text-muted-foreground">
                Every tool we choose is optimized for speed and efficiency in production.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-semibold text-foreground">Battle Tested</h4>
              <p className="text-sm text-muted-foreground">
                We use technologies with proven track records in enterprise environments.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl mb-2">📈</div>
              <h4 className="font-semibold text-foreground">Future Proof</h4>
              <p className="text-sm text-muted-foreground">
                Our stack adapts and scales with your growing business needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}