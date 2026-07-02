import { motion } from "framer-motion";
import { navItems } from "@/content/site";
import { cn } from "@/lib/cn";
import type { SectionId } from "@/lib/constants";

type FloatingNavProps = {
  activeSection: SectionId;
};

export function FloatingNav({ activeSection }: FloatingNavProps) {
  return (
    <div className="fixed inset-x-0 top-5 z-50 px-4">
      <div className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-border-subtle bg-[#0c0f15]/95 px-3 py-2 shadow-glass">
        <a
          href="#hero"
          className="rounded-full px-3 py-2 text-sm font-semibold tracking-tight text-text-primary"
        >
          Li Tao
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary",
                  isActive && "text-text-primary",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/8"
                    transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
