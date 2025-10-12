import Container from "@/components/base/Container";
import {BlockEmbed as TBlockEmbed} from "@/types";

export default function Embed({ headline, code_snippet }: TBlockEmbed) {
  return (
    <Container>
      {/* Headline */}
      {headline && (
        <h3 className="text-2xl font-heading mb-4 text-foreground">{headline}</h3>
      )}
      {/* Embed */}
      <div
        className="relative w-full h-auto rounded-3xl overflow-hidden"
        dangerouslySetInnerHTML={{ __html: code_snippet.code }}
      />
    </Container>
  );
}
