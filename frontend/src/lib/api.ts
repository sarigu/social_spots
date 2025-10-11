export async function getPages() {
  const res = await fetch(`${process.env.API_URL}/collections/pages/entries`);
  if (!res.ok) throw new Error("Failed to fetch pages");
  const data = await res.json();
  return data.data;
}

export async function getPage(slug: string) {
  const res = await fetch(`${process.env.API_URL}/collections/pages/entries/${slug}`);
  if (!res.ok) throw new Error("Page not found");
  const data = await res.json();
  return data.data;
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