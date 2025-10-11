import PageContent from "@/helpers/PageContent";
import Container from "@/components/base/Container";

interface PageRendererProps {
  page: any;
}

export default function PageRenderer({ page }: PageRendererProps) {
  return (
    <div>
       <Container>
          <h2 className="text-center">{page.title}</h2>
          {page.description && (
            <p className="text-center">{page.description}</p>
          )}
        </Container>
        <PageContent blocks={page.page_builder} />
    </div>
  );
}