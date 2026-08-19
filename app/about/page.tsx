import Link from "next/link";
import { Reveal, SectionLabel } from "../components/UI";
import { skills } from "../data";

export const metadata={title:"About"};
export default function About(){return <>
  <section className="page-hero about-hero grid-bg"><div><SectionLabel>ABOUT</SectionLabel><Reveal><h1><span className="metallic-text">Full-stack developer and </span><span className="aurora-text">AI application engineer</span><span className="metallic-text"> based in Vancouver.</span></h1></Reveal></div><div className="about-note corner"><p>After graduating from Simon Fraser University, I built and operated a computer business.</p><p><span>●</span> Now I&apos;m focused on building useful systems at the intersection of software and AI.</p></div></section>
  <section className="section"><SectionLabel>01_CAPABILITIES</SectionLabel><div className="about-skills">{skills.map(s=><Reveal className="about-skill" key={s.title}><span>{s.index}</span><h3>{s.title}</h3><ul>{s.items.map(i=><li key={i}>{i}</li>)}</ul></Reveal>)}</div></section>
  <section className="section principles"><SectionLabel>02_PRINCIPLES</SectionLabel><div className="principle-grid">{[["01","Build for the real problem."],["02","Keep systems clear and maintainable."],["03","Use AI with judgment, not as a substitute for it."]].map(([n,t])=><Reveal className="principle corner" key={n}><span>{n}</span><h3>{t}</h3></Reveal>)}</div></section>
  <section className="about-cta"><p>Based in Vancouver and authorized to work in Canada.</p><div className="actions"><Link className="button ghost" href="/projects">View Projects</Link><Link className="button primary" href="/contact">Contact Me →</Link></div></section>
  </>}
