import React, { useState, useEffect } from 'react';
import { Navigation } from 'lucide-react';

// Define the Store interface
type Store = {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: { weekdays: string; saturday: string; sunday: string };
  coordinates: { lat: number; lng: number };
  manager: string;
  services: string[];
  image: string;
};

// ← UPDATED: exact lat/lng from your “Embed a map” iframes
const stores: Store[] = [
  {
    id: 1,
    name: 'Microspace Dodoma',
    address: 'Uhindini, Dodoma, Tanzania',
    phone: '+255123456790',
    email: 'dodoma@microspace.co.tz',
    hours: { weekdays: '8:00 AM - 8:00 PM', saturday: '8:00 AM - 8:00 PM', sunday: '10:00 AM - 6:00 PM' },
    coordinates: { lat: -6.1783239, lng: 35.7479107 },
    manager: 'Sarah Ahmed',
    services: ['Sales', 'Repairs', 'Technical Support'],
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg'
  },
  {
    id: 2,
    name: 'Microspace Dar es Salaam',
    address: 'Kariakoo Market, Dar es Salaam, Tanzania',
    phone: '+255123456789',
    email: 'dar@microspace.co.tz',
    hours: { weekdays: '8:00 AM - 8:00 PM', saturday: '8:00 AM - 8:00 PM', sunday: '10:00 AM - 6:00 PM' },
    coordinates: { lat: -6.8237541, lng: 39.2730744 },
    manager: 'John Mwangi',
    services: ['Sales', 'Repairs', 'Support', 'Warranty'],
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
  },
  {
    id: 3,
    name: 'Microspace Mwanza',
    address: 'Nyerere Road, Mwanza, Tanzania',
    phone: '+255123456791',
    email: 'mwanza@microspace.co.tz',
    hours: { weekdays: '8:00 AM - 8:00 PM', saturday: '8:00 AM - 8:00 PM', sunday: '10:00 AM - 6:00 PM' },
    coordinates: { lat: -2.5222568, lng: 32.9006342 },
    manager: 'Michael Joseph',
    services: ['Sales', 'Repairs', 'Support', 'Warranty'],
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
  }
];

const defaultStore = stores[1]; // Dar es Salaam

const StoreLocator: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState<Store>(defaultStore);

  // On mount: get user location & auto‑select nearest store
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        let nearest = defaultStore;
        let minDist = Infinity;
        stores.forEach(store => {
          const dLat = coords.latitude - store.coordinates.lat;
          const dLng = coords.longitude - store.coordinates.lng;
          const dist = dLat * dLat + dLng * dLng;
          if (dist < minDist) {
            minDist = dist;
            nearest = store;
          }
        });
        setSelectedStore(nearest);
      });
    }
  }, []);

  // Build embed URL centered on selected store
  const embedSrc = 
    `https://maps.google.com/maps?q=${selectedStore.coordinates.lat},${selectedStore.coordinates.lng}` +
    `&z=16&output=embed`;

  // Create a Google Maps directions link from user's location → store
  const getDirectionsUrl = async () => {
    if (navigator.geolocation) {
      return new Promise<string>(resolve => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const origin = `${coords.latitude},${coords.longitude}`;
          const dest   = `${selectedStore.coordinates.lat},${selectedStore.coordinates.lng}`;
          resolve(
            `https://www.google.com/maps/dir/?api=1` +
            `&origin=${origin}` +
            `&destination=${dest}` +
            `&travelmode=driving`
          );
        });
      });
    } else {
      const dest = `${selectedStore.coordinates.lat},${selectedStore.coordinates.lng}`;
      return `https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=driving`;
    }
  };

  const handleDirections = async () => {
    const url = await getDirectionsUrl();
    window.open(url, '_blank');
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Microspace Store Locator</h1>
        <p className="mb-6 text-gray-700">
          Automatically finds your nearest Microspace outlet, shows it on a map, and lets you get turn‑by‑turn directions with one click.
        </p>

        {/* Store Selection */}
        <div className="flex space-x-4 mb-6">
          {stores.map(store => (
            <button
              key={store.id}
              onClick={() => setSelectedStore(store)}
              className={`flex-1 py-2 rounded-lg border transition-shadow hover:shadow-md ${
                store.id === selectedStore.id ? 'bg-blue-100' : 'bg-white'
              }`}
            >
              {store.name}
            </button>
          ))}
        </div>

        {/* Embedded Map */}
        <div className="mb-8 rounded-lg overflow-hidden border">
          <iframe
            title="Store location map"
            src={embedSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Store Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <img
              src={selectedStore.image}
              alt={selectedStore.name}
              className="w-32 h-32 object-cover rounded-lg mr-6 mb-4 md:mb-0"
            />
            <div>
              <h2 className="text-2xl font-bold">{selectedStore.name}</h2>
              <p className="text-gray-600">{selectedStore.address}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p><strong>Phone:</strong> <a href={`tel:${selectedStore.phone}`} className="text-blue-600">{selectedStore.phone}</a></p>
              <p><strong>Email:</strong> {selectedStore.email}</p>
              <p><strong>Manager:</strong> {selectedStore.manager}</p>
            </div>
            <div>
              <p><strong>Hours:</strong></p>
              <p>Mon–Sat: {selectedStore.hours.weekdays}</p>
              <p>Sun: {selectedStore.hours.sunday}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleDirections}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Navigation className="h-5 w-5 mr-2" />
              Get Directions
            </button>
            <a
              href={`tel:${selectedStore.phone}`}
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              Call Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
