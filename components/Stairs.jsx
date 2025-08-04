import { animate, motion } from "framer-motion";

//variants
const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

const reverseIndex = (index) => {
    const total = 6;
    return total - index - 1;
}

export default function Stairs() {

    return (
        <>
            {/* rendering divs as steps, calculating delays dinamically based on reversed index */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div 
                        key={index} 
                        variants={stairAnimation} 
                        initial="initial" 
                        animate="animate" 
                        exit="exit" 
                        transition={{ 
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1,
                        }} 
                        className="h-full w-full bg-white relative"
                    />
            )
            })}
        </>
    );
}