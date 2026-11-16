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
// Second part: blacks the page out (uo-wait) until the team intro takes over; gives up after 4s if it never loads.
const bootScript = `(function(){try{var q=new URLSearchParams(location.search).get('agents');var s=null;try{s=localStorage.getItem('agents')}catch(e){}var on=q?q==='on':s?s==='on':!matchMedia('(prefers-reduced-motion: reduce)').matches;if(on)document.documentElement.classList.add('build')}catch(e){}})();
(function(){var d=document.documentElement,seen=false;try{seen=sessionStorage.getItem('apx-intro')==='1'}catch(e){}if(seen)return;d.classList.add('uo-wait');setTimeout(function(){if(window.APX_UO)return;d.classList.remove('uo-wait');window.APX_ENTERED=true;dispatchEvent(new Event('apx:enter'))},4000)})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${geist.variable} ${geistMono.variable} ${caveat.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="stylesheet" href="/intro/forge.css" />
      </head>
      <body className="relative">
        {children}
        {/* Team APEXION forge intro: builds its own overlay, then fires "apx:enter" */}
        <script src="/intro/forge.js" />
      </body>
    </html>
  );
}
