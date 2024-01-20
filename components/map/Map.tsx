"use client";

import { ZOOM_MAX, ZOOM_MIN } from "@/const/scale";
import useMarker from "@/hooks/useMarker";
import {
  useEditMarkerMutators,
  useEditMarkerState,
} from "@/state/editMarkerState";
import { useMapModeState } from "@/state/mapModeState";
import {
  useMapSettingsMutator,
  useMapSettingsState,
} from "@/state/mapSettingsState";
import { CastleMarker } from "@/types/map";
import { LatLng, LatLngBounds, LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import getId from "../util";
import EditMarker from "./EditMarker";
import styles from "./Map.module.scss";
import Markers from "./Markers";

export default function CastleMap() {
  const [markers, setMarkers] = useState<CastleMarker[]>([]);
  const mapSettings = useMapSettingsState();
  const editMarker = useEditMarkerState();

  const sw = new LatLng(55, 160);
  const ne = new LatLng(18, 115);
  const maxBounds: LatLngBoundsExpression = new LatLngBounds(sw, ne);

  return (
    <MapContainer
      center={mapSettings.center}
      zoom={mapSettings.zoom}
      minZoom={ZOOM_MIN}
      maxZoom={ZOOM_MAX}
      maxBounds={maxBounds}
      scrollWheelZoom
      doubleClickZoom={false}
      zoomControl={false}
      className={styles.map_container}
    >
      <InnerMapContainer setMarkers={setMarkers} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((m) => (
        <Markers key={getId(m)} marker={m} isEdited={false} />
      ))}
      <EditMarker marker={editMarker} />
    </MapContainer>
  );
}

type InnerMapContainerProps = {
  setMarkers: (markers: CastleMarker[]) => void;
};

function InnerMapContainer({ setMarkers }: InnerMapContainerProps) {
  const [markers, { setZoom, setBounds }] = useMarker();
  const { setCoordinates } = useEditMarkerMutators();
  const mode = useMapModeState();
  const { setSettingsCenter, setSettingsZoom } = useMapSettingsMutator();

  useMapEvents({
    moveend: (e) => {
      setBounds(e.target.getBounds());
      setSettingsCenter(e.target.getCenter());
    },
    zoomend: (e) => {
      setZoom(e.target.getZoom());
      setBounds(e.target.getBounds());
      setSettingsZoom(e.target.getZoom());
    },
    layeradd: (e) => {
      setZoom(e.target.getZoom());
      setBounds(e.target.getBounds());
    },
    dblclick: (e) => {
      if (mode === "edit") setCoordinates(e.latlng);
    },
  });

  useEffect(() => {
    setMarkers(markers);
  }, [setMarkers, markers]);

  return <div />;
}
