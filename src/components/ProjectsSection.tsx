import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import seedlingImg from '@/assets/seedling.png';
import mwsiImg from '@/assets/mwsi.png';
import toursImg from '@/assets/tours.png';
import academicImg from '@/assets/academic.png';

const projects = [
  {
    title: 'Seedling Centre (Vendor & Orders System)',
    problem: 'Vendors and orders were managed manually, causing fulfillment delays and errors.',
    solution:
      'Implemented a vendor & order management system with structured workflows, automated order tracking, and a streamlined admin UI — replacing manual processes.',
    tech: ['React', 'TypeScript', 'Netlify CMS', 'Serverless'],
    image: seedlingImg,
    live: 'https://seedlingcentre.com/',
    github: null,
  },
  {
    title: 'MWSI HRIS',
    problem: 'The HR team relied on spreadsheets and manual onboarding tasks.',
    solution:
      'Implemented an HRIS with role-based access, secure auth, and automated onboarding workflows — reducing admin time.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Postgres'],
    image: mwsiImg,
    live: 'https://mwsi-hris.vercel.app/login',
    github: null,
  },
  {
    title: 'Tours & Safaris (Travel site)',
    problem: 'Low engagement and poor SEO for tour listings leading to low bookings.',
    solution:
      'Redesigned site for faster load, structured data for SEO, and clear CTA flows — increasing bookings.',
    tech: ['Vite', 'React', 'Tailwind', 'Netlify'],
    image: toursImg,
    live: 'https://tours-safaris-adventure.vercel.app/',
    github: null,
  },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Projects I've
              <span className="gradient-text"> Built</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work, showcasing my expertise in full-stack development
            </p>
          </div>

          {/* Top 3 projects in a single row */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            {projects.slice(0, 3).map((project, index) => (
              <div key={project.title} className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-500" style={{ animationDelay: `${200 + index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image || '/placeholder.svg'} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm">{project.title}</h4>
                    <div className="flex items-center gap-2">
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <ExternalLink size={16} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3"><strong>Problem:</strong> {project.problem}</p>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3"><strong>Solution:</strong> {project.solution}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={t} className={`px-2 py-1 text-xs rounded-full border ${i === 0 ? 'bg-gradient-to-r from-primary to-purple-600 text-white border-transparent' : 'bg-secondary/10 text-muted-foreground border-border'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining projects (case studies) */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(3).map((project, index) => (
              <div
                key={project.title}
                className={`group glass-card overflow-hidden hover:border-primary/50 transition-all duration-500 ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300"
                        >
                          <Github size={20} />
                        </a>
                      ) : null}
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.github ? (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:text-primary">
                            <Github size={16} />
                          </a>
                        ) : null}
                        {project.live ? (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:text-primary">
                            <ExternalLink size={16} />
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-2 flex-1">
                      <p className="text-sm text-muted-foreground"><strong>Problem:</strong> {project.problem}</p>
                      <p className="mt-2 text-sm text-muted-foreground"><strong>Solution:</strong> {project.solution}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={t} className={`${i === 0 ? 'px-3 py-1 text-sm rounded-full bg-gradient-to-r from-primary to-purple-600 text-white' : 'px-2 py-1 text-xs rounded-full bg-secondary/10 border border-border text-muted-foreground'}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
            <Button variant="heroOutline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
