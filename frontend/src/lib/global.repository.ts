import {fetchEntry} from "@/lib/pages.repository";
import {GeneralSettings as TGeneralSettings} from "@/types";

export async function loadGlobalSet(handle: string): Promise<TGeneralSettings> {
  const url = new URL(`${process.env.API_URL}/globals/${handle}`);

  const result = await fetchEntry(url.toString())
    .catch(() => {
      return {
        data: {}
      }
    });

  return result.data;
} 