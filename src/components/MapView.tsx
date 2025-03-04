/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface Props {
  latitude: number;
  longitude: number;
  address?: string;
  draggable?: boolean;
  setLatLong: ({ lat, long }: { lat: string; long: string }) => void;
  setMarkerMoved: (state: boolean) => void;
}

const LocationMap: React.FC<Props> = ({
  latitude,
  longitude,
  address = 'Selected Location',
  draggable,
  setLatLong,
  setMarkerMoved,
}) => {
  // const LocationMap = React.forwardRef<HTMLDivElement | null, Props>(
  //   ({ latitude, longitude, address, draggable }, ref) => {
  React.useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  const markerRef = useRef<any>(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          // console.log(marker.getLatLng());
          const latLong = marker.getLatLng();
          setLatLong({
            lat: latLong.lat.toString(),
            long: latLong.lng.toString(),
          });
          setMarkerMoved(true);
        }
      },
    }),
    [],
  );

  return (
    <div style={{ height: '400px', width: '100%', marginTop: '1rem' }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[latitude, longitude]}
          draggable={draggable}
          ref={markerRef}
          eventHandlers={eventHandlers}
        >
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
LocationMap.displayName = 'Location Map';
export default LocationMap;
