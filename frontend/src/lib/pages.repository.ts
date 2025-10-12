const PAGES_API_URL = `${process.env.API_URL}/collections/pages/entries`;

export async function getAllPages() {
  const response = await fetch(PAGES_API_URL, {
    next: { 
      revalidate: 3600 // Cache for 1 hour (3600 seconds)
    }
  });
  const data = await response.json();
  return data.data;
}

export async function getPageBySlug(slugArray) {
  const slug = slugArray.join('/');
  const pages = await getAllPages();
  return pages.find(page => page.slug === slug);
}

export async function getHomepage() {
  const pages = await getAllPages();
  return pages.find(page => page.slug === '' || page.slug === '/' || page.slug === 'home');
}

export function generateSlugParams(pages) {
  return pages.map((page) => ({
    slug: page.slug.split('/').filter(Boolean),
  }));
}

const generateDefaultRequestOptions = (options?: any) => {
    const requestOptions: RequestInit = options ?? {};
    requestOptions.next = {
        ...requestOptions.next,
        // Cache everything for 60 seconds per default
        revalidate: requestOptions.next?.revalidate ?? 60,
    };
    return requestOptions;
}

export async function fetchEntry(url: string, options?: any) {
  const urlObject = new URL(url);
  const requestOptions = generateDefaultRequestOptions(options);

  console.log(`Fetching entry ${urlObject.toString()}`);  
  const response = await fetch(urlObject, requestOptions);

  if (response.status !== 200) {
      return { data: undefined };
  }

  return response.json();
}