'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { SocialSpot as TSocialSpot, SpotTypeValue as TSpotTypeValue } from '@/types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface SpotsMapProps {
  spots: TSocialSpot[];
}

const typeConfig: Record<TSpotTypeValue, { color: string; emoji: string }> = {
  food: { color: '#fce300', emoji: '🍜' },
  sports: { color: '#42a5f5', emoji: '⚽' },
  gardening: { color: '#a5d6a7', emoji: '🌱' },
  volunteering: { color: '#b794f4', emoji: '🤝' },
  culture_house: { color: '#FECACA', emoji: '🏠' },
  games: { color: '#f687b3', emoji: '🎮' },
  creativity: { color: '#f6ad55', emoji: '🎨' },
};

const createCustomIcon = (spot: TSpotTypeValue) => {
  const primaryType = spot.type[0]?.value;
  const config = typeConfig[primaryType as TSpotTypeValue];
  
  return L.divIcon({
    html: `<div style="background-color: ${config?.color || '#94a3b8'}; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">${config?.emoji || '📍'}</div>`,
    className: 'custom-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

export default function SpotsMap({ spots }: SpotsMapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter spots that have location data
  const spotsWithLocation = spots.filter(
    spot => spot.latitude && spot.longitude
  );

  const centerPosition: [number, number] = [55.6761, 12.5683]; // Centered on Copenhagen

  if (!isClient) {
    return (
      <div className="relative w-full h-auto min-h-[500px] rounded-3xl overflow-hidden bg-muted mb-8 flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-8">
        <MapContainer
            center={centerPosition}
            zoom={12}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {spotsWithLocation.map((spot) => {
                return (
                  <Marker
                      key={spot.id}
                      position={[spot.latitude, spot.longitude]}
                      icon={createCustomIcon(spot)}
                  >
                    <Popup>
                      <div className="flex flex-col gap-2">
                          <span className="text-lg font-semibold mb-1">{spot.title}</span>
                          <div className="flex flex-row flex-wrap gap-1">
                            {spot.type.map((type, index) => {
                              return <span key={index} className="w-fit text-xs text-gray-600 bg-gray-200 rounded-2xl px-3 py-1">{type.label}</span>
                            })}    
                          </div>
                          {spot.street && spot.street_number && (
                            <p className="text-sm">
                                📍 {spot.street} {spot.street_number}, {spot.postal_code} København
                            </p>
                          )}

                          {spot.description && (
                            <p className="text-sm">{spot.description}</p>
                          )}
                      </div>
                    </Popup>
                  </Marker>
                );
            })}
        </MapContainer>
    </div>
    );
}