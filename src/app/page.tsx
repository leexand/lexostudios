import { 
  ArrowRight, 
  User, 
  Download, 
  Code2, 
  Bot, 
  Puzzle, 
  BookOpen,
  Mail,
  ExternalLink,
  Globe,
  ChevronRight
} from "lucide-react";
import Image from "next/image";

const techStack = [
  { name: "Python", icon: "🐍", color: "text-yellow-400" },
  { name: "JavaScript", icon: "JS", color: "text-yellow-300" },
  { name: "TypeScript", icon: "TS", color: "text-blue-400" },
  { name: "Node.js", icon: "🟢", color: "text-green-400" },
  { name: "PostgreSQL", icon: "🐘", color: "text-blue-300" },
  { name: "Docker", icon: "🐳", color: "text-blue-400" },
  { name: "Git", icon: "🔶", color: "text-orange-400" },
];

const skills = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: "Backend Development",
    desc: "APIs, databases and scalable server-side applications.",
  },
  {
    icon: <Bot className="w-6 h-6 text-blue-400" />,
    title: "Bot Development",
    desc: "Discord bots and automation that provide value.",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-blue-400" />,
    title: "Problem Solving",
    desc: "I love turning complex ideas into simple, elegant solutions.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
    title: "Continuous Learning",
    desc: "Always improving my skills and exploring new tech.",
  },
];

const projects = [
  {
    name: "InterWorld",
    desc: "A social platform connecting communities through events, servers and interactive experiences.",
    status: "In Development",
    statusColor: "text-blue-400",
    image: "🌍",
    gradient: "from-blue-900/40 to-purple-900/40",
  },
  {
    name: "Lexo",
    desc: "A multi-purpose Discord bot with moderation, utilities, automation and productivity features.",
    status: "Live",
    statusColor: "text-green-400",
    image: "⚡",
    gradient: "from-green-900/40 to-emerald-900/40",
  },
  {
    name: "Flynn",
    desc: "A Discord bot focused on temporary voice channels with advanced management features.",
    status: "Live",
    statusColor: "text-green-400",
    image: "🎙️",
    gradient: "from-indigo-900/40 to-blue-900/40",
  },
];

// Al inicio de page.tsx, antes del componente Home:
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-semibold text-lg">Lexo Studios</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <a 
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all"
          >
            Get In Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6">
        {/* Background glow - más suaves y lejanos */}
        <div className="absolute top-10 right-10 w-125 h-125 bg-blue-600/[0.07] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-60 left-0 w-80 h-80 bg-cyan-600/4 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Building tools, <br />
              bots and digital <br />
              <span className="text-gradient">experiences.</span>
            </h1>
            
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              I'm lexand, a Backend Developer passionate about building scalable applications, useful bots and meaningful digital products.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white font-medium rounded-lg transition-all"
              >
                About Me
                <User className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Tech I work with</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div 
                    key={tech.name}
                    className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-lg hover:border-blue-500/30 transition-colors cursor-default"
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image / Avatar */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring - más sutiles */}
              <div className="absolute inset-0 rounded-full border border-blue-400/10 scale-110" />
              <div className="absolute -inset-4 rounded-full border border-blue-500/6 scale-110" />
              
              {/* Avatar placeholder - reemplaza con tu foto */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-linear-to-br from-slate-800 to-slate-900 border border-blue-500/15 flex items-center justify-center overflow-hidden relative glow-blue">
                <div className="text-6xl"></div>
                <Image 
                  src="/profile.png" 
                  alt="lexand avatar" 
                  fill 
                  className="object-cover" 
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur border border-blue-500/20 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <p className="text-sm font-medium text-blue-400">Backend Developer</p>
                  <p className="text-xs text-slate-500">Building scalable solutions with clean code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-blue-500/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">About Me</p>
            <h2 className="text-4xl font-bold">Who am I?</h2>
            
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a backend-focused developer who loves solving problems, building efficient systems and creating impactful projects.
              </p>
              <p>
                I enjoy working with Python, Node.js, PostgreSQL and modern technologies to design APIs, bots and web applications.
              </p>
              <p className="text-slate-300">
                Always learning, always building. <br />
                This is Lexo Studios.
              </p>
            </div>

            <a 
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.title}
                className="p-6 bg-slate-900/50 border border-slate-800 hover:border-blue-500/20 rounded-xl transition-all hover:bg-slate-800/50 group"
              >
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-slate-200 mb-1">{skill.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-2">Featured Projects</p>
              <h2 className="text-4xl font-bold">Some things I've built</h2>
            </div>
            <a 
              href="#"
              className="hidden md:inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.name}
                className="group bg-slate-900/50 border border-slate-800 hover:border-blue-500/20 rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-900/10"
              >
                {/* Project thumbnail */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className={`text-xs font-medium ${project.statusColor}`}>
                      ● {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 border-t border-blue-500/10 bg-[#070a14]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-semibold text-lg">Lexo Studios</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Building tools, bots and digital experiences that make a difference.
            </p>
            <p className="text-xs text-slate-600">© 2024 Lexo Studios. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">Let's Connect</h4>
            <p className="text-sm text-slate-500 mb-4">
              Find me on my socials and let's build something amazing.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <GithubIcon />, href: "https://github.com/leexand", label: "GitHub" },
                { icon: <LinkedinIcon />, href: "#", label: "LinkedIn" },
                { icon: <TwitterIcon />, href: "#", label: "Twitter" },
                { icon: <Bot className="w-4 h-4" />, href: "#", label: "Discord" },
                { icon: <YoutubeIcon />, href: "#", label: "YouTube" },
                { icon: <Mail className="w-4 h-4" />, href: "mailto:alex@lexostudios.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800/50 border border-slate-700 hover:border-blue-500/30 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}