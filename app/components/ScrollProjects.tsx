"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { projects } from "../data";
import { ProjectCard, ProjectVisual } from "./UI";

const slides = [
  ...projects.map((project, index) => ({ index: `0${index + 1}`, title: project.title, code: project.code, summary: project.summary, stack: project.stack, visual: project.visual, href: `/projects/${project.slug}`, ready: true })),
  { index: "03", title: "Project 03", code: "SCOPE: INITIALIZING", summary: "A new project is currently in development. Its system profile will be available soon.", stack: ["COMING SOON"], visual: "coming", href: "", ready: false },
];

export default function ScrollProjects() {
  const section = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const rail = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  useMotionValueEvent(scrollYProgress, "change", value => { const next = Math.min(slides.length - 1, Math.floor(value * slides.length)); setActive(current => current === next ? current : next); });
  if (reduce) return <div className="scroll-projects-fallback">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>;
  const slide = slides[active];
  return <div ref={section} className="scroll-projects"><div className="scroll-projects-fallback">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div><div className="scroll-projects-sticky">
    <div className="scroll-project-copy"><div className="scroll-project-counter"><span>{slide.index}</span><i>/</i><b>03</b></div><AnimatePresence mode="wait"><motion.div key={slide.title} initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-22}} transition={{duration:.42,ease:[.22,1,.36,1]}}><p className="scroll-project-code">{slide.code}</p><h3>{slide.title}</h3><p className="scroll-project-summary">{slide.summary}</p><div className="tags">{slide.stack.map(item=><span key={item}>{item}</span>)}</div>{slide.ready?<Link href={slide.href} className="button ghost">View Project →</Link>:<span className="project-pending">SYSTEM INITIALIZING<span className="cursor"/></span>}</motion.div></AnimatePresence><div className="scroll-instruction">SCROLL TO CYCLE PROJECTS <span>↓</span></div></div>
    <div className="scroll-project-stage corner"><AnimatePresence mode="popLayout"><motion.div key={slide.title} className="scroll-project-image" initial={{opacity:0,scale:.94,y:34}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:1.04,y:-32}} transition={{duration:.55,ease:[.22,1,.36,1]}}>{slide.ready?<ProjectVisual type={slide.visual}/>:<div className="project-visual coming-visual"><div className="coming-orbit"><span>03</span></div><p>NEW SYSTEM IN DEVELOPMENT</p></div>}<div className="stage-label"><span>PROJECT_PREVIEW / {slide.index}</span><b>{slide.ready?"ONLINE":"PENDING"}</b></div></motion.div></AnimatePresence></div>
    <div className="scroll-rail"><motion.i style={{height:rail}}/>{slides.map((item,index)=><button key={item.index} onClick={()=>setActive(index)} className={index===active?"active":""} aria-label={`Show ${item.title}`}><span>{item.index}</span></button>)}</div>
  </div></div>;
}
