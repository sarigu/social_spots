import {fetchEntry} from "@/lib/pages.repository";

export async function loadGlobalSet(handle: string) {
  const url = new URL(`${process.env.API_URL}/globals/${handle}`);

  const result = await fetchEntry(url.toString())
    .catch(() => {
      return {
        data: {}
      }
    });

  return result.data;
}