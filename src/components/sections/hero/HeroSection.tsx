import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroSystemPanel } from "@/components/sections/hero/HeroSystemPanel";
import { TiltedCard } from "@/components/ui/TiltedCard";
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
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-[460px] flex-col items-center gap-5 lg:mx-0 lg:items-stretch"
        >
          <div className="animate-float">
            <TiltedCard
              imageSrc="/images/profile/avatar.jpg"
              altText="个人头像"
              captionText="李涛 · 进化基因组学研究软件"
              containerHeight="min(78vw, 420px)"
              containerWidth="100%"
              imageHeight="min(78vw, 420px)"
              imageWidth="min(78vw, 420px)"
              rotateAmplitude={10}
              scaleOnHover={1.04}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <div className="flex h-full flex-col justify-between bg-[linear-gradient(180deg,rgba(10,13,18,0)_48%,rgba(10,13,18,0.68)_100%)] p-5">
                  <span className="w-fit rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                    科研软件工程
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/70">
                      李涛
                    </p>
                    <p className="mt-2 max-w-[17rem] text-lg font-semibold leading-snug text-white">
                      为进化基因组学构建可复现工具。
                    </p>
                  </div>
                </div>
              }
            />
          </div>
          <div className="-mt-4 w-full md:-mt-8">
            <HeroSystemPanel />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
