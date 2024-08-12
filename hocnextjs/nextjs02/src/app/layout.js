import Script from "next/script";
import { Roboto } from "next/font/google";
// import "./globals.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: [
    {
      url: "https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png",
      type: "image/png",
    },
  ],
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Script src="/js/script.js" />
      </body>
    </html>
  );
}