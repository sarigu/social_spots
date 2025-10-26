'use client';

import { useState, useMemo } from 'react';
import Accordion from '@/components/spots/Accordion';
import Map from '@/components/spots/Map';
import Filter, { FilterState } from '@/components/spots/filter/Filter';
import dynamic from 'next/dynamic';
import { SocialSpot as TSocialSpot } from '@/types';

interface FilteredSpotsWrapperProps {
  spots: TSocialSpot[];
}

// Dynamic import for client-only rendering
const Map = dynamic(() => import('@/components/spots/Map'), { ssr: false });

export default function FilteredSpotsWrapper({ spots }: FilteredSpotsWrapperProps) {
  const [filters, setFilters] = useState<FilterState>({
    types: [],
    languages: [],
    costs: [],
    neighborhoods: [],
  });

  // Filter spots based on active filters
  const filteredSpots = useMemo(() => {
    return spots.filter(spot => {
      if (filters.types.length > 0) {
        const spotTypes = spot.type.map(t => t.value);
        const hasMatchingType = filters.types.some(filterType => 
          spotTypes.includes(filterType)
        );
        if (!hasMatchingType) return false;
      }

      if (filters.languages.length > 0) {
        const spotLanguages = spot.language?.map(l => l.value) || [];
        const hasMatchingLanguage = filters.languages.some(filterLang => 
          spotLanguages.includes(filterLang)
        );
        if (!hasMatchingLanguage) return false;
      }

      if (filters.costs.length > 0) {
        if (!spot.cost || !filters.costs.includes(spot.cost)) {
          return false;
        }
      }

      if (filters.neighborhoods.length > 0) {
        if (!spot.neighborhood || !filters.neighborhoods.includes(spot.neighborhood)) {
          return false;
        }
      }

      return true;
    });
  }, [spots, filters]);

  return (
    <>
      {/* Filter Component */}
      <Filter onFilterChange={setFilters} spots={spots} />

      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredSpots.length} of {spots.length} spot{filteredSpots.length !== 1 ? 's' : ''}
      </div>

      {/* Interactive Map */}
      <Map spots={filteredSpots} />

      {/* Social Spots Accordion */}
      {filteredSpots.length > 0 ? (
        <Accordion spots={filteredSpots} />
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">No spots match your filters</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your filter selection</p>
        </div>
      )}
    </>
  );
}