import Container from "@/components/base/Container";

interface MapProps {
  headline?: string;
}

export default function Map({ headline }: MapProps) {
  return (
    <Container>
      {headline && (
        <h3 className="text-2xl font-heading mb-4 text-foreground">{headline}</h3>
      )}
      <div
        className="relative w-full h-auto min-h-[500px] rounded-3xl overflow-hidden bg-muted"
      />
    </Container>
  );
}
