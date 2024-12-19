import { easeInOut } from "framer-motion";

export const SlideRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                // type: "spring",
                // stiffness: 200,
                // damping: 20,
                ease: easeInOut,
                duration: 0.5,
                delay,
            },
        },
        exit: {
            opacity: 0,
            x: -100,
            transition: {
                ease: easeInOut,
                duration: 0.,
            },
        }
    };
};