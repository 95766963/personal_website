import type { Metadata } from "next";
import { Header, Footer } from "./components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = { title: {default:"Stone — Full-Stack Developer & AI Application Engineer",template:"%s — Stone"}, description:"Stone builds polished web experiences and intelligent applications, from modern full-stack products to RAG systems and AI agents." };

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
