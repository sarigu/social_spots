import Container from "@/components/base/Container";

interface EmbedProps {
  headline?: string;
  embed: string;
}

export default function Embed({ headline, embed }: EmbedProps) {
  return (
    <Container>
      {/* Headline */}
      {headline && (
        <h3 className="text-2xl font-heading mb-4 text-foreground">{headline}</h3>
      )}
      {/* Embed */}
      <div
        className="relative w-full h-auto rounded-3xl overflow-hidden"
        dangerouslySetInnerHTML={{ __html: embed }}
      />
    </Container>
  );
}
