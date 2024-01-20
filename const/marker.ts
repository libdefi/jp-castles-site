import markerCastleBlack from "@/assets/markers/castle-black.png";
import markerCastleBlue from "@/assets/markers/castle-blue.png";
import markerEdit from "@/assets/markers/castle-edit.png";
import markerCastleGreen from "@/assets/markers/castle-green.png";
import markerCastleRed from "@/assets/markers/castle-red.png";
import markerCastleYellow from "@/assets/markers/castle-yellow.png";
import markerStar from "@/assets/markers/star.png";

export const MARKERS = [
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

export const MARKER_SELECT = {
  color: "yellow",
  img: markerCastleYellow,
};

export const MARKER_EDIT = {
  color: "edit",
  img: markerEdit,
};

export const MARKER_COLOR_NAMES = MARKERS.map((marker) => marker.color);
export const MARKER_COLOR_IMG = MARKERS.map((marker) => marker.img);
