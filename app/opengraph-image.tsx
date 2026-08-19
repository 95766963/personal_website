import { ImageResponse } from "next/og";

export const alt = "Stone — Full-Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",position:"relative",background:"#0a0a0b",color:"#f5f5f5",fontFamily:"Arial, sans-serif",padding:"76px",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,display:"flex",opacity:.23,backgroundImage:"linear-gradient(#1e1e21 1px, transparent 1px), linear-gradient(90deg, #1e1e21 1px, transparent 1px)",backgroundSize:"40px 40px"}} />
      <div style={{position:"absolute",width:540,height:540,right:-80,top:20,borderRadius:"50%",background:"radial-gradient(circle, rgba(45,212,191,.24), rgba(45,212,191,0) 68%)"}} />
      <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",width:"100%",border:"1px solid #1e1e21",padding:"48px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:18,letterSpacing:3,color:"#a1a1aa"}}><span style={{fontSize:34,fontWeight:700,color:"#2dd4bf",letterSpacing:-2}}>S.</span><span>VANCOUVER · FULL-STACK + AI</span></div>
        <div style={{display:"flex",flexDirection:"column"}}><div style={{fontSize:76,fontWeight:700,lineHeight:.98,letterSpacing:-4}}>Full-Stack Developer</div><div style={{fontSize:76,fontWeight:700,lineHeight:.98,letterSpacing:-4,color:"#2dd4bf"}}>&amp; AI Engineer</div><div style={{fontSize:22,color:"#a1a1aa",marginTop:26}}>Modern web products · RAG systems · AI agents</div></div>
        <div style={{display:"flex",alignItems:"center",gap:12,fontSize:16,letterSpacing:2,color:"#71807d"}}><span style={{color:"#2dd4bf"}}>●</span> SYSTEM ONLINE <span style={{marginLeft:"auto",color:"#2dd4bf"}}>&gt; stone@portfolio</span></div>
      </div>
    </div>, size
  );
}
