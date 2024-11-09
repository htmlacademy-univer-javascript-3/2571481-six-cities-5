import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '@/hooks/use-map';
import { City } from '@/types/city';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '@/constants';
import 'leaflet/dist/leaflet.css';
import { Offer, Offers } from '@/types/offer';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, selectedOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.lt,
          lng: offer.location.lg
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return <div className='cities__map map' style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
