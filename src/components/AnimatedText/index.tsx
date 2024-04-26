import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AltarinText = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ duration: 1 }}
    >
      ALTARIN
    </motion.div>
  );
};

export default AltarinText;