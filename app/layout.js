import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import ScrollProgress from "@/components/shared/ScrollProgress";
import Loader from "@/components/shared/Loader";
import CustomCursor from "@/components/shared/CustomCursor";
import { profile } from "@/data/profile";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "normal"
    }
  ],
  variable: "--font-display",
  display: "swap"
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-body",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://nithila-portfolio.vercel.app"),
  title: {
    default: `${profile.name} — Data Analyst & Analytics Specialist`,
    template: `%s | ${profile.name}`
  },
  description: profile.positioning,
  keywords: [
    "Nithila Nagamanickam",
    "Data Analyst",
    "Data Scientist",
    "Healthcare Analytics",
    "Knowledge Graphs",
    "RAG Architecture",
    "Power BI",
    "SQL",
    "Python",
    "Albany NY",
    "Business Analytics"
  ],
  authors: [{ name: profile.name, url: profile.contact.linkedin }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithila-portfolio.vercel.app",
    title: `${profile.name} — Data Analyst & Analytics Specialist`,
    description: profile.positioning,
    siteName: `${profile.name} Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Data Analyst & Analytics Specialist`,
    description: profile.positioning
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export const viewport = {
  themeColor: "#0E1013",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cabinetGrotesk.variable} ${satoshi.variable}`}>
      <body>
        <CustomCursor />
        <Loader />
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
