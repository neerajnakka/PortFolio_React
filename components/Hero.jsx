import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants/index';
import profilePic from '../src/assets/kevinRushProfile.png';

// Define animation variants
function container(delay) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1, // Change from -1 to 1
      transition: { duration: 0.5, delay: delay }, // You can adjust the delay if needed
    },
  };
}

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container} // Pass the object directly
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-5xl"
            >
              Neeraj Chandra Nakka
            </motion.h1>

            <motion.span
              variants={container(0.5)} // Pass the object directly
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent "
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)} // Pass the object directly
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6  font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ;g:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
