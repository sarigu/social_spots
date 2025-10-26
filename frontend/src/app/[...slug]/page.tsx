import { notFound } from 'next/navigation';
import PageRenderer from '@/helpers/PageRenderer';
import { getAllPages, getPageBySlug, generateSlugParams } from '@/lib/pages.repository';

export async function generateStaticParams() {
  const pages = await getAllPages();
  return generateSlugParams(pages);
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const page = await getPageBySlug(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  return <PageRenderer page={page} />;
}