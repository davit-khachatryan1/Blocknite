import { motion } from 'framer-motion';


const AltarinText = ({index, children}: any) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 0, x: -50 },
        visible: { opacity: 1, y: 0, x: 0, },
      }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AltarinText;