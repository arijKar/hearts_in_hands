import { Fredoka, Nunito_Sans } from "next/font/google";

export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400","600","700"],
  variable: "--font-fredoka",
});
export const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300","400","600","700"],
  variable: "--font-nunito",
});
