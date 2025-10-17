import { motion } from 'framer-motion'; // Ensure this is imported

const MainHeading = () => {
  const text1 = "Empowering Your Sales,"; // First part of the text
  const text2 = "Simplifying Your Workflow"; // Second part of the text

  const characterVariants = {
    hidden: { opacity: 0, x: -10 }, // Initial state: invisible and slightly shifted left
    visible: { opacity: 1, x: 0 }, // Final state: fully visible
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each character (adjust for speed)
      },
    },
  };

  return (
    // {/* Main Heading with Typing Effect */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.6, ease: "easeOut" }} // Original transition for the container
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
        {text1.split("").map((char, index) => (
          <motion.span key={index} variants={characterVariants}>
            {char === " " ? "\u00A0" : char} {/* Replace spaces with non-breaking spaces for proper rendering */}
          </motion.span>
        ))}
        <br />
        <span className="text-indigo-700 font-bold">
          {text2.split("").map((char, index) => (
            <motion.span key={index} variants={characterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </h1>
    </motion.div>
  );
};

export default MainHeading; // If this is in a component file