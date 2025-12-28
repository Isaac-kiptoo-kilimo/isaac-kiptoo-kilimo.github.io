import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Griffin Global Technologies',
    period: 'April 2024 - Present',
    description: 'Designing and delivering secure, scalable web applications. Building backend microservices with Node.js and C#, implementing cloud-native architecture on AWS, and managing CI/CD pipelines. Integrating third-party APIs for payments, communications, and reporting.',
    technologies: ['Node.js', 'Express.js', 'NestJS', 'C#', 'ASP.NET', 'React.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    type: 'work',
    title: 'Software Developer',
    company: 'Teach2Give',
    period: 'October 2023 - April 2024',
    description: 'Led product team in translating business requirements into sprint tasks. Designed backend APIs with Node.js frameworks and implemented dynamic web interfaces with React, Next.js, and Redux. Developed scalable database schemas and optimized queries.',
    technologies: ['Node.js', 'Express.js', 'NestJS', 'React.js', 'Next.js', 'Redux', 'MySQL', 'MongoDB', 'Tailwind CSS'],
  },
  {
    type: 'work',
    title: 'Junior Software Engineer',
    company: 'Rieti',
    period: 'September 2022 - October 2023',
    description: 'Collaborated on product roadmap development. Designed UI mockups with Figma and implemented interfaces using Angular.js. Built backend logic with Node.js/Express and addressed user feedback across full stack.',
    technologies: ['Angular.js', 'Node.js', 'Express.js', 'Figma', 'MongoDB', 'Firebase'],
  },
  {
    type: 'education',
    title: 'React.js Certification',
    company: 'Andela',
    period: 'May 2023 - September 2023',
    description: 'Professional certification in modern React development practices and advanced patterns.',
    technologies: [],
  },
  {
    type: 'education',
    title: 'Software Engineering Certificate',
    company: 'Moringa School',
    period: 'January 2022 - July 2022',
    description: 'Intensive full-stack development program covering web technologies, databases, and deployment.',
    technologies: [],
  },
  {
    type: 'education',
    title: 'B.S. Project Planning & Management (Second Class Honors)',
    company: 'Moi University',
    period: 'September 2015 - October 2019',
    description: 'Foundational computer science education with focus on software development and systems design.',
    technologies: [],
  },
  {
    type: 'education',
    title: 'Certificate in Web Design',
    company: 'Computer Pride College',
    period: 'May 2018 - September 2018',
    description: 'Professional web design fundamentals and best practices.',
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
