import React, {useEffect, useRef, ReactNode} from "react"; 
import {motion, useInView, useAnimation, animate} from "framer-motion";

interface StaggerItemProps {
  children: ReactNode;
  index: number;
}

const StaggerItem: React.FC<StaggerItemProps> = ({children, index}) => {
   const ref = useRef(null); 
   const isInView = useInView(ref, {once: true}); 
   const mainControls = useAnimation(); 

   // const stag = stagger(0.1, { startDelay: 0.2 });

   // useEffect(() => {
   //    box = ;
   // }, [])

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
               hidden: {opacity: 0, x: 75}, 
               visible: {
                  opacity: 1, 
                  x: 0,
               },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
               duration: 0.5, 
               delay: index*0.5,
            }}
         >
            {children}
         </motion.div>
      </div>
   );
};

export default StaggerItem;