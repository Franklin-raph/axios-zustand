import { useEffect, useState } from 'react'
import { HeroData } from '../../data/MockData'
import { SlideRight } from '../../utils/animation'
import { motion, AnimatePresence, easeInOut } from "framer-motion"

const Home = () => {

    const [activeData, setActiveData] = useState(HeroData[0])
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndev) => (prevIndev + 1) % HeroData.length);
        }, 3000);
        return () => clearInterval(interval);
    },[currentIndex])

    useEffect(() => {
        setActiveData(HeroData[currentIndex])
    },[currentIndex])

  return (
    <div className='bg-[#F2F0FF] relative'>
        <img src="/images/lamp.svg" className='absolute top-0 left-[-60px] hidden xl:block' alt="" />
        <section className='flex md:justify-between items-center flex-col md:flex-row h-screen md:h-[650px] relative max-w-[1600px] mx-auto px-[4rem] gap-5'>
            <div className='py-14 md:py-0 lg:w-[45%] md:w-[70%] w-[98%]'>
                <div className='text-center md:text-left'>
                    <AnimatePresence mode='wait'>
                        <motion.p
                            className='text-[#FB2E86] text-sm lg:text-[16px] capitalize'
                            key={activeData.id}
                            variants={SlideRight(0.2)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                            {activeData.subtitle}
                        </motion.p>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.h1
                            className='text-3xl lg:text-4xl xl:text-5xl font-bold xl:leading-[65px] my-3 capitalize'
                            key={activeData.id}
                            variants={SlideRight(0.4)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                            {activeData.title}
                        </motion.h1>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.p
                            className='text-[#8A8FB9] text-sm lg:text-[16px]'
                            key={activeData.id}
                            variants={SlideRight(0.6)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                            {activeData.description}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
            <div className='relative'>
                <AnimatePresence>
                    <motion.img
                        src={activeData.image} alt="" className='lg:w-[500px] md:w-[300px] w-[400px] relative z-10'
                        key={activeData.id}
                        variants={SlideRight(0.4)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        transition={{ ease: easeInOut, duration: 0.5 }}
                    />
                </AnimatePresence>
                <p className='text-[300px] absolute top-0 left-1/2 -translate-x-1/2  -translate-y-1/2 text-white/20 font-extrabold'>{activeData.modal}</p>
            </div>
        </section>
    </div>
  )
}

export default Home