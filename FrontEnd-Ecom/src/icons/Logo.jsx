import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export default function Logo() {
  const { themeMode } = useContext(ThemeContext);

  return (
    <>
      <svg
        width="149"
        height="50"
        viewBox="0 0 149 50"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.2754 14.7226L25.7746 4.61481L8.77461 14.7226L8.77461 34.4054L25.7746 44.1148L42.2754 34.4054L42.2754 14.7226Z"
          fill={themeMode == "light" ? "#fff" : "#000"}
        />
        <path
          d="M8.66037 14.6823L25.0631 5.09329L27.8389 9.84146L14.0261 17.9164L14.2517 28.2096L32.3811 17.6112L35.1568 22.3593L17.0275 32.9578L25.8862 38.2041L39.699 30.1291L42.2225 34.4456L25.8197 44.0346L8.85935 34.837L8.66037 14.6823Z"
          fill="#A7F65C"
        />
        <path
          d="M49.852 18.2348V23.1348H56.432V26.2428H49.852V31.4228H57.272V34.6148H45.932V15.0428H57.272V18.2348H49.852ZM64.7543 13.8948V34.6148H60.8343V13.8948H64.7543ZM83.0473 26.5228C83.0473 27.0828 83.01 27.5868 82.9353 28.0348H71.5953C71.6886 29.1548 72.0806 30.0321 72.7713 30.6668C73.462 31.3015 74.3113 31.6188 75.3193 31.6188C76.7753 31.6188 77.8113 30.9935 78.4273 29.7428H82.6553C82.2073 31.2361 81.3486 32.4681 80.0793 33.4388C78.81 34.3908 77.2513 34.8668 75.4033 34.8668C73.91 34.8668 72.566 34.5401 71.3713 33.8868C70.1953 33.2148 69.2713 32.2721 68.5993 31.0588C67.946 29.8455 67.6193 28.4455 67.6193 26.8588C67.6193 25.2535 67.946 23.8441 68.5993 22.6308C69.2526 21.4175 70.1673 20.4841 71.3433 19.8308C72.5193 19.1775 73.8726 18.8508 75.4033 18.8508C76.878 18.8508 78.194 19.1681 79.3513 19.8028C80.5273 20.4375 81.4326 21.3428 82.0673 22.5188C82.7206 23.6761 83.0473 25.0108 83.0473 26.5228ZM78.9873 25.4028C78.9686 24.3948 78.6046 23.5921 77.8953 22.9948C77.186 22.3788 76.318 22.0708 75.2913 22.0708C74.3206 22.0708 73.4993 22.3695 72.8273 22.9668C72.174 23.5455 71.7726 24.3575 71.6233 25.4028H78.9873ZM84.9006 26.8588C84.9006 25.2535 85.2272 23.8535 85.8806 22.6588C86.5339 21.4455 87.4392 20.5121 88.5966 19.8588C89.7539 19.1868 91.0792 18.8508 92.5726 18.8508C94.4952 18.8508 96.0819 19.3361 97.3326 20.3068C98.6019 21.2588 99.4512 22.6028 99.8806 24.3388H95.6526C95.4286 23.6668 95.0459 23.1441 94.5046 22.7708C93.9819 22.3788 93.3286 22.1828 92.5446 22.1828C91.4246 22.1828 90.5379 22.5935 89.8846 23.4148C89.2312 24.2175 88.9046 25.3655 88.9046 26.8588C88.9046 28.3335 89.2312 29.4815 89.8846 30.3028C90.5379 31.1055 91.4246 31.5068 92.5446 31.5068C94.1312 31.5068 95.1672 30.7975 95.6526 29.3788H99.8806C99.4512 31.0588 98.6019 32.3935 97.3326 33.3828C96.0632 34.3721 94.4766 34.8668 92.5726 34.8668C91.0792 34.8668 89.7539 34.5401 88.5966 33.8868C87.4392 33.2148 86.5339 32.2815 85.8806 31.0868C85.2272 29.8735 84.9006 28.4641 84.9006 26.8588ZM107.316 22.3228V29.8268C107.316 30.3495 107.438 30.7321 107.68 30.9748C107.942 31.1988 108.371 31.3108 108.968 31.3108H110.788V34.6148H108.324C105.02 34.6148 103.368 33.0095 103.368 29.7988V22.3228H101.52V19.1028H103.368V15.2668H107.316V19.1028H110.788V22.3228H107.316ZM120.496 34.8668C119.002 34.8668 117.658 34.5401 116.464 33.8868C115.269 33.2148 114.326 32.2721 113.636 31.0588C112.964 29.8455 112.628 28.4455 112.628 26.8588C112.628 25.2721 112.973 23.8721 113.664 22.6588C114.373 21.4455 115.334 20.5121 116.548 19.8588C117.761 19.1868 119.114 18.8508 120.608 18.8508C122.101 18.8508 123.454 19.1868 124.668 19.8588C125.881 20.5121 126.833 21.4455 127.524 22.6588C128.233 23.8721 128.588 25.2721 128.588 26.8588C128.588 28.4455 128.224 29.8455 127.496 31.0588C126.786 32.2721 125.816 33.2148 124.584 33.8868C123.37 34.5401 122.008 34.8668 120.496 34.8668ZM120.496 31.4508C121.205 31.4508 121.868 31.2828 122.484 30.9468C123.118 30.5921 123.622 30.0695 123.996 29.3788C124.369 28.6881 124.556 27.8481 124.556 26.8588C124.556 25.3841 124.164 24.2548 123.38 23.4708C122.614 22.6681 121.672 22.2668 120.552 22.2668C119.432 22.2668 118.489 22.6681 117.724 23.4708C116.977 24.2548 116.604 25.3841 116.604 26.8588C116.604 28.3335 116.968 29.4721 117.696 30.2748C118.442 31.0588 119.376 31.4508 120.496 31.4508ZM140.059 18.8788C141.907 18.8788 143.401 19.4668 144.539 20.6428C145.678 21.8001 146.247 23.4241 146.247 25.5148V34.6148H142.327V26.0468C142.327 24.8148 142.019 23.8721 141.403 23.2188C140.787 22.5468 139.947 22.2108 138.883 22.2108C137.801 22.2108 136.942 22.5468 136.307 23.2188C135.691 23.8721 135.383 24.8148 135.383 26.0468V34.6148H131.463V19.1028H135.383V21.0348C135.906 20.3628 136.569 19.8401 137.371 19.4668C138.193 19.0748 139.089 18.8788 140.059 18.8788Z"
          fill={themeMode == "light" ? "#fff" : "rgb(172, 171, 171)"}
        />
      </svg>
    </>
  );
}
