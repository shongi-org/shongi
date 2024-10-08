import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocationPicker = () => {
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]); // Default position
  const [location, setLocation] = useState('');
  const [marker, setMarker] = useState<L.LatLngExpression | null>(null);

  // Hook for handling map click events
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setMarker(e.latlng);
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const searchLocation = async (event: React.FormEvent) => {
    event.preventDefault();
    if (location.trim() === '') return;
    console.log("token===", process.env.NEXT_PUBLIC_MAPBOX_TOKEN)
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
    );

    const data = await response.json();

    if (data.features.length > 0) {
      const [longitude, latitude] = data.features[0].center;
      setPosition([latitude, longitude]);
      setMarker([latitude, longitude]);
    }
  };

  return (
    <div>
      <form onSubmit={searchLocation} className="mb-4">
        <input
          type="text"
          value={location}
          onChange={handleInputChange}
          placeholder="Search for a location"
          className="border border-gray-300 rounded p-2 w-full"
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>

      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler />
        {marker && (
          <Marker position={marker}>
            <Popup>You are here!</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default LocationPicker;
