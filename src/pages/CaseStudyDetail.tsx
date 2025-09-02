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
    subtitle: 'Intelligent Document Analysis & Query System',
    description: 'Built an advanced Q&A system powered by vector database technology and retrieval pipelines, turning unstructured data across multiple formats (PDF, CSV, DOCX, HTML, TXT) into a semantic knowledge base with real-time intelligent responses.',
    challenge: 'Organizations struggled to extract meaningful insights from vast, unstructured data scattered across formats like PDF, CSV, DOCX, HTML, and TXT. Traditional keyword-based search failed to capture semantic meaning, leading to information silos, hours of manual document review, poor query accuracy, scalability challenges with large datasets, and dependence on subject matter experts for routine queries. The need: a real-time intelligent system capable of understanding and retrieving knowledge across multiple document types.',
    solution: 'We developed a comprehensive Q&A chatbot powered by vector database technology with a sophisticated architecture: Data Ingestion Layer for bulk processing of multiple formats → LangChain preprocessing & parsing → OpenAI Small-3 embeddings for high-quality vectors → Qdrant for similarity search & storage → Dual Retrieval System (hybrid + semantic) → AI Response Generation via integrated Gemini + OpenAI through LangChain → Modern Django (async) backend with Next.js frontend.',
    results: [
      'Reduced query response time from hours to seconds',
      'Achieved 92% query accuracy with semantic + hybrid retrieval',
      'Handled thousands of documents without performance degradation',
      'Boosted team productivity with 85% time savings vs manual search',
      'Knowledge democratization - insights accessible across teams',
      'Faster decision-making with real-time access to data',
      'Optimized expert resources with less reliance on SMEs',
      'Unlocked document value - previously unused data became searchable'
    ],
    technologies: ['Django (async)', 'LangChain', 'Qdrant Vector DB', 'OpenAI Small-3', 'Gemini', 'GPT models', 'Next.js (SSR)', 'PostgreSQL', 'Multi-format loaders'],
    timeline: '4 months',
    teamSize: '6 developers',
    category: 'AI/ML',
    image: '/lovable-uploads/742334e5-8095-4ec8-9210-39132715718b.png',
    metrics: [
      { label: 'Query Accuracy', value: '92%', description: 'Semantic relevance score' },
      { label: 'Time Saved', value: '85%', description: 'Productivity gain vs manual search' },
      { label: 'Response Time', value: '<2s', description: 'Average query response' },
      { label: 'User Satisfaction', value: '4.7/5', description: 'Customer rating' }
    ],
    keyFeatures: [
      'Multi-format ingestion (PDF, CSV, DOCX, HTML, TXT)',
      'Hybrid retrieval (semantic + keyword search)',
      'Real-time, context-aware responses',
      'Bulk document upload & automated content chunking',
      'Intuitive chat interface with streaming responses',
      'Document source attribution for trust & transparency',
      'Scalable async architecture for high concurrency',
      'Advanced preprocessing pipelines for accuracy'
    ],
    learnings: [
      'OpenAI Small-3 embeddings provided best balance of cost vs accuracy',
      'Hybrid retrieval outperformed single-method approaches by combining semantic + keyword precision',
      'Django\'s async processing was critical for scalability and handling high concurrency',
      'Robust preprocessing pipelines directly improved accuracy and search relevance',
      'Qdrant proved ideal for real-time similarity search with excellent performance',
      'LangChain simplified multi-model orchestration and integration complexity',
      'Simple, intuitive UX drove fast adoption across teams',
      'Metadata enrichment significantly boosted search relevance and user satisfaction'
    ]
  },
  'lms-video-summarization': {
    id: 'lms-video-summarization',
    icon: FileText,
    title: 'LMS Course Video Summarization',
    subtitle: 'AI-Powered Video Content Discovery & Summarization Platform',
    description: 'Built an intelligent video summarization platform that transforms visual course content into searchable, summarizable knowledge with tiered AI processing for both free and premium users.',
    challenge: 'Educational institutions and online learning platforms struggled with managing massive video libraries: Content Overload (thousands of videos made navigation overwhelming), Time-Intensive Review (manual viewing wasted hours), Poor Discovery (keyword search couldn\'t capture video context), Learning Inefficiency (students lacked quick previews), Scalability Issues (manual curation didn\'t scale), and Accessibility Barriers (visual content wasn\'t searchable). The goal: build an intelligent, scalable system to automatically understand, summarize, and recommend video content for both free and premium users.',
    solution: 'We designed an AI-powered video summarization platform with intelligent processing: Multi-Platform Integration (YouTube + hosting services) → Frame Extraction (AWS S3) → Tiered AI Processing (Free: BLIP + Mistral embeddings; Premium: Gemini Vision + embeddings) → Vector Search Engine (Weaviate) → Django (async) + Celery backend → React frontend with WebSockets. Free users get cost-efficient processing while premium users enjoy superior Gemini Vision analysis and lightning-fast API access.',
    results: [
      '<2s search across millions of video entries',
      '95% reduction in manual video curation effort',
      'Boosted course discovery & completion rates significantly',
      'Optimized costs with successful tiered freemium model',
      'Students quickly identify relevant content without full viewing',
      'Hidden course materials gained visibility and discoverability',
      'Visual content became fully searchable and accessible',
      'Instructors easily discovered supplementary materials',
      'Successful freemium → premium conversion rates',
      'Automated workflows improved operational efficiency',
      'Personalized recommendations drove user retention',
      'Differentiated platform with advanced AI capabilities'
    ],
    technologies: ['BLIP (free tier)', 'Gemini Vision (premium)', 'Mistral embeddings', 'Gemini embeddings', 'Django (async)', 'Celery', 'Weaviate Vector DB', 'PostgreSQL', 'React', 'WebSockets', 'AWS S3', 'YouTube API'],
    timeline: '6 months',
    teamSize: '8 developers',
    category: 'EdTech & AI',
    image: '/lovable-uploads/742334e5-8095-4ec8-9210-39132715718b.png',
    metrics: [
      { label: 'Summarization Accuracy', value: '88%', description: 'AI content analysis precision' },
      { label: 'Search Response Time', value: '<2s', description: 'Video search across millions' },
      { label: 'Time Saved', value: '65%', description: 'vs Manual Review' },
      { label: 'User Satisfaction', value: '4.6/5', description: 'Platform rating' }
    ],
    keyFeatures: [
      'Multi-platform video ingestion & bulk import',
      'Intelligent frame analysis (BLIP + Gemini Vision)',
      'Sub-second semantic search with Weaviate',
      'Personalized summarization with adaptive length',
      'Smart recommendations based on behavior + content similarity',
      'Real-time progress updates during video analysis',
      'Tiered freemium experience (BLIP vs Gemini)',
      'Mobile-optimized responsive UI with WebSockets'
    ],
    learnings: [
      'BLIP provided optimal cost vs performance balance for free tier users',
      'Self-hosted Mistral embeddings significantly reduced API costs vs external services',
      'Celery task queuing prevented UI blocking during intensive video analysis',
      'Weaviate delivered exceptional performance for real-time similarity search at scale',
      'Async Django architecture proved crucial for handling concurrent video processing requests',
      'AWS S3 scaled seamlessly for storing millions of extracted video frames',
      'Task queuing & intelligent caching strategies dramatically improved response times',
      'Freemium model with clear premium differentiation drove both adoption and conversions',
      'Early cost-planning and resource optimization enabled sustainable scaling',
      'Real-time status updates and mobile optimization were critical for user engagement',
      'Continuous feedback loops significantly improved recommendation accuracy over time'
    ]
  },
  'pdf-book-chatbot-lms': {
    id: 'pdf-book-chatbot-lms',
    icon: FileText,
    title: 'PDF Book Chatbot for LMS',
    subtitle: 'Intelligent PDF Document Analysis & Interactive Learning Assistant',
    description: 'Built a sophisticated PDF chatbot system that combines advanced parsing, multimodal content understanding, and conversational AI to transform static PDFs into interactive, conversational learning companions with real-time question answering capabilities.',
    challenge: 'Educational institutions and learners faced major obstacles with PDF-based course materials: Content Accessibility (PDFs with mixed formats like text, images, tables were hard to navigate), Inefficient Research (students wasted hours searching lengthy PDFs manually), Multimodal Content Loss (visual data like charts and diagrams was ignored by traditional readers), Knowledge Fragmentation (content scattered across multiple PDFs created silos), Static Interaction (PDFs didn\'t allow questioning or interactive exploration), Citation Difficulty (referencing and maintaining academic integrity was cumbersome), and Format Variability (different PDF encodings led to inconsistent extraction quality). The need: build an intelligent system that transforms static PDFs into interactive, conversational learning companions.',
    solution: 'We built a comprehensive PDF chatbot system with Advanced PDF Processing Pipeline: Dual extraction (Unstructured + Gemini Vision) for text + images → AI-powered image recognition with inline descriptions → Structure-preserving parsing for layout and context → Universal format support across all PDF encodings. Intelligent Knowledge System: Weaviate vector DB for semantic organization → Hybrid retrieval (semantic + keyword search) → OpenAI Small-3 embeddings for contextual accuracy → Page-level reference tracking for integrity. Conversational AI Interface: Multi-model integration (GPT, Claude, Gemini) → Comparative AI responses for deeper insights → Model auto-selection based on query type → Export options (PDF, DOCX, TXT, JSON). Streamlined Architecture: Django backend with templating & async workflows → SQL database for user sessions + metadata → Optimized real-time query pipeline.',
    results: [
      'Sub-second responses for complex multimodal queries',
      '96% extraction accuracy across varied PDF formats',
      'Full visual content capture with AI-generated image descriptions',
      'Hybrid retrieval outperformed traditional PDF search by 40%',
      '70%+ time savings in concept research and study preparation',
      'Improved comprehension through interactive Q&A learning',
      'Enhanced accessibility with visual content descriptions',
      'Transformed passive reading into active learning experiences',
      'Intuitive natural language querying for complex documents',
      'Multi-perspective answers from multiple AI models',
      'Page-level citations ensured academic trust and integrity',
      'Multi-format export supported diverse study workflows'
    ],
    technologies: ['Unstructured library', 'Gemini Vision', 'OpenAI Small-3 embeddings', 'GPT', 'Claude', 'Gemini', 'Weaviate Vector DB', 'Django', 'SQL database', 'Hybrid retrieval', 'Custom parsing', 'Multi-model APIs'],
    timeline: '5 months',
    teamSize: '7 developers',
    category: 'EdTech & AI',
    image: '/lovable-uploads/742334e5-8095-4ec8-9210-39132715718b.png',
    metrics: [
      { label: 'Content Extraction', value: '96%', description: 'Accuracy across PDF formats' },
      { label: 'Query Response Time', value: '<1.5s', description: 'Average response time' },
      { label: 'Research Time Saved', value: '78%', description: 'vs Manual PDF search' },
      { label: 'User Satisfaction', value: '4.8/5', description: 'Overall platform rating' }
    ],
    keyFeatures: [
      'Dual text + image PDF extraction with universal format support',
      'Multimodal integration with inline AI-generated descriptions',
      'Semantic + keyword hybrid retrieval for optimal accuracy',
      'Page-level referencing & citations for academic integrity',
      'Multi-model conversational AI interface (GPT, Claude, Gemini)',
      'Export to PDF, DOCX, TXT, JSON formats',
      'Real-time interactive Q&A with document context',
      'Structure-preserving parsing for layout and context retention'
    ],
    learnings: [
      'Dual extraction (Unstructured + Gemini Vision) significantly outperformed single-method approaches',
      'Image description integration boosted comprehension & accessibility for visual learners',
      'Hybrid search improved relevance by 40% compared to semantic-only approaches',
      'Weaviate proved ideal for real-time semantic search with excellent performance',
      'Efficient pipelines enabled real-time interactions without compromising accuracy',
      'SQL + Vector DB architecture split optimized both storage and retrieval performance',
      'Django templating streamlined development and maintained code organization',
      'Natural language queries transformed user engagement and learning outcomes',
      'Page-level citations built essential trust with researchers and academic users',
      'Export features became critical for user workflows and adoption',
      'Users highly valued multi-AI perspectives for complex queries',
      'Smart chunking balanced context preservation with response speed',
      'OpenAI Small-3 provided the best cost-performance ratio for embeddings',
      'Caching strategies significantly reduced response latency for common queries',
      'Robust error handling was essential for managing corrupted or complex PDFs'
    ]
  },
  'yolo-object-detection': {
    id: 'yolo-object-detection',
    icon: Eye,
    title: 'YOLO Object Detection System',
    subtitle: 'Hybrid AI-Powered Fish Species Identification Platform',
    description: 'Developed a revolutionary hybrid AI detection system combining YOLO\'s precise object detection capabilities with CLIP\'s zero-shot classification power, creating an adaptive fish species identification platform optimized for underwater environments.',
    challenge: 'Marine research and underwater monitoring faced critical obstacles in automated fish species identification and real-time aquatic environment analysis: Species Recognition Complexity - Traditional object detection models struggled with the diverse morphology and behavior patterns of marine life. Underwater Environment Variables - Challenging conditions including varying light levels, water clarity, and dynamic underwater scenes affected detection accuracy. Real-Time Processing Requirements - Marine monitoring applications demanded immediate species identification for ecological research and commercial fishing. Limited Training Data - Insufficient labeled underwater imagery for comprehensive model training across diverse fish species. Scalability Constraints - Existing solutions couldn\'t handle large-scale deployment across multiple underwater monitoring stations. Classification Generalization - Models failed to identify new or rare species not present in original training datasets. Infrastructure Limitations - High computational requirements for accurate detection models exceeded typical deployment environments. The marine research community needed an intelligent system capable of accurately identifying fish species in real-time while adapting to new species without extensive retraining.',
    solution: 'Developed a revolutionary hybrid AI detection system combining YOLO\'s precise object detection capabilities with CLIP\'s zero-shot classification power, creating an adaptive fish species identification platform optimized for underwater environments. Hybrid AI Architecture: YOLO Integration for advanced object detection with precise fish localization and bounding box generation, CLIP Integration for zero-shot classification enabling identification of previously unseen fish species, Hybrid Processing with seamless coordination between detection and classification models for comprehensive species analysis, and Adaptive Learning through continuous model improvement via real-time data pipeline integration. Advanced Data Pipeline: Real-Time Processing with continuous data ingestion and model refinement system, Underwater Simulation with specialized image augmentation replicating underwater lighting, turbidity, and environmental conditions, Quality Enhancement through automated image preprocessing for optimal detection performance, and Feedback Integration with user validation loops for continuous accuracy improvement. Cloud Infrastructure: AWS EC2 high-performance GPU instances for model training and inference, AWS S3 scalable storage for training datasets and model artifacts, AWS Lambda serverless processing for lightweight inference tasks and data preprocessing, and Auto-Scaling with dynamic resource allocation based on detection workload demands.',
    results: [
      'Achieved 94% species detection accuracy across diverse underwater conditions',
      '35% increase in platform adoption across marine research institutions',
      'Real-time detection capabilities enabling live monitoring and immediate classification',
      'Zero-shot classification enabled identification of new species without model retraining',
      'Automated species identification reduced manual analysis time by 80%',
      'Enhanced data collection capabilities accelerated marine biodiversity studies',
      'AWS deployment achieved optimal performance-to-cost ratio with 40% cost reduction',
      'Successfully deployed across multiple monitoring stations with consistent performance',
      'Improved model robustness in challenging underwater conditions through advanced augmentation',
      'Real-time data pipeline enabled ongoing model enhancement without service interruption'
    ],
    technologies: ['YOLO (You Only Look Once)', 'CLIP (Contrastive Language-Image Pre-training)', 'PyTorch', 'AWS EC2', 'AWS S3', 'AWS Lambda', 'Computer Vision', 'TensorRT', 'ONNX', 'Docker', 'RESTful APIs'],
    timeline: '6 months',
    teamSize: '8 developers',
    category: 'AI/ML & Computer Vision',
    image: '/lovable-uploads/742334e5-8095-4ec8-9210-39132715718b.png',
    metrics: [
      { label: 'Detection Accuracy', value: '94%', description: 'Species identification precision' },
      { label: 'User Adoption', value: '35%', description: 'Platform growth increase' },
      { label: 'Processing Speed', value: '<200ms', description: 'Real-time response time' },
      { label: 'Performance Rating', value: '4.9/5', description: 'System satisfaction score' }
    ],
    keyFeatures: [
      'Dual-Model Architecture combining YOLO detection with CLIP classification',
      'Zero-shot species identification without additional training requirements',
      'Advanced underwater environment simulation and processing',
      'Real-time data pipeline with continuous learning capabilities',
      'Auto-scaling cloud infrastructure with cost optimization',
      'Comprehensive species database with behavioral pattern recognition',
      'Multi-scale detection across different fish sizes and distances',
      'Confidence scoring for both detection and classification accuracy',
      'Global deployment with high-availability redundancy',
      'User validation workflows for continuous model improvement'
    ],
    learnings: [
      'Hybrid model architecture combining YOLO and CLIP provided superior performance compared to single-model approaches',
      'CLIP\'s zero-shot classification capability eliminated the need for extensive retraining when adding new species',
      'Specialized underwater augmentation techniques significantly improved model robustness in challenging marine environments',
      'AWS cloud infrastructure provided optimal balance of performance, scalability, and cost efficiency',
      'Careful coordination between detection and classification models was crucial for system coherence',
      'High-quality underwater simulation directly correlated with real-world performance improvements',
      'Real-time data processing enabled continuous model enhancement without manual intervention',
      'Dynamic scaling prevented over-provisioning while maintaining performance standards',
      'Real-time processing capabilities were primary drivers of user adoption in research applications',
      'High confidence scores were essential for species identification in scientific research contexts',
      'User validation loops significantly improved model accuracy and reliability over time',
      'Comprehensive system monitoring enabled proactive optimization and issue resolution',
      'Systematic model versioning enabled safe updates and rollback capabilities when needed',
      'Robust access controls were essential for protecting sensitive marine research data'
    ]
  },
  'predictive-analytics-platform': {
    id: 'predictive-analytics-platform',
    icon: Target,
    title: 'Predictive Analytics Platform',
    subtitle: 'Advanced Stock Price Forecasting & Anomaly Detection System',
    description: 'Developed a sophisticated predictive analytics platform leveraging advanced deep learning architectures and anomaly detection algorithms to provide accurate stock price forecasting and market insight generation for informed financial decision-making.',
    challenge: 'Financial markets present unprecedented complexity for investors, traders, and financial institutions seeking to make data-driven investment decisions: Market Volatility Unpredictability - Traditional analysis methods failed to capture complex patterns in stock price movements and market fluctuations. Information Overload - Vast amounts of financial data created analysis paralysis, making it difficult to identify actionable insights. Timing Critical Decisions - Split-second trading decisions required real-time predictive capabilities that manual analysis couldn\'t provide. Risk Management Complexity - Inability to detect anomalous market behavior led to significant financial losses during market disruptions. Historical Data Utilization - Decades of valuable market data remained underutilized due to lack of sophisticated analytical tools. Model Accuracy Requirements - Financial predictions demanded extremely high precision, as small errors could result in substantial monetary losses. Real-Time Processing Needs - Markets operate continuously, requiring systems capable of processing and analyzing data in real-time. Financial professionals needed an intelligent system that could accurately predict stock movements while identifying potential market anomalies before they impact investment portfolios.',
    solution: 'Developed a sophisticated predictive analytics platform leveraging advanced deep learning architectures and anomaly detection algorithms to provide accurate stock price forecasting and market insight generation. Advanced Deep Learning Architecture: LSTM Implementation with Long Short-Term Memory networks for capturing long-term dependencies in stock price patterns, GRU Integration with Gated Recurrent Unit models for enhanced computational efficiency and pattern recognition, Comparative Analysis through dual-model approach enabling performance comparison and ensemble prediction capabilities, and Sequential Processing with time-series optimization for financial data temporal relationship analysis. Comprehensive Data Engineering Pipeline: Historical Data Integration with 14 years of Apple Inc. stock data from Yahoo Finance providing robust training foundation, Multi-Dimensional Features with integration of Open, Close, High, and Low prices for comprehensive market analysis, Data Preprocessing through advanced normalization and feature engineering for optimal model performance, and Quality Assurance with automated data validation and cleaning processes ensuring prediction accuracy. Intelligent Anomaly Detection System: Market Fluctuation Identification with real-time detection of significant price movements and market disruptions, Percentage Variance Analysis through mathematical calculation of price midpoint differences for anomaly scoring, Alert Generation with automated notification system for unusual market behavior detection, and Risk Assessment through quantitative risk evaluation based on historical patterns and current market conditions.',
    results: [
      'GRU model achieved superior Mean Squared Error of 3.7516e-4, outperforming traditional forecasting methods',
      'LSTM model delivered competitive MSE of 7.0807e-4, providing robust alternative prediction capability',
      'Successfully detected 95% of significant market fluctuations before major price movements',
      'Real-time prediction generation enabling immediate response to market changes',
      'Sophisticated algorithms minimized false alerts while maintaining high sensitivity to genuine anomalies',
      'Improved investment decision accuracy through data-driven insights and predictions',
      'Early anomaly detection enabled proactive risk management and portfolio protection',
      'Automated analysis eliminated hours of manual market research and data processing',
      'Advanced predictive capabilities provided strategic advantage in fast-moving financial markets',
      'System identified recurring market patterns invisible to traditional analysis methods'
    ],
    technologies: ['LSTM Networks', 'GRU Models', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'Django Framework', 'PostgreSQL', 'Yahoo Finance API', 'NumPy', 'Pandas', 'Chart.js', 'D3.js', 'RESTful APIs'],
    timeline: '8 months',
    teamSize: '6 developers',
    category: 'AI/ML & FinTech',
    image: '/lovable-uploads/742334e5-8095-4ec8-9210-39132715718b.png',
    metrics: [
      { label: 'GRU MSE', value: '3.75e-4', description: 'Mean Squared Error performance' },
      { label: 'Anomaly Detection', value: '95%', description: 'Market disruption identification accuracy' },
      { label: 'Prediction Speed', value: '<500ms', description: 'Real-time response time' },
      { label: 'User Satisfaction', value: '4.7/5', description: 'Platform satisfaction score' }
    ],
    keyFeatures: [
      'Dual deep learning architecture with LSTM and GRU models',
      'Real-time anomaly detection with mathematical precision scoring',
      'Comprehensive 14-year historical data integration',
      'Interactive dashboards with real-time prediction visualization',
      'Advanced feature engineering with OHLC price integration',
      'Automated alert system for unusual market behavior',
      'Ensemble prediction capabilities for enhanced accuracy',
      'Scalable Django architecture supporting concurrent users',
      'PostgreSQL optimization for high-performance time-series data',
      'Export functionality for comprehensive reporting and analysis'
    ],
    learnings: [
      'GRU models demonstrated superior performance with 47% lower MSE compared to LSTM architecture',
      '14-year historical dataset provided sufficient depth for robust pattern recognition and model training',
      'Integration of multiple price points (OHLC) significantly improved prediction accuracy over single-price models',
      'Careful regularization techniques were essential for preventing model overfitting to historical data',
      'Django framework provided optimal balance of development speed and production performance requirements',
      'PostgreSQL optimization was crucial for handling large-scale time-series data efficiently and reliably',
      'Real-time streaming data integration required careful architecture planning for consistent performance',
      'Production deployment required sophisticated model versioning and rollback capabilities for reliability',
      'Careful tuning of anomaly detection thresholds balanced sensitivity with false positive rates effectively',
      'Market context significantly influenced anomaly significance based on trading volumes and conditions',
      'Anomaly patterns evolved over time, requiring adaptive detection algorithms for continued effectiveness',
      'Incorporating user feedback substantially improved anomaly detection accuracy and system reliability',
      'Stock price movements are influenced by numerous factors beyond historical price data patterns',
      'Different time horizons required distinct modeling approaches and optimization strategies for accuracy',
      'Prediction confidence intervals were crucial for effective risk management integration in practice',
      'Clear, intuitive charts were essential for user adoption and effective decision-making processes'
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