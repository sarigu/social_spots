import Container from "@/components/base/Container";
import FilteredSpotsWrapper from "@/components/spots/FilteredSpotsWrapper";
import { getAllSocialSpots } from "@/lib/spots.repository";
import {BlockInteractiveSpots as TBlockInteractiveSpots} from "@/types";

export default async function InteractiveSpots({ headline }: TBlockInteractiveSpots) {
  let spots;
  
  try {
    spots = await getAllSocialSpots();
  } catch (error) {
    console.error('Error fetching spots:', error);
    return (
      <Container spacing="large">
        {headline && (
          <h3 className="text-2xl font-heading mb-6 text-foreground">{headline}</h3>
        )}
        <div className="text-center py-12">
          <p className="text-red-600">Failed to load social spots. Please try again later.</p>
        </div>
      </Container>
    );
  }

  if (!spots || spots.length === 0) {
    return (
      <Container spacing="large">
        {headline && (
          <h3 className="text-2xl font-heading mb-6 text-foreground">{headline}</h3>
        )}
        <div className="text-center py-12">
          <p className="text-gray-500">No social spots available at the moment.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container spacing="large">
      {headline && (
        <h3 className="text-2xl font-heading mb-6 text-foreground">{headline}</h3>
      )}
      <FilteredSpotsWrapper spots={spots} />
    </Container>
  );
}