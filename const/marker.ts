import markerStar from "@/assets/markers/star.png";
import markerCastleBlack from "@/assets/markers/castle-black.png";
import markerCastleBlue from "@/assets/markers/castle-blue.png";
import markerCastleRed from "@/assets/markers/castle-red.png";
import markerCastleGreen from "@/assets/markers/castle-green.png";
import markerCastleYellow from "@/assets/markers/castle-yellow.png";

export const MARKER_COLORS = [
  {
    color: "star",
    img: markerStar,
  },
  {
    color: "green",
    img: markerCastleGreen,
  },
  {
    color: "blue",
    img: markerCastleBlue,
  },
  {
    color: "red",
    img: markerCastleRed,
  },
  {
    color: "black",
    img: markerCastleBlack,
  },
] as const;

export const MARKER_SELECT_COLOR = {
  color: "yellow",
  img: markerCastleYellow,
};

export const MARKER_COLOR_NAMES = MARKER_COLORS.map((marker) => marker.color);
export const MARKER_COLOR_IMG = MARKER_COLORS.map((marker) => marker.img);
