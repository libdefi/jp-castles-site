import { MARKER_COLOR_NAMES } from "@/const/marker";
import { Coordinates } from "./castle";

export type MarkerColor = (typeof MARKER_COLOR_NAMES)[number];

export type CastleMarker = {
  id: number;
  name: string;
  coordinates: Coordinates;
  color?: MarkerColor;
};
