import { notFound } from 'next/navigation';
import PageContent from '@/helpers/PageContent';
import { getHomepage } from '@/lib/api';

export default async function Homepage() {
  const page = await getHomepage();
  
  if (!page) {
    notFound();
  }

  return (
    <PageContent blocks={page.page_builder} />
  );
}