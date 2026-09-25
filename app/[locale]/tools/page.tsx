import type { Metadata } from "next";
import { TOOLS, type Locale } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { ArrowUpRight, Icon, PageHead, Reveal, StatusBadge } from "@/components/site/shared";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const t = COPY[(await params).locale as Locale];
  return { title: t.tools.indexTitle, description: t.tools.indexSub };
}

export default async function Tools({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = COPY[locale];
  return (
    <>
      <PageHead label={t.tools.kicker} title={t.tools.indexTitle} sub={t.tools.indexSub} />
      <div className="container-x grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-3 md:pb-28">
        {TOOLS.map((tool, i) => {
          const live = tool.status === "live";
          const body = (
            <>
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-2xl border border-line bg-surface-2">
                  <Icon name={tool.icon} className="size-5" />
                </span>
                <StatusBadge live={live}>{live ? t.tools.live : t.tools.soon}</StatusBadge>
              </div>
              <h2 className="text-h3 mt-7">{tool[locale].title}</h2>
              <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{tool[locale].desc}</p>
              {live && (
                <span className="btn-primary btn-sm mt-6 self-start">
                  {t.tools.use}
                  <ArrowUpRight className="size-4" />
                </span>
              )}
            </>
          );
          return (
            <Reveal key={tool.slug} delay={i * 0.06} className="h-full">
              {live ? (
                <a href={tool.href} className="card card-hover flex h-full flex-col p-7">
                  {body}
                </a>
              ) : (
                <div className="card flex h-full flex-col p-7">{body}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
