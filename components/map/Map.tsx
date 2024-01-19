"use client";

import { DEFAULT_ZOOM, ZOOM_MAX, ZOOM_MIN } from "@/const/scale";
import useMarker from "@/hooks/useMarker";
import { CastleMarker } from "@/types/map";
import { LatLng, LatLngBounds, LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import styles from "./Map.module.scss";
import Markers from "./Markers";

export default function CastleMap() {
  const [markers, setMarkers] = useState<CastleMarker[]>([]);

  const initCenter = new LatLng(35.1855, 136.89939);
  const sw = new LatLng(55, 160);
  const ne = new LatLng(18, 115);
  const maxBounds: LatLngBoundsExpression = new LatLngBounds(sw, ne);

  return (
    <MapContainer
      center={initCenter}
      zoom={DEFAULT_ZOOM}
      minZoom={ZOOM_MIN}
      maxZoom={ZOOM_MAX}
      maxBounds={maxBounds}
      scrollWheelZoom
      doubleClickZoom
      zoomControl={false}
      className={styles.map_container}
    >
      <InnerMapContainer initCenter={initCenter} setMarkers={setMarkers} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((m) => (
        <Markers
          key={`${m.name}-${m.coordinates.lat}-${m.coordinates.lng}`}
          marker={m}
          isSelected={false}
        />
      ))}
    </MapContainer>
  );
}

type InnerMapContainerProps = {
  initCenter: LatLng;
  setMarkers: (markers: CastleMarker[]) => void;
};

function InnerMapContainer({ initCenter, setMarkers }: InnerMapContainerProps) {
  const [markers, { setZoom, setBounds }] = useMarker();

  useMapEvents({
    moveend: (e) => setBounds(e.target.getBounds()),
    zoomend: (e) => {
      setZoom(e.target.getZoom());
      setBounds(e.target.getBounds());
    },
    layeradd: (e) => {
      setZoom(e.target.getZoom());
      setBounds(e.target.getBounds());
    },
  });

  useEffect(() => {
    setMarkers(markers);
  }, [setMarkers, markers]);

  return <div />;
}
