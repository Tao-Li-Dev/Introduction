import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroSystemPanel } from "@/components/sections/hero/HeroSystemPanel";
import { hero } from "@/content/site";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      <Container className="grid gap-14 pb-20 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.26em] text-accent-blue">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.2rem]">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href={hero.primaryAction.href}>
              {hero.primaryAction.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href={hero.secondaryAction.href} variant="secondary" target="_blank" rel="noreferrer">
              {hero.secondaryAction.label}
            </Button>
            <Button href={hero.tertiaryAction.href} variant="ghost">
              {hero.tertiaryAction.label}
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="animate-float"
        >
          <HeroSystemPanel />
        </motion.div>
      </Container>
    </section>
  );
}
