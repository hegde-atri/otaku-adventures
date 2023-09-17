import { motion } from "framer-motion"
import { IconBrandInstagram } from "@tabler/icons-react"

const Hero = () => {
    return (
        <section
            className="w-screen flex justify-center items-center"
            id="home"
        >
            <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center sm:mt-32 mt-16 pt-16 md:pt-16 lg:pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="text-sm sm:text-base mb-6 font-bold text-[#3e727c]">
                        Budget Friendly Anime Merchandise
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                >
                    <img className="mx-auto rounded-md my-5 w-2/3 md:w-full" src="/images/logo.png" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="text-[#deeeef] mt-2 sm:mt-2 text-xl sm:text-xl lg:text-2xl font-bold tracking-wide px-8 sm:px-20 md:px-24 lg:px-24">
                        Physical stores coming soon
                    </div>
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.10 }}
                >
                    <div className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-serif tracking-wide px-8 sm:px-8 md:px-20 lg:px-4" >
                        <span>Otaku Treasures</span>
                    </div>
                    <div className="mt-2 sm:mt-2 text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide px-8 sm:px-20 md:px-24 lg:px-24">
                    </div>
                </motion.div> */}

                <motion.div
                    className="text-[#96c5ca]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}>
                    <div className="text-sm sm:text-base mb-6 mt-12 font-bold ">
                        Follow us on social media
                    </div>
                    <div className="flex justify-center">
                        <a href="https://instagram.com">
                            <IconBrandInstagram size={35} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default Hero
