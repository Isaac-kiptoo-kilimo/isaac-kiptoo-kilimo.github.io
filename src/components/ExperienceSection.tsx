import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading development of microservices architecture, mentoring junior developers, and implementing CI/CD pipelines.',
    technologies: ['React', 'Node.js', 'AWS', 'Kubernetes'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built and scaled the main product from MVP to serving 100k+ users. Implemented real-time features and optimized performance.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2019 - 2020',
    description: 'Developed responsive web applications for various clients, focusing on performance and accessibility.',
    technologies: ['React', 'TypeScript', 'SCSS', 'Webpack'],
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'Stanford University',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focus on software engineering and distributed systems.',
    technologies: [],
  },
];

export const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Career Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Work
              <span className="gradient-text"> Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in the tech industry
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative mb-12 last:mb-0 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                <div
                  className={`flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center glow-effect">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-6 h-6 text-primary" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-4rem)] pl-24 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}>
                    <div className="glass-card p-6 hover:border-primary/50 transition-all duration-300">
                      <span className="text-primary text-sm font-medium">{exp.period}</span>
                      <h3 className="font-display text-xl font-semibold mt-2 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      {exp.technologies.length > 0 && (
                        <div className={`flex flex-wrap gap-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
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
