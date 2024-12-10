import { motion } from 'framer-motion';
import logoImage from '../assets/logo.png';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center"
    >
      <img 
        src={logoImage} 
        alt="Coding Conquerors Logo" 
        className="h-12 w-auto"
      />
    </motion.div>
  );
}