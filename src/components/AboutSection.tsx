import { Code2, Coffee, Rocket, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { icon: Code2, value: '40+', label: 'Projects Completed' },
  { icon: Users, value: 'Global', label: 'Remote Worldwide' },
  { icon: Coffee, value: '4+', label: 'Years Experience' },
  { icon: Rocket, value: 'Full Stack', label: 'Engineer' },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Turning Ideas Into
              <span className="gradient-text"> Digital Reality</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className={`relative ${isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'}`}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden glass-card p-1">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center">
                        <span className="text-5xl">👨‍💻</span>
                      </div>
                      <p className="text-muted-foreground text-lg">
                        Passionate about clean code & great UX
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Content */}
            <div className={`${isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
              <h3 className="font-display text-2xl font-semibold mb-6">
                Full-Stack Engineer Based in Kenya
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack software engineer based in Kenya with 4+ years of 
                  hands-on experience designing and delivering secure, scalable web applications 
                  for global clients. Available for remote work worldwide.
                </p>
                <p>
                  My expertise spans Node.js, React, cloud architecture, and modern DevOps practices. 
                  I specialize in building production-ready systems with a focus on performance, 
                  reliability, and maintainability.
                </p>
                <p>
                  I'm passionate about solving complex problems, mentoring teams, and staying current 
                  with emerging technologies. When I'm not coding, you'll find me exploring new tech, 
                  contributing to open-source, or enjoying adventure travels.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 ${isVisible ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="font-display text-3xl font-bold mb-2 gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
