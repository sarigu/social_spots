'use client';

import { useState } from 'react';
import { SocialSpot, SpotTypeValue, getNeighborhoodFromPostalCode } from '@/lib/spots.repository';
import Link from "next/link";
import Image from "next/image";

interface SocialSpotsAccordionProps {
  spots: SocialSpot[];
}

const typeConfig: Record<SpotTypeValue, { color: string; emoji: string }> = {
  food: { color: 'bg-yellow-300', emoji: '🍜' },
  sports: { color: 'bg-blue-400', emoji: '⚽' },
  gardening: { color: 'bg-green-200', emoji: '🌱' },
  volunteering: { color: 'bg-purple-400', emoji: '🤝' },
  culture_house: { color: 'bg-red-300', emoji: '🏠' },
  games: { color: 'bg-pink-400', emoji: '🎮' },
  creativity: { color: 'bg-orange-400', emoji: '🎨' },
};

export default function SocialSpotsAccordion({ spots }: SocialSpotsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  if (!spots || !Array.isArray(spots)) {
    return <div>No social spots available</div>;
  }

  return (
    <div className="space-y-3">
      {spots.map((spot, index) => {
        const isOpen = openIndex === index;
        const neighborhood = getNeighborhoodFromPostalCode(spot.postal_code);
        
        const types = Array.isArray(spot.type) ? spot.type : [];

        return (
          <div
            key={spot.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
                <div className="grid grid-cols-[auto_1fr] gap-10 items-center">
                    <div className="flex gap-1 w-24">
                        {types.map((type, index) => {
                            const value = typeof type === 'object' ? type.value : type;
                            const label = typeof type === 'object' ? type.label : type;
                            const config = typeConfig[value as SpotTypeValue];
                            
                            if (!config) return null;
                            
                            return (
                                <div
                                    key={index}
                                    className={`w-8 h-8 ${config.color} rounded-full flex items-center justify-center text-md`}
                                    title={label}
                                >
                                    {config.emoji}
                                </div>
                            );
                        })}
                    </div>

                    {/* Title and Types */}
                    <div className="text-left min-w-0"> 
                        <span className="font-semibold text-gray-900">{spot.title}</span>
                        <p className="text-sm text-gray-600">
                        {types.map(t => typeof t === 'object' ? t.label : t).join(', ')}
                        </p>
                    </div>
                </div>

                {/* Arrow Icon */}
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    />
              </svg>
            </button>

            {/* Accordion Content */}
            {isOpen && (
              <div className="px-6 py-8 bg-gray-50 border-t border-gray-200">
                <dl className="space-y-6">
                  {spot.description && (
                    <div>
                      <dt className="text-sm font-bold text-gray-700 mb-1">
                        Description
                      </dt>
                      <dd className="text-sm text-gray-900">{spot.description}</dd>
                    </div>
                  )}

                  {spot.time_details && (
                    <div>
                      <dt className="text-sm font-bold text-gray-700 mb-1">When</dt>
                      <dd className="text-sm text-gray-900">{spot.time_details}</dd>
                    </div>
                  )}

                  {spot.cost && (
                    <div>
                      <dt className="text-sm font-bold text-gray-700 mb-1">Cost</dt>
                      <dd className="text-sm text-gray-900">{spot.cost}</dd>
                    </div>
                  )}

                  {spot.language && spot.language.length > 0 && (
                    <div>
                      <dt className="text-sm font-bold text-gray-700 mb-1">
                        Language
                      </dt>
                      <dd className="text-sm text-gray-900">
                        {spot.language.map(lang => lang.label).join(', ')}
                      </dd>
                    </div>
                  )}

                  {/* Address */}
                  {(spot.street || spot.street_number || spot.postal_code) && (
                    <div>
                      <dt className="text-sm font-bold text-gray-700 mb-1">
                        Location
                      </dt>
                      <dd className="text-sm text-gray-900">
                        {spot.street && spot.street_number && (
                          <div>{`${spot.street} ${spot.street_number}`}</div>
                        )}
                        {spot.postal_code && (
                          <div>
                            {spot.postal_code} København {neighborhood && `- ${neighborhood}`}
                          </div>
                        )}
                      </dd>
                    </div>
                  )}

                  {/* Links */}
                  {(spot.website || spot.instagram || spot.facebook) && (
                    <div>
                      <dt className="text-sm font-bold text-gray-700 mb-1">Links</dt>
                      <dd className="flex flex-row gap-3 mt-2">
                        {spot.website && (
                            <Link href={spot.website} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                <Image 
                                    src="/icons/website.svg" 
                                    alt="Website" 
                                    width={20} 
                                    height={20} 
                                />
                            </Link>
                        )}
                        {spot.instagram && (
                            <Link href={spot.instagram} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                <Image 
                                    src="/icons/instagram.svg" 
                                    alt="Instagram" 
                                    width={20} 
                                    height={20} 
                                />
                            </Link>
                        )}
                        {spot.facebook && (
                            <Link href={spot.facebook} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                <Image 
                                    src="/icons/facebook.svg" 
                                    alt="Facebook" 
                                    width={20} 
                                    height={20} 
                                />
                            </Link>
                        )}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}