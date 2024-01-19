import { SVGProps } from "react";

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>ArrowDown</title>
      <path
        fill="currentColor"
        d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
      />
    </svg>
  );
}

export function OpenInNew(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>OpenInNew</title>
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
      />
    </svg>
  );
}

export function EditLocation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>EditLocation</title>
      <path
        fill="currentColor"
        d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q.675 0 1.338.113t1.287.312L9.575 7.5q-.275.275-.425.638T9 8.9V11q0 .825.588 1.412T11 13h2.1q.4 0 .763-.15t.637-.425l5.05-5.05q.225.65.337 1.35T20 10.2q0 2.35-1.7 5.037t-4.975 5.588q-.275.25-.625.375t-.7.125M18.35 3.85l.95.95l-5.9 5.9q-.15.15-.337.225t-.388.075h-.925q-.325 0-.537-.212T11 10.25v-.925q0-.2.075-.387T11.3 8.6l5.9-5.9zM20 4.1L17.9 2l.7-.7q.275-.275.7-.275t.7.275l.7.7q.275.275.275.7t-.275.7z"
      />
    </svg>
  );
}
