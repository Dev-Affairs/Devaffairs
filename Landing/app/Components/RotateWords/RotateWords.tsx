"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

export function RotateWords({
    preText = "Rotate",
    postText = "Rotate",
    words = ["Word 1", "Word 2", "Word 3"],
    className = "text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] w-fit flex items-center jusitfy-center mx-auto gap-1.5",
    animateDuration = 0.5,
    rotateDuration = 5000,
    rotateDelay = 0,
    rotateClassName=''
}: {
    preText: string
    postText: string
    words: string[]
    className: string
    rotateDuration: number
    animateDuration: number
    rotateDelay: number
    rotateClassName: string
}) {
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        let rotateInterval: NodeJS.Timeout;
        const startTimeout = setTimeout(() => {
            rotateInterval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length)
            }, rotateDuration)
        }, rotateDelay)
        
        return () => {
            clearTimeout(startTimeout);
            clearInterval(rotateInterval);
        }
    }, [rotateDelay, rotateDuration, words.length])

    return (
        <div className={className}>
            {preText ? preText + ' ' : ''}
            <AnimatePresence mode="wait">
                <motion.p
                    key={words[index]}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: animateDuration }}
                    className={rotateClassName}
                    >
                    {words[index]}
                </motion.p>
            </AnimatePresence>
            {postText ?  ' ' + postText: ''}
        </div>
    )
}