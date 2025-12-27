import { Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    content: "Alex is an exceptional developer who delivers high-quality work consistently. His attention to detail and problem-solving skills are outstanding.",
    author: "Sarah Johnson",
    role: "CTO, TechStartup",
    avatar: "👩‍💼",
  },
  {
    content: "Working with Alex was a game-changer for our project. He brought innovative solutions and exceeded our expectations at every turn.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCo",
    avatar: "👨‍💻",
  },
  {
    content: "Alex's expertise in full-stack development helped us launch our product 3 months ahead of schedule. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Founder, AppVenture",
    avatar: "👩‍🚀",
  },
];

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Clients
              <span className="gradient-text"> Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback from people I've had the pleasure of working with
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`glass-card p-8 relative group hover:border-primary/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  <Quote size={48} />
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
