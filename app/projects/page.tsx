import { ProjectCard, Reveal, SectionLabel } from "../components/UI";
import { projects } from "../data";

export const metadata={title:"Projects"};
export default function Projects(){return <><section className="page-hero projects-title grid-bg"><div><SectionLabel>PROJECTS</SectionLabel><Reveal><h1>Selected Projects</h1><p>Selected work across web development and applied AI. A collection of experimental applications, robust systems, and conceptual interfaces.</p></Reveal></div></section><section className="section project-index"><div className="project-list">{projects.map(p=><Reveal key={p.slug}><ProjectCard project={p}/></Reveal>)}</div><div className="coming large corner"><span>03</span><div><p>System Initializing...</p><small>New project coming soon. Check back later.</small></div></div></section></>}
