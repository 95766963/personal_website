"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Project } from "../data";

export function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,ease:[.22,1,.36,1]}}>{children}</motion.div>}

export function SectionLabel({children}:{children:React.ReactNode}){return <div className="section-label"><span>/</span> {children}</div>}

export function ProjectVisual({type}:{type:string}){return <div className={`project-visual ${type}`}><div className="visual-top"><i/><i/><i/><span>SYS.ACTIVE</span></div><div className="visual-grid">{Array.from({length:12}).map((_,i)=><i key={i}/>)}</div><div className="visual-center">{type==="core"?<><b>RAG</b><span>KNOWLEDGE CORE</span></>:<><b>DATA_01</b><span>ANALYTICS PIPELINE</span></>}</div></div>}

export function ProjectCard({project}:{project:Project}){return <article className="project-card corner"><div className="project-meta"><span>{project.code}</span><span>{project.year}</span></div><ProjectVisual type={project.visual}/><div className="project-copy"><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.stack.map(x=><span key={x}>{x}</span>)}</div><Link href={`/projects/${project.slug}`} className="text-link">View Project <span>→</span></Link></div></article>}
