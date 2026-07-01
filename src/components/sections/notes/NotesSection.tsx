import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NoteCard } from "@/components/sections/notes/NoteCard";
import { notes } from "@/content/notes";

export function NotesSection() {
  return (
    <section id="notes" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="最新记录"
          title="用于记录研究日志、软件思考和 AI 实验。"
          description="这个区域为未来的博客、研究日志和学习笔记预留，不需要重构首页结构。"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {notes.map((note) => (
            <NoteCard key={note.title} note={note} />
          ))}
        </div>
      </Container>
    </section>
  );
}
