'use client';

import { useState, useRef, useEffect } from 'react';
import { SocialSpot as TSocialSpot, SpotTypeValue as TSpotTypeValue } from '@/types';
import FilterDropdownButton from '@/components/spots/filter/FilterDropdownButton';
import DropdownMenu from '@/components/spots/filter/DropdownMenu';
import CheckboxItem from '@/components/spots/filter/CheckboxItem';
import FilterTag from '@/components/spots/filter/FilterTag';

interface SpotsFilterProps {
  onFilterChange: (filters: FilterState) => void;
  spots: TSocialSpot[];
}

interface FilterState {
  types: TSpotTypeValue[];
  languages: string[];
  costs: string[];
  neighborhoods: string[];
}

const typeOptions = [
  { value: 'food' as TSpotTypeValue, label: 'Food', emoji: '🍜', color: 'bg-yellow-300' },
  { value: 'sports' as TSpotTypeValue, label: 'Sports', emoji: '⚽', color: 'bg-blue-400' },
  { value: 'gardening' as TSpotTypeValue, label: 'Gardening', emoji: '🌱', color: 'bg-green-200' },
  { value: 'volunteering' as TSpotTypeValue, label: 'Volunteering', emoji: '🤝', color: 'bg-purple-400' },
  { value: 'culture_house' as TSpotTypeValue, label: 'Culture House', emoji: '🏠', color: 'bg-red-300' },
  { value: 'games' as TSpotTypeValue, label: 'Games', emoji: '🎮', color: 'bg-pink-400' },
  { value: 'creativity' as TSpotTypeValue, label: 'Creativity', emoji: '🎨', color: 'bg-orange-400' },
];

type DropdownType = 'types' | 'languages' | 'costs' | 'neighborhoods' | null;

