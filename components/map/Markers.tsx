"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon, icon, Marker as Mark } from "leaflet";
import { CastleMarker } from "@/types/map";
import { MARKER_COLOR_IMG, MARKER_SELECT_COLOR } from "@/const/marker";

type Props = {
  marker: CastleMarker;
  isSelected: boolean;
};

export default function Markers(props: Props) {
  const { marker, isSelected } = props;
  const markerRef = useRef<Mark>(null);
  const [markerIcon, setMarkerIcon] = useState<Icon>(
    icon({
      iconUrl: isSelected
        ? MARKER_SELECT_COLOR.img.src
        : MARKER_COLOR_IMG[0].src,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    })
  );

  useEffect(() => {
    const markerIconSnap = icon({
      iconUrl: marker.img.src,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    setMarkerIcon(markerIconSnap);
  }, [marker.img.src]);

  return (
    <Marker ref={markerRef} position={marker.coordinates} icon={markerIcon}>
      <Popup>
        <a href={`/castle/${marker.id}`}>{marker.name}</a>
      </Popup>
    </Marker>
  );
}
