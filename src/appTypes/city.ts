import { Location } from './location';

export type City = {
  name: string;
  location: Location;
};

export const Cities: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.930779,
      longitude: 6.938399,
      zoom: 12
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846697,
      longitude: 4.352544,
      zoom: 12
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.373036,
      longitude: 4.892413,
      zoom: 12
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550688,
      longitude: 9.992895,
      zoom: 12
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.230569,
      longitude: 6.787428,
      zoom: 12
    }
  }
];