export default function SpotsFilter({ onFilterChange, spots }: SpotsFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    types: [],
    languages: [],
    costs: [],
    neighborhoods: [],
  });
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Extract unique values from spots
  const uniqueLanguages = Array.from(
    new Set(spots.flatMap(spot => spot.language?.map(lang => lang.value) || []))
  ).sort();

  const uniqueCosts = Array.from(
    new Set(spots.map(spot => spot.cost).filter(Boolean))
  ).sort();

  const uniqueNeighborhoods = Array.from(
    new Set(spots.map(spot => spot.neighborhood).filter(Boolean))
  ).sort();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        ref => ref && !ref.contains(event.target as Node)
      );
      if (clickedOutside) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFilter = <T extends keyof FilterState>(
    category: T,
    value: FilterState[T][number]
  ) => {
    setFilters(prev => {
      const categoryFilters = prev[category] as any[];
      const newFilters = categoryFilters.includes(value)
        ? categoryFilters.filter(v => v !== value)
        : [...categoryFilters, value];
      
      const updated = {
        ...prev,
        [category]: newFilters,
      };
      
      onFilterChange(updated);
      return updated;
    });
  };

  const clearFilters = () => {
    const cleared = {
      types: [],
      languages: [],
      costs: [],
      neighborhoods: [],
    };
    setFilters(cleared);
    onFilterChange(cleared);
    setOpenDropdown(null);
  };

  const hasActiveFilters = 
    filters.types.length > 0 ||
    filters.languages.length > 0 ||
    filters.costs.length > 0 ||
    filters.neighborhoods.length > 0;

  const toggleDropdown = (dropdown: DropdownType) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3 items-center">
        {/* Types Dropdown */}
        <div className="relative" ref={el => dropdownRefs.current.types = el}>
          <FilterDropdownButton
            label="Type"
            count={filters.types.length}
            isOpen={openDropdown === 'types'}
            onClick={() => toggleDropdown('types')}
          />
          
          {openDropdown === 'types' && (
            <DropdownMenu width="w-64">
              {typeOptions.map(type => (
                <CheckboxItem
                  key={type.value}
                  checked={filters.types.includes(type.value)}
                  onChange={() => toggleFilter('types', type.value)}
                >
                  <span className={`w-6 h-6 ${type.color} rounded-full flex items-center justify-center text-sm`}>
                    {type.emoji}
                  </span>
                  <span className="text-sm">{type.label}</span>
                </CheckboxItem>
              ))}
            </DropdownMenu>
          )}
        </div>

        {/* Language Dropdown */}
        <div className="relative" ref={el => dropdownRefs.current.languages = el}>
          <FilterDropdownButton
            label="Language"
            count={filters.languages.length}
            isOpen={openDropdown === 'languages'}
            onClick={() => toggleDropdown('languages')}
          />
          
          {openDropdown === 'languages' && (
            <DropdownMenu width="w-48">
              {uniqueLanguages.map(lang => (
                <CheckboxItem
                  key={lang}
                  checked={filters.languages.includes(lang)}
                  onChange={() => toggleFilter('languages', lang)}
                >
                  <span className="text-sm capitalize">{lang}</span>
                </CheckboxItem>
              ))}
            </DropdownMenu>
          )}
        </div>

        {/* Cost Dropdown */}
        <div className="relative" ref={el => dropdownRefs.current.costs = el}>
          <FilterDropdownButton
            label="Cost"
            count={filters.costs.length}
            isOpen={openDropdown === 'costs'}
            onClick={() => toggleDropdown('costs')}
          />
          
          {openDropdown === 'costs' && (
            <DropdownMenu>
              {uniqueCosts.map(cost => (
                <CheckboxItem
                  key={cost}
                  checked={filters.costs.includes(cost!)}
                  onChange={() => toggleFilter('costs', cost!)}
                >
                  <span className="text-sm">{cost}</span>
                </CheckboxItem>
              ))}
            </DropdownMenu>
          )}
        </div>

        {/* Neighborhood Dropdown */}
        <div className="relative" ref={el => dropdownRefs.current.neighborhoods = el}>
          <FilterDropdownButton
            label="Neighborhood"
            count={filters.neighborhoods.length}
            isOpen={openDropdown === 'neighborhoods'}
            onClick={() => toggleDropdown('neighborhoods')}
          />
          
          {openDropdown === 'neighborhoods' && (
            <DropdownMenu>
              {uniqueNeighborhoods.map(neighborhood => (
                <CheckboxItem
                  key={neighborhood}
                  checked={filters.neighborhoods.includes(neighborhood!)}
                  onChange={() => toggleFilter('neighborhoods', neighborhood!)}
                >
                  <span className="text-sm">{neighborhood}</span>
                </CheckboxItem>
              ))}
            </DropdownMenu>
          )}
        </div>

        {/* Clear Selected Filters */}
        <button
          onClick={clearFilters}
          disabled={!hasActiveFilters}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            hasActiveFilters 
              ? 'bg-accent hover:bg-accent/80' 
              : 'text-gray-400 bg-muted cursor-not-allowed'
          }`}
        >
          Clear all
        </button>
      </div>

      {/* Active Filter Tags */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-3">
          {filters.types.map(type => {
            const typeOption = typeOptions.find(t => t.value === type);
            return (
              <FilterTag key={type} onRemove={() => toggleFilter('types', type)}>
                <span>{typeOption?.emoji}</span>
                <span>{typeOption?.label}</span>
              </FilterTag>
            );
          })}
          {filters.languages.map(lang => (
            <FilterTag key={lang} onRemove={() => toggleFilter('languages', lang)}>
              <span className="capitalize">{lang}</span>
            </FilterTag>
          ))}
          {filters.costs.map(cost => (
            <FilterTag key={cost} onRemove={() => toggleFilter('costs', cost)}>
              {cost}
            </FilterTag>
          ))}
          {filters.neighborhoods.map(neighborhood => (
            <FilterTag key={neighborhood} onRemove={() => toggleFilter('neighborhoods', neighborhood)}>
              {neighborhood}
            </FilterTag>
          ))}
        </div>
      )}
    </div>
  );
}