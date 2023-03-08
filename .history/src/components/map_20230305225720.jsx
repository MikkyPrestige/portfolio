// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = 'YOUR_ACCESS_TOKEN';

// const Map = () => {
//   const mapContainer = useRef(null);
//   const [lng, setLng] = useState("");
//   const [lat, setLat] = useState("");
//   const [zoom, setZoom] = useState("");

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     return () => {
//       map.remove();
//     };
//   }, [lat,lng,zoom]);

//   return (
//     <div ref={mapContainer} className="mapContainer"
//      />
//   );
// };

// export default Map;
