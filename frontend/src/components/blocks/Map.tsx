import Container from "@/components/base/Container";
import SocialSpotsAccordion from "@/components/blocks/SocialSpotsAccordion";
import { getAllSocialSpots } from "@/lib/spots.repository";

interface MapProps {
  headline?: string;
}

export default async function Map({ headline }: MapProps) {
  const spots = await getAllSocialSpots();

  if(!spots || spots.length === 0) {
    return;
  }

  return (
    <Container>
      {headline && (
        <h3 className="text-2xl font-heading mb-4 text-foreground">{headline}</h3>
      )}
      <div className="relative w-full h-auto min-h-[500px] rounded-3xl overflow-hidden bg-muted mb-8" />
      
      {/* Social Spots Accordion */}
      <SocialSpotsAccordion spots={spots} />
    </Container>
  );
}