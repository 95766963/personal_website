"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [["/","Home"],["/projects","Projects"],["/about","About"],["/contact","Contact"]] as const;

export function Header() {
  const path=usePathname(); const [open,setOpen]=useState(false); const [progress,setProgress]=useState(0);
  useEffect(()=>{const onScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;setProgress(max>0?scrollY/max*100:0)};onScroll();addEventListener("scroll",onScroll,{passive:true});return()=>removeEventListener("scroll",onScroll)},[]);
  return <><div className="scroll-progress" style={{height:`${progress}%`}}/><header className="site-header"><Link href="/" className="brand">S.</Link><nav className={open?"nav open":"nav"}>{links.map(([href,label])=>{const active=href==="/"?path===href:path.startsWith(href);return <Link key={href} href={href} onClick={()=>setOpen(false)} className={active?"active":""}><span>&gt;</span>{label}</Link>})}</nav><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open?"×":"☰"}</button></header></>;
}

export function Footer(){return <footer><Link href="/" className="brand">S.</Link><div className="footer-nav"><Link href="/">Home</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><p>© 2025 · Designed and built by Stone.</p></footer>}
