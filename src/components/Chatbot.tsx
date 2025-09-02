import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you with our services today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Our AI solutions are designed to transform businesses through intelligent automation and data-driven insights.",
        "I'd be happy to help you learn more about our services. We specialize in machine learning, computer vision, and predictive analytics.",
        "Excellent! Our case studies show impressive results - like 94% accuracy in object detection and 85% time savings in document processing.",
        "Let me connect you with our team for a personalized consultation. Would you like to schedule a call to discuss your specific needs?",
        "Our expertise covers everything from chatbots and LMS solutions to advanced YOLO detection systems. What specific challenge are you facing?",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-16 w-16 rounded-full bg-gradient-hero shadow-glow hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] transition-all duration-300 hover:scale-110 group"
            >
              <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              height: isMinimized ? 60 : 500 
            }}
            exit={{ scale: 0.8, opacity: 0, y: 100 }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
            className="fixed bottom-6 right-6 w-96 z-50"
          >
            <Card className="overflow-hidden bg-card/95 backdrop-blur-xl border-border/50 shadow-large">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-hero border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-white font-poppins font-semibold">AI Assistant</h3>
                    <p className="text-white/80 text-sm">Online now</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
                  >
                    <Minimize2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-card">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex items-start space-x-2 max-w-[80%] ${
                            message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                          }`}>
                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.isUser 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-accent text-accent-foreground'
                            }`}>
                              {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            </div>
                            
                            {/* Message Bubble */}
                            <div className={`rounded-2xl px-4 py-3 shadow-soft ${
                              message.isUser
                                ? 'bg-primary text-primary-foreground rounded-br-md'
                                : 'bg-card text-card-foreground rounded-bl-md border border-border/50'
                            }`}>
                              <p className="text-sm leading-relaxed">{message.text}</p>
                              <p className={`text-xs mt-1 opacity-70 ${
                                message.isUser ? 'text-primary-foreground' : 'text-muted-foreground'
                              }`}>
                                {message.timestamp.toLocaleTimeString([], { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex justify-start"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                              <Bot className="w-4 h-4" />
                            </div>
                            <div className="bg-card border border-border/50 rounded-2xl rounded-bl-md px-4 py-3">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
                                     style={{ animationDelay: '0s' }} />
                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
                                     style={{ animationDelay: '0.1s' }} />
                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
                                     style={{ animationDelay: '0.2s' }} />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-border/50 bg-background/50 backdrop-blur-sm">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSendMessage(input);
                        }}
                        className="flex space-x-2"
                      >
                        <Input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type your message..."
                          className="flex-1 bg-background/80 border-border/50 focus:border-primary focus:ring-primary/20"
                          disabled={isTyping}
                        />
                        <Button
                          type="submit"
                          size="sm"
                          disabled={!input.trim() || isTyping}
                          className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 hover:shadow-glow transition-all duration-300"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}