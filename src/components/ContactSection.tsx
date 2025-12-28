import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'isaackilimok2@gmail.com', href: 'mailto:isaackilimok2@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+254 (710) 443-888', href: 'tel:+254710443888' },
  { icon: MapPin, label: 'Location', value: 'Nairobi,KE , Remote Worldwide',  href: null },
];

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Work
              <span className="gradient-text"> Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className={`grid md:grid-cols-3 gap-6 mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display text-xl font-semibold mb-2">{info.label}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {info.label === 'Email' && 'Drop me a line anytime'}
                  {info.label === 'Phone' && 'Call me for immediate response'}
                  {info.label === 'Location' && 'Available for remote work'}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="inline-block px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 font-medium hover:text-primary hover:border-primary/50 transition-all duration-200"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Ready to Start CTA Section */}
          <div className={`text-center mb-16 py-12 ${isVisible ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you need a full-stack web application, DevOps consulting, or just want to discuss your 
              next big idea, I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:isaackilimok2@gmail.com">
                <Button variant="hero" size="lg" className="gap-2">
                  <Mail size={18} />
                  Send Email
                </Button>
              </a>
              <a href="tel:+254710443888">
                <Button variant="heroOutline" size="lg" className="gap-2">
                  <Phone size={18} />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`max-w-2xl mx-auto ${isVisible ? 'animate-slide-in-up delay-400' : 'opacity-0'}`}>
            <h3 className="font-display text-2xl font-semibold mb-8 text-center">Or send me a message</h3>
            <form onSubmit={handleSubmit} className="glass-card p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
};
