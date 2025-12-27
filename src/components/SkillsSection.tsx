import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 88 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 82 },
      { name: 'Kubernetes', level: 70 },
    ],
  },
];

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Next.js', 'Python', 
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL',
  'Tailwind', 'Git', 'Figma', 'Redis', 'Vercel'
];

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Skills & Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Technologies I
              <span className="gradient-text"> Work With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Constantly learning and adapting to new technologies to deliver the best solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className={`glass-card p-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${200 + catIndex * 100}ms` }}
              >
                <h3 className="font-display text-xl font-semibold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            background: 'var(--gradient-primary)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className={`${isVisible ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
            <h3 className="font-display text-xl font-semibold text-center mb-8">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${500 + index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
