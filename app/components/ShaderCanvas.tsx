"use client";

import { useEffect, useRef } from "react";

export default function ShaderCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vertex = `attribute vec2 a_position; varying vec2 v_texCoord; void main(){v_texCoord=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}`;
    const fragment = `precision highp float; uniform float u_time; uniform vec2 u_resolution; uniform vec2 u_mouse; varying vec2 v_texCoord;
      float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);float a=hash(i),b=hash(i+vec2(1.,0.)),c=hash(i+vec2(0.,1.)),d=hash(i+vec2(1.,1.));vec2 u=f*f*(3.-2.*f);return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}
      void main(){vec2 uv=v_texCoord;vec2 grid=fract(uv*40.);float line=smoothstep(.02,0.,grid.x)+smoothstep(.02,0.,grid.y);float n=noise(uv*3.+u_time*.1)+noise(uv*10.-u_time*.2)*.5;vec3 bg=vec3(.039,.039,.043),accent=vec3(.176,.831,.749);float glow=smoothstep(.3,0.,distance(uv,u_mouse/u_resolution))*.2;vec3 color=bg+accent*line*.03+accent*n*.05+accent*glow;color*=1.-distance(uv,vec2(.5))*.5;gl_FragColor=vec4(color,1.);}`;
    const compile = (type: number, source: string) => { const shader = gl.createShader(type)!; gl.shaderSource(shader, source); gl.compileShader(shader); return shader; };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(program); gl.useProgram(program);
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_position"); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
    const time = gl.getUniformLocation(program,"u_time"), resolution = gl.getUniformLocation(program,"u_resolution"), mouseUniform = gl.getUniformLocation(program,"u_mouse");
    let mouse = { x: 0, y: 0 }, frame = 0;
    const resize = () => { const ratio=Math.min(devicePixelRatio,2); canvas.width=canvas.clientWidth*ratio; canvas.height=canvas.clientHeight*ratio; if(!mouse.x){mouse={x:canvas.width/2,y:canvas.height/2};} };
    const move = (e: MouseEvent) => { const rect=canvas.getBoundingClientRect(); mouse.x=(e.clientX-rect.left)/rect.width*canvas.width; mouse.y=(1-(e.clientY-rect.top)/rect.height)*canvas.height; };
    const render = (t: number) => { resize(); gl.viewport(0,0,canvas.width,canvas.height); gl.uniform1f(time,reduced?0:t*.001); gl.uniform2f(resolution,canvas.width,canvas.height); gl.uniform2f(mouseUniform,mouse.x,mouse.y); gl.drawArrays(gl.TRIANGLE_STRIP,0,4); if(!reduced) frame=requestAnimationFrame(render); };
    window.addEventListener("mousemove",move); render(0);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("mousemove",move); };
  }, []);
  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
