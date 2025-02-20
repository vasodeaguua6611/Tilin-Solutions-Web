import { motion } from 'framer-motion';
import { Award, Code, Users, Zap } from 'lucide-react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">About Tilin Solutions</h1>
        <p className="text-blue-200">Learn about our mission, values, and achievements</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/80 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-blue-200">
            At Tilin Solutions, we're dedicated to pushing the boundaries of technology
            and creating innovative solutions that make a difference. Our team of passionate
            developers works tirelessly to deliver high-quality software that exceeds
            expectations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/80 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Core Values</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-blue-200">
              <Code className="text-blue-400" />
              Excellence in Code Quality
            </li>
            <li className="flex items-center gap-3 text-blue-200">
              <Users className="text-blue-400" />
              Collaborative Development
            </li>
            <li className="flex items-center gap-3 text-blue-200">
              <Zap className="text-blue-400" />
              Innovation First
            </li>
            <li className="flex items-center gap-3 text-blue-200">
              <Award className="text-blue-400" />
              Continuous Learning
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-slate-900/80 rounded-xl p-6 shadow-lg mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Java', 'Python', 'Node.js', 'MongoDB', 'AWS', 'C/C++', 'Ruby', 'C#', 'TensorFlow'].map((tech, index) => (
            <div key={tech} className="bg-blue-900/30 p-4 rounded-lg text-center">
              <span className="text-blue-200">{tech}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;