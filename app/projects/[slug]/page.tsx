import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../data";
import { ProjectVisual, Reveal, SectionLabel } from "../../components/UI";

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=projects.find(p=>p.slug===slug);if(!project)notFound();return <><section className="project-detail-hero grid-bg"><SectionLabel>PROJECT / {project.code.replace("SCOPE: ","")}</SectionLabel><Reveal><h1>{project.title}</h1><p>{project.summary}</p></Reveal><div className="tags">{project.stack.map(x=><span key={x}>{x}</span>)}</div></section><section className="section detail-body"><ProjectVisual type={project.visual}/><div className="detail-copy"><SectionLabel>01_OVERVIEW</SectionLabel><h2>Building a useful system.</h2><p>{project.description}</p>{project.repository?<a href={project.repository} target="_blank" rel="noreferrer" className="button primary">View GitHub ↗</a>:<div className="link-placeholder"><span>Repository and live demo</span><strong>Details coming soon</strong></div>}<Link href="/projects" className="button ghost detail-back">← Back to Projects</Link></div></section></>}
