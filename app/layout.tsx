import type { Metadata } from "next";
import { Header, Footer } from "./components/SiteChrome";
import "./globals.css";

const title = "Stone — Full-Stack Developer & AI Engineer";
const description = "Full-stack developer building modern web products, RAG systems, and AI agents in Vancouver.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: title, template: "%s — Stone" },
  description,
  openGraph: {
    title,
    description,
    siteName: "Stone Portfolio",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Stone — Full-Stack Developer & AI Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
