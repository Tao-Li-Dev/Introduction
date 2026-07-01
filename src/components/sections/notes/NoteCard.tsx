import { motion } from "framer-motion";
import type { Note } from "@/data/types";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { reveal } from "@/lib/motion";

type NoteCardProps = {
  note: Note;
};

export function NoteCard({ note }: NoteCardProps) {
  return (
    <motion.div {...reveal}>
      <GlassPanel className="h-full p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary">
            {note.category}
          </span>
          <span className="text-sm text-text-muted">{note.date}</span>
        </div>
        <h3 className="mt-5 text-xl font-semibold">{note.title}</h3>
        <p className="mt-4 text-base leading-8 text-text-secondary">{note.summary}</p>
      </GlassPanel>
    </motion.div>
  );
}
