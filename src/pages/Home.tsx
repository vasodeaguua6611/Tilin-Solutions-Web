import { motion } from 'framer-motion';
import { Code, Rocket, Trophy, Users } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="relative h-[400px] rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-bold text-white mb-4">Tilin Solutions</h1>
            <p className="text-xl text-blue-200 mb-8">Building the future of technology, one line at a time</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all shadow-lg flex items-center gap-2">
              <Code size={20} />
              Join Our Team
            </button>
          </motion.div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/80 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <Rocket className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Our Projects</h2>
          </div>
          <p className="text-blue-200">Discover our innovative solutions and ongoing developments.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/80 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <Trophy className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Achievements</h2>
          </div>
          <p className="text-blue-200">Explore our milestones and success stories.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900/80 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <Users className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Our Team</h2>
          </div>
          <p className="text-blue-200">Meet the talented developers behind our success.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;