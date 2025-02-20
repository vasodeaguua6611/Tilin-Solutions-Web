import { motion } from 'framer-motion';
import { Code, GitBranch, Star } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Doc Scanner",
      description: "Advanced document scanning and processing solution",
      tech: ["Python", "NumPy", "OpenCV", "Others"],
      status: "Active",
      link: "https://github.com/vasodeaguua6611/Tilin-DocScanner"
    },
    {
      id: 2,
      name: "Spell Card Workshop",
      description: "Interactive code learning platform",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      status: "Work in Progress",
      link: "#"
    },
    {
      id: 3,
      name: "C Audio Visualizer",
      description: "Real-time audio visualization system",
      tech: ["C", "C++"],
      status: "Work in Progress",
      link: "https://github.com/TilinSolutions/Tilin-Audio-Visualizer-Work-In-Progress-"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Our Projects</h1>
        <p className="text-blue-200">Explore our latest developments and innovations</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/80 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">{project.name}</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${
                project.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-blue-200 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="bg-blue-900/30 px-3 py-1 rounded-full text-sm text-blue-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-blue-200">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GitBranch size={16} />
                <span>Repository</span>
              </a>
              <div className="flex items-center gap-2">
                <Star size={16} />
                <span>12 stars</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={16} />
                <span>{project.tech[0]}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;