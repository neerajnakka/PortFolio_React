import java from '../src/assets/projects/java.png';
import javascript from '../src/assets/projects/js.png';
import mysql from '../src/assets/projects/sql.png';
import react from '../src/assets/projects/react.png';
import mongodb from '../src/assets/projects/mongodb.png';
import prisma from '../src/assets/projects/Prisma.png';
import graphql from '../src/assets/projects/graphql.png';
import HTML from '../src/assets/projects/HTML.png';
import node from '../src/assets/projects/nodejs.png';
import css from '../src/assets/projects/CSS.png';
import aws from '../src/assets/projects/aws.png';
import Github from '../src/assets/projects/Github.png';
import Rest from '../src/assets/projects/Rest.png';
import { motion } from 'framer-motion';

const iconVariants = {
  initial: { y: -10 },
  animate: { y: [10, -10] },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">My Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={java} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={javascript} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={mysql} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={react} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={mongodb} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={node} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={HTML} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={css} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={Rest} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={graphql} className="w-20 h-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={prisma} className="w-20 " />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={aws} className="w-20" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="rounded-xl border-4 bg-neutral-800 p-4"
        >
          <img src={Github} className="w-20" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
