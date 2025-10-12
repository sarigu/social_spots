import PageContent from "@/helpers/PageContent";
import Container from "@/components/base/Container";
import {Page as TPage} from "@/types";

interface PageRendererProps {
  page: TPage;
}

export default function PageRenderer({ page }: PageRendererProps) {
  return (
    <div>
       <Container spacing="large">
          <h2 className="text-center">{page.title}</h2>
          {page.description && (
            <p className="text-center">{page.description}</p>
          )}
        </Container>
        <PageContent blocks={page.page_builder} />
    </div>
  );
}