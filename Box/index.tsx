import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


export const Box = ({ num }: { num: number }) => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="box"
            ref={ref}
            variants={{
                visible: { opacity: 1, scale: 1, transition: { duration: 2 }, scrollBehavior: 'smooth' },
                hidden: { opacity: 0, scale: 0 }
            }}
            initial="hidden"
            animate={control}
        >
            <h1>Box {num} </h1>
        </motion.div>
    );
};
