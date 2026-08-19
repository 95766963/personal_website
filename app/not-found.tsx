import Link from "next/link";
export default function NotFound(){return <section className="not-found grid-bg"><p>ERROR_404</p><h1>Signal lost.</h1><span>The page you requested does not exist.</span><Link href="/" className="button primary">Return Home →</Link></section>}
