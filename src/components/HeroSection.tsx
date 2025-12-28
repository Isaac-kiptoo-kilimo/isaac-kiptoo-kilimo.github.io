import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import isaacPhoto from '@/assets/isaac_photo1.png';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Isaac-kiptoo-kilimo', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/isaac-kiptoo-kilimo/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const stats = [
  { label: 'Projects', value: '40+' },
  { label: 'Experience', value: '4+ yrs' },
];

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: 'var(--gradient-hero)' }}
      />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left space-y-8">
            {/* Animated Badge */}
            <div className="animate-fade-up pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 hover:border-primary/60 transition-all duration-300 group cursor-default">
                <Sparkles size={16} className="text-primary animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Open for exciting opportunities
                </span>
              </div>
            </div>

            {/* Main Heading - Premium Typography */}
            <div className="animate-fade-up delay-100 space-y-4">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                <span className="block text-foreground">Full Stack</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-purple-600 bg-clip-text text-transparent">
                  Software Engineer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-md">
                Building scalable solutions with modern tech
              </p>
            </div>

            {/* Premium Description */}
            <p className="animate-fade-up delay-200 text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
              I specialize in architecting elegant, high-performance applications. From React & TypeScript to cloud infrastructure, I transform complex problems into intuitive solutions that users love.
            </p>

            {/* Premium CTA Buttons */}
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-start gap-4 pt-2">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection('#projects')}
                className="group relative overflow-hidden px-8"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Portfolio
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection('#contact')}
                className="px-8 hover:bg-primary/5"
              >
                Get In Touch
              </Button>
            </div>

            {/* Stats Section */}
            <div className="animate-fade-up delay-400 grid grid-cols-2 gap-8 pt-2">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium mt-1 group-hover:text-primary transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Links - Premium Style */}
            <div className="animate-fade-up delay-500 flex items-center gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-lg bg-secondary/30 border border-border/50 text-muted-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="group-hover:scale-125 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Premium Image */}
          <div className="animate-fade-up delay-300 flex items-center justify-center relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-purple-600/30 rounded-3xl blur-3xl opacity-30 animate-pulse" />
            
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden group">
              {/* Premium border with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/30 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                <div className="absolute inset-[2px] bg-background rounded-3xl" />
              </div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50">
                <img
                  src={isaacPhoto}
                  alt="Isaac Kiptoo Kilimo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Premium overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-3xl" />
              
              {/* Accent lights */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};
