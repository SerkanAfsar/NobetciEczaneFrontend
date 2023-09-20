import React, { useEffect, useRef } from "react";

const DEFAULT_ZOOM = 15;

export const GoogleMaps = ({ lat, lng, name }) => {
  const ref = useRef(null);
  const label = {
    text: name,
    color: "#fff",
  };

  useEffect(() => {
    if (ref && ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: {
          lat: parseFloat(lat),
          lng: parseFloat(lng),
        },
        zoom: DEFAULT_ZOOM,
      });
      new google.maps.Marker({
        position: {
          lat: parseFloat(lat),
          lng: parseFloat(lng),
        },
        label: {
          text: name,
          fontSize: "16px",
          color: "#fff",
        },
        map,
      });
    }
  }, [ref, lat, lng]);

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "400px", display: "block" }}
    />
  );
};
