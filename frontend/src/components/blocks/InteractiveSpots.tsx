import Container from "@/components/base/Container";
import SocialSpotsAccordion from "@/components/map/SocialSpotsAccordion";
import SpotsMap from "@/components/map/SpotsMap";
import { getAllSocialSpots } from "@/lib/spots.repository";
import {BlockInteractiveSpots as TBlockInteractiveSpots} from "@/types";

export default async function InteractiveSpots({ headline }: TBlockInteractiveSpots) {
  const spots = await getAllSocialSpots();

  if(!spots || spots.length === 0) {
    return null;
  }

  return (
    <Container spacing="large">
      {headline && (<h3 className="text-2xl font-heading mb-4 text-foreground">{headline}</h3>)}
      
      {/* Interactive Map */}
      <SpotsMap spots={spots} />
      
      {/* Social Spots Accordion */}
      <SocialSpotsAccordion spots={spots} />
    </Container>
  );
}