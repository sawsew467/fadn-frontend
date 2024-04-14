import { Inter } from "next/font/google";
import "../app/global.css";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Homepage",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://use.fontawesome.com/releases/v6.5.1/css/all.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
