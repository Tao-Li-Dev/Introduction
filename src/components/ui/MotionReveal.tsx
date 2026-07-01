import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

export function MotionReveal({ children }: PropsWithChildren) {
  return <motion.div {...reveal}>{children}</motion.div>;
}
