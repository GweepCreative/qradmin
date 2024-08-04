import * as React from "react";
import { SVGProps } from "react";
const VerifiedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1q142lx r-1inkyih"
    data-testid="verificationBadge"
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    {...props}
  >
    <linearGradient
      id="a"
      x1={4.411}
      x2={18.083}
      y1={2.495}
      y2={21.508}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#f4e72a" />
      <stop offset={0.539} stopColor="#cd8105" />
      <stop offset={0.68} stopColor="#cb7b00" />
      <stop offset={1} stopColor="#f4ec26" />
      <stop offset={1} stopColor="#f4e72a" />
    </linearGradient>
    <linearGradient
      id="b"
      x1={5.355}
      x2={16.361}
      y1={3.395}
      y2={19.133}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#f9e87f" />
      <stop offset={0.406} stopColor="#e2b719" />
      <stop offset={0.989} stopColor="#e2b719" />
    </linearGradient>
    <g fillRule="evenodd" clipRule="evenodd">
      <path
        fill="url(#a)"
        d="M13.324 3.848 11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575 3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
      />
      <path
        fill="url(#b)"
        d="M13.101 4.533 11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89 3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
      />
      <path
        fill="#d18800"
        d="m6.233 11.423 3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z"
      />
    </g>
  </svg>
);
export default VerifiedIcon;
