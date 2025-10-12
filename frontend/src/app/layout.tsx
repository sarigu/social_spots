import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import {loadGlobalSet} from "@/lib/global.repository";
import {loadNavigation} from "@/lib/nav.repository";
import Footer from "@/components/base/Footer";
import Disclaimer from "@/components/base/Disclaimer";
import Navbar from "@/components/base/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Spots",
  description: "Discover and Share the Best Social Spots Around You",
};

export default async function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

  const generalSettings = await loadGlobalSet('general');
  const navLinks = await loadNavigation('main_nav');
  const footerLinks = await loadNavigation('footer');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {generalSettings.disclaimer && (
          <Disclaimer 
            text={generalSettings.disclaimer} 
          />
        )}
        <Navbar 
          navLinks={navLinks} 
          generalSettings={generalSettings} 
        />
        <main>
          {children}
        </main>
        <Footer 
          footerLinks={footerLinks} 
          generalSettings={generalSettings} 
        />
      </body>
    </html>
  );
}
