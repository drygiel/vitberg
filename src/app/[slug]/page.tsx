import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SubpageTemplate } from "@/components/pages/subpage-template";
import { SiteLayout } from "@/components/layout/site-layout";
import { getSubpage, pageSlugs } from "@/lib/pages";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSubpage(slug);
  if (!page) return {};

  return {
    title: `${page.title} | ${siteConfig.name}`,
    description: page.description,
  };
}

export default async function Subpage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSubpage(slug);

  if (!page) {
    notFound();
  }

  return (
    <SiteLayout>
      <SubpageTemplate page={page} />
    </SiteLayout>
  );
}
