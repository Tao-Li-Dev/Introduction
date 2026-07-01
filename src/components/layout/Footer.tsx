import { Container } from "@/components/layout/Container";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border-subtle/80 py-8">
      <Container className="flex flex-col gap-3 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Dylan. All rights reserved.</p>
        <p>Built with React, Vite, TypeScript, TailwindCSS, and Framer Motion.</p>
      </Container>
    </footer>
  );
}
