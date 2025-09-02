"use client";

import { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInOnViewProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
}>;

const FadeInOnView = ({ as = "div", delay = 0, className, children }: FadeInOnViewProps) => {
  const prefersReducedMotion = useReducedMotion();

  const MotionTag = motion[as as keyof typeof motion] as any;

  return (
    <MotionTag
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0.25 : 0.5, delay }}
    >
      {children}
    </MotionTag>
  );
};

export default FadeInOnView;


