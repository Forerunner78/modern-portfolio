import { motion } from "framer-motion";

// Effet de transition "rideau" : pendant l'exit de la page sortante, le rideau
// se ferme depuis la gauche (scaleX 0 -> 1, origin: left). Pendant l'animate de
// la page entrante, il s'ouvre vers la droite (scaleX 1 -> 0, origin: right).
// scaleX et originX sont des transformations GPU, jamais de layout shift.
// originX bascule en duration:0 pour que le pivot saute pendant que le rideau
// est plein largeur (donc invisible a l'oeil).

const sharedTransition = {
    duration: 0.8,
    ease: "easeInOut",
    originX: { duration: 0 },
};

const TransitionEffect = () => {
    return (
        <>
            <motion.div
                initial={{ scaleX: 1, originX: 1 }}
                animate={{ scaleX: 0, originX: 1 }}
                exit={{ scaleX: 1, originX: 0 }}
                transition={sharedTransition}
                className="pointer-events-none fixed inset-0 z-30 bg-primary dark:bg-primaryDark"
            />
            <motion.div
                initial={{ scaleX: 1, originX: 1 }}
                animate={{ scaleX: 0, originX: 1 }}
                transition={{ ...sharedTransition, delay: 0.2 }}
                className="pointer-events-none fixed inset-0 z-20 bg-light"
            />
            <motion.div
                initial={{ scaleX: 1, originX: 1 }}
                animate={{ scaleX: 0, originX: 1 }}
                transition={{ ...sharedTransition, delay: 0.4 }}
                className="pointer-events-none fixed inset-0 z-10 bg-dark"
            />
        </>
    );
};

export default TransitionEffect;
