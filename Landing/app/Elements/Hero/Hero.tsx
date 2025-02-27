import React from 'react'
import { motion } from 'framer-motion';
import { RotateWords } from '@/app/Components/RotateWords/RotateWords';

function Hero() {
    return (
        <>
            <div className="bg-white min-h-screen flex justify-center items-center">
                <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center p-6 lg:p-20">
                    <motion.h1
                        className="text-4xl font-bold md:text-7xl select-none cursor-pointer"
                    >
                        <span className="text-red-500">
                            Design
                        </span>
                        <span className="text-gray-700"> Your Space</span>
                        <br />
                        <span className="text-gray-700">On The </span>
                        <span className="animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900">
                            Internet
                        </span>
                    </motion.h1>
                    {/* <p className="text-lg text-gray-400 mt-4">
                        Build with the{" "}
                        <a href="#" className="text-blue-400 underline">
                            #1 most-used developer tool
                        </a>
                    </p> */}
                    <span className='select-none cursor-pointer'>
                    <RotateWords
                        preText='We'
                        postText='Things For You'
                        words={['Design', 'Develop', 'Manage']}
                        className="text-lg text-gray-400 mt-4 text-center w-fit flex items-center jusitfy-center mx-auto gap-1.5"
                        animateDuration={0.5}
                        rotateDuration={2000}
                        rotateDelay={2000}
                        rotateClassName='text-gray-800'
                    />
                    </span>
                    {/* <div className="mt-6 flex space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                            Contact us
                        </button>
                        <button className="border px-6 py-3 rounded-md hover:bg-gray-700 text-gray-300">
                            More about us
                        </button>
                    </div> */}
                </motion.section>
            </div>
        </>
    )
}

export default Hero