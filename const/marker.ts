import markerCastleBlack from "@/assets/markers/castle-black.png";
import markerCastleBlue from "@/assets/markers/castle-blue.png";
import markerCastleRed from "@/assets/markers/castle-red.png";

export const MARKER_COLORS = [
  {
    color: "black",
    img: markerCastleBlack,
  },
  {
    color: "blue",
    img: markerCastleBlue,
  },
  {
    color: "red",
    img: markerCastleRed,
  },
] as const;

export const MARKER_COLOR_NAMES = MARKER_COLORS.map((marker) => marker.color);
export const MARKER_COLOR_IMG = MARKER_COLORS.map((marker) => marker.img);
