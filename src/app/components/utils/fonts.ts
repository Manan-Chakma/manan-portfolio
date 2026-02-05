// utils/fonts.ts or anywhere you define your fonts
import { Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap", // This is good for performance
});
