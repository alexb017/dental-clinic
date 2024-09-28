'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

export default function ContactMap() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/standard',
      center: [-74.006, 40.7128],
      zoom: 9,
    });

    // Disable map scrolling
    map.scrollZoom.disable();

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // Create a default Marker and add it to the map
    const marker = new mapboxgl.Marker()
      .setLngLat([-74.006, 40.7128])
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <section className="rounded-3xl w-full h-96 lg:w-1/2 lg:h-auto">
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
      ></div>
    </section>
  );
}
