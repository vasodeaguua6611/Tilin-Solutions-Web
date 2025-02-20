import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function Members() {
  const members = [
    {
      id: 1,
      name: "xuyaxaki",
      role: "Lead Developer",
      avatar: "#",
      bio: "Passionate about creating innovative solutions",
      skills: ["Python", "C", "Java", 'Ruby'],
      github: "https://github.com/vasodeaguua6611"
    },
    {
      id: 2,
      name: "Akoza",
      role: "Feature Champion",
      avatar: "#",
      bio: "Focused on delivering high-quality code",
      skills: ["Java", "Python", "AWS"],
      github: "https://github.com/akozaaaaa"
    },
    {
      id: 3,
      name: "Peppy",
      role: "Systems Developer",
      avatar: "#",
      bio: "Specializing in performance optimization and system architecture",
      skills: ["C++", "JavaScript"],
      github: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
        <p className="text-blue-200">Meet the talented developers behind Tilin Solutions</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/80 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h2 className="text-xl font-bold text-white">{member.name}</h2>
                <p className="text-blue-400">{member.role}</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">{member.bio}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {member.skills.map(skill => (
                <span key={skill} className="bg-blue-900/30 px-3 py-1 rounded-full text-sm text-blue-200">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Members;