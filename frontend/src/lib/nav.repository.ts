import {fetchEntry} from "@/lib/api";

export async function loadNavigation(handle: string){
  const url = new URL(`${process.env.API_URL}/navs/${handle}/tree`);

  const result = await fetchEntry(url.toString()); 
  if (!result.data) {
    return [];
  }

  return result.data;
}