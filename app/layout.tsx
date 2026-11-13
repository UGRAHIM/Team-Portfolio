import type { Metadata, Viewport } from "next";
import { Anton, Caveat_Brush, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const caveat = Caveat_Brush({ weight: "400", subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Bassam Hussain — Team Captain, APEXION Team 164",
  description:
    "Robotics team captain leading a 10-member team at APEXION for the National Robotics League 2026.",
};

export const viewport: Viewport = { themeColor: "#09090b" };

// Runs before first paint: decides whether the robot agents build the page.
// Priority: ?agents=on|off  >  saved choice  >  reduced-motion preference.
const bootScript = `(function(){try{var q=new URLSearchParams(location.search).get('agents');var s=null;try{s=localStorage.getItem('agents')}catch(e){}var on=q?q==='on':s?s==='on':!matchMedia('(prefers-reduced-motion: reduce)').matches;if(on)document.documentElement.classList.add('build')}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${geist.variable} ${geistMono.variable} ${caveat.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="relative">{children}</body>
    </html>
  );
}
