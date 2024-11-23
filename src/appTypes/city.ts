import { Location } from './location';

export type City = {
  name: string;
  location: Location;
};

export enum CityName {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}

export const Cities = Object.values(CityName);

const citiesMap: Record<CityName, City> = {
  [CityName.PARIS]: {
    name: CityName.PARIS,
    location: { lt: 48.856663, lg: 2.351556 },
  },
  [CityName.COLOGNE]: {
    name: CityName.COLOGNE,
    location: { lt: 50.930779, lg: 6.938399 },
  },
  [CityName.BRUSSELS]: {
    name: CityName.BRUSSELS,
    location: { lt: 50.846697, lg: 4.352544 },
  },
  [CityName.AMSTERDAM]: {
    name: CityName.AMSTERDAM,
    location: { lt: 52.373036, lg: 4.892413 },
  },
  [CityName.HAMBURG]: {
    name: CityName.HAMBURG,
    location: { lt: 53.550688, lg: 9.992895 },
  },
  [CityName.DUSSELDORF]: {
    name: CityName.DUSSELDORF,
    location: { lt: 51.230569, lg: 6.787428 },
  },
} as const;

export function getCityByName(cityName: CityName): City {
  return citiesMap[cityName];
}
