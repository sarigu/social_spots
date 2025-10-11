import { getPage } from "@/lib/api";
import PageBuilder from "@/helpers/PageBuilder";
import Container from "@/components/base/Container";

export default async function Page() {
  const page = await getPage("add-spot");

  return (
    <>
        <Container>
            <h2 className="text-center">{page.title}</h2>
            {page.description && (
                <p className="text-center mb-8">{page.description}</p>
            )}
        </Container>
      <PageBuilder blocks={page.page_builder} />
    </>
  );
}
