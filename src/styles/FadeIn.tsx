import React, { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
   const ref = useRef(null); 
   const isInView = useInView(ref, {once: true}); 
   
   const mainControls = useAnimation(); 

   useEffect(() => {
      if(isInView) {
         //animation should start
         mainControls.start("visible"); 
      } 
   }, [isInView]);

   return (
      <div ref={ref} style={{position: "relative", width: "hidden"}}>
         <motion.div
            variants={{
               hidden: {opacity: 0, }, 
               visible: {opacity: 1, },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
               duration: 0.5, 
               delay: 0.3,
            }}
         >

         </motion.div>
      </div>
   )
}

export default FadeIn; 