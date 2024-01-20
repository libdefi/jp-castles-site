import { MARKER_COLOR_NAMES } from "@/const/marker";
import { LatLng } from "leaflet";
import { StaticImageData } from "next/image";

export type MarkerColor = (typeof MARKER_COLOR_NAMES)[number];

export type Coordinates = {
  lat: number;
  lng: number;
};

export type CastleMarker = {
  id: string;
  name: string;
  coordinates: Coordinates;
  img: StaticImageData;
};

export type CastleMarkerScale = {
  id: string;
  name: string;
  coordinates: Coordinates;
  scale: number;
};

export type CoordinatesRange = {
  lat: [number, number];
  lng: [number, number];
};

export type MapSettings = {
  center: LatLng;
  zoom: number;
};

export type MarkerData = {
  num: number;
  updateAt: number;
};
