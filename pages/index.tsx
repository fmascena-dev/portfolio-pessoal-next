import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

export default function Home() {
  return (
    <div className="bg-primary/60 h-screen">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-16 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{' '}
            <span className="text-accent">Digital reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-8"
          >
            We create innovative, user-centric digital experiences that empower
            businesses to achieve their goals. Lets explore how we can help you
            transform your ideas into digital reality.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      </div>
      <div>Particles</div>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full h-full max-w-[607px] max-h-[508px] absolute -bottom-32 lg:bottom-0 lg:right-[5%]"
      >
        <Avatar />
      </motion.div>
    </div>
  );
}
