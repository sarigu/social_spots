import { SocialSpot as TSocialSpot } from '@/types';

const SPOTS_API_URL = `${process.env.API_URL}/collections/social_spots/entries`;

export async function getAllSocialSpots(): Promise<TSocialSpot[]> {
  const response = await fetch(SPOTS_API_URL, {
    next: { 
      revalidate: 3600 // Cache for 1 hour (3600 seconds)
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch social spots');
  }
  
  const data = await response.json();
  
  return data.data.map((spot: TSocialSpot) => ({
    ...spot,
    neighborhood: getNeighborhoodFromPostalCode(spot.postal_code)
  }));
}

export function getNeighborhoodFromPostalCode(postalCode?: number) {
  if (!postalCode) return 'Varies by event';
  
  const code = parseInt(postalCode);
  if (isNaN(code)) return '';

  if (code >= 1000 && code <= 1499) return 'Indre By';
  if (code >= 1500 && code <= 1799) return 'Vesterbro';
  if (code >= 1800 && code <= 1999) return 'Frederiksberg';
  if (code >= 2000 && code <= 2099) return 'Nørrebro';
  if (code >= 2100 && code <= 2199) return 'Østerbro';
  if (code >= 2200 && code <= 2299) return 'Nørrebro';
  if (code >= 2300 && code <= 2399) return 'Amager';
  if (code >= 2400 && code <= 2499) return 'Amager';
  if (code >= 2500 && code <= 2599) return 'Valby';
  if (code >= 2600 && code <= 2699) return 'Vanløse';
  if (code >= 2700 && code <= 2799) return 'Brønshøj';
  if (code >= 2800 && code <= 2899) return 'Kongens Lyngby';
  if (code >= 2900 && code <= 2999) return 'Hellerup';

  return 'Varies by event'; 
}