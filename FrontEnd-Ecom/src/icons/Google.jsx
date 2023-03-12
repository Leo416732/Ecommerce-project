import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export default function Google() {
  const { themeMode } = useContext(ThemeContext);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6 10.2H12.2V13.9H17.7C17.6 14.8 17 16.2 15.7 17.1C14.9 17.7 13.7 18.1 12.2 18.1C9.60001 18.1 7.30001 16.4 6.50001 13.9C6.30001 13.3 6.20001 12.6 6.20001 11.9C6.20001 11.2 6.30001 10.5 6.50001 9.9C6.60001 9.7 6.60001 9.5 6.70001 9.4C7.60001 7.3 9.70001 5.8 12.2 5.8C14.1 5.8 15.3 6.6 16.1 7.3L18.9 4.5C17.2 3 14.9 2 12.2 2C8.30001 2 4.90001 4.2 3.30001 7.5C2.60001 8.9 2.20001 10.4 2.20001 12C2.20001 13.6 2.60001 15.1 3.30001 16.5C4.90001 19.8 8.30001 22 12.2 22C14.9 22 17.2 21.1 18.8 19.6C20.7 17.9 21.8 15.3 21.8 12.2C21.8 11.4 21.7 10.8 21.6 10.2Z"
        stroke={themeMode == "light" ? "white" : "rgb(172, 171, 171)"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
