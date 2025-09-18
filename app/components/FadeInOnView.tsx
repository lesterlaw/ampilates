"use client";

import { PropsWithChildren, ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInOnViewProps = PropsWithChildren<{
  as?: ElementType;
  delay?: number;
  className?: string;
}>;

const FadeInOnView = ({ as = "div", delay = 0, className, children }: FadeInOnViewProps) => {
  const prefersReducedMotion = useReducedMotion();

  const MotionComponent = motion(as as any);

  return (
    <MotionComponent
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0.25 : 0.5, delay }}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeInOnView;


