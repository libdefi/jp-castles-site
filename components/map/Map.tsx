"use client";

import styles from "./Map.module.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import { CastleMarker } from "@/types/map";
import "leaflet/dist/leaflet.css";

type Props = {
  markers: CastleMarker[];
} & React.HTMLProps<HTMLDivElement>;

export default function Map(props: Props) {
  const { markers, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <MapContainer
        center={[35.1855, 136.89939]}
        zoom={14}
        scrollWheelZoom
        doubleClickZoom={false}
        className={styles.map_container}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers?.map((m) => (
          <Markers
            key={`${m.name}-${m.coordinates.lat}-${m.coordinates.lng}`}
            marker={m}
          />
        ))}
      </MapContainer>
    </div>
  );
}
