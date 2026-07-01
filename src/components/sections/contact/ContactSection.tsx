import { ArrowUpRight, Github, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact } from "@/content/site";

const links = [
  { label: "GitHub", href: contact.github, icon: Github },
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="联系"
          title="如果你也关注 AI 原生科研软件，欢迎交流。"
          description="我对工具构建、科研软件、AI 工作流和计算生物学协作都保持开放。"
        />
        <GlassPanel className="mt-12 p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-line"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-accent-blue" />
                    <ArrowUpRight className="h-4 w-4 text-text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-blue" />
                  </div>
                  <p className="mt-10 text-lg font-semibold">{link.label}</p>
                </a>
              );
            })}
          </div>
        </GlassPanel>
      </Container>
    </section>
  );
}
