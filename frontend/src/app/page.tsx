import { getPage } from "@/lib/api";
import PageBuilder from "@/helpers/PageBuilder";

export default async function Page() {
  const page = await getPage("home");

  return (<PageBuilder blocks={page.page_builder} />);
}
