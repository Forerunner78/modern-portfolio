import { motion } from "framer-motion";

const TransitionEffect = () => {
    return (
        <>
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="pointer-events-none fixed inset-0 z-30 bg-primary dark:bg-primaryDark"
            />
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                className="pointer-events-none fixed inset-0 z-20 bg-light"
            />
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                className="pointer-events-none fixed inset-0 z-10 bg-dark"
            />
        </>
    );
};

export default TransitionEffect;
