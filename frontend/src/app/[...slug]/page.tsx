import { notFound } from 'next/navigation';
import PageRenderer from '@/helpers/PageRenderer';
import { getAllPages, getPageBySlug, generateSlugParams } from '@/lib/pages.repository';

export async function generateStaticParams() {
  const pages = await getAllPages();
  return generateSlugParams(pages);
}

export default async function Page({ params }) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return <PageRenderer page={page} />;
}