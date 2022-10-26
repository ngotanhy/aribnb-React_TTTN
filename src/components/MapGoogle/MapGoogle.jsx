import React from "react";

import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const distanceToMouse = (
  pt,
  mp,
  // markerProps?: object | undefined
) => {
  if (pt && mp) {
    return Number(
      Math.sqrt((pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y))
    );
  }
};

const points = [
  { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
  { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 },
];

export default function MapGoogle() {
  return (
    <div className="App">
      ;
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyD--yRWwiTR-OzW0sBaScibWW9oqcQn6bQ",
          language: "en",
          region: "ASIAN",
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
        distanceToMouse={distanceToMouse}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <div key={id}>
              <Marker
                lat={lat}
                lng={lng}
                text={id}
                tooltip={title}
                $hover={undefined}
              />
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
