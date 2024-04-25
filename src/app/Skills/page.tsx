'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect } from 'react';

function Page() {

  

  return (
    <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  flex items-center justify-center">
      <div className="">
        

      <h1 className="text-4xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700 py-8">Web Tech Stacks:</h1>
      
      
      
      
      
      
      <div className=" w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div className="flex items-center justify-center md:justify-start [&_span]:mx-8 [&_Image]:max-w-none animate-infinite-scroll">
        <Link href="/"><span> <Image className=" w-52" src= "/skills/html.png" alt="HTML" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/css.png" alt="CSS" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/javascript.png" alt="JavaScript" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/typescript.png" alt="TypeScript" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/tailwind.png" alt="Tailwind CSS" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/react.png" alt="React.js" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-96" src= "/skills/nextjs.png" alt="Next.js" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className="w-52" src= "/skills/redux.jpg" alt="Redux" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/nodejs.png" alt="Node.js" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/express.png" alt="Express.js" width={200} height={200}></Image></span></Link>
      </div>
      <div className="flex items-center justify-center md:justify-start [&_span]:mx-8 [&_Image]:max-w-none animate-infinite-scroll" aria-hidden="true">
      <Link href="/"><span> <Image className=" w-52" src= "/skills/html.png" alt="HTML" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/css.png" alt="CSS" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/javascript.png" alt="JavaScript" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/typescript.png" alt="TypeScript" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/tailwind.png" alt="Tailwind CSS" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/react.png" alt="React.js" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-96" src= "/skills/nextjs.png" alt="Next.js" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className="w-52" src= "/skills/redux.jpg" alt="Redux" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/nodejs.png" alt="Node.js" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image className=" w-52" src= "/skills/express.png" alt="Express.js" width={200} height={200}></Image></span></Link>
      </div>
      </div>








      
     

      <h1 className="text-4xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700 py-8">Programming Languages:</h1>

      <div className="flex space-x-8" >
       
        <Link href="/"><span> <Image src= "/skills/c.png" alt="C" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/c++.png" alt="C++" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/python.png" alt="Python" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/javascript.png" alt="JavaScript" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/typescript.png" alt="TypeScript" width={200} height={200}></Image></span></Link>
      </div>

      <h1 className="text-4xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700 py-8">Familiar With:</h1>
      
      <div className="flex space-x-8">
        
        <Link href="/"><span> <Image src= "/skills/sass.png" alt="Sass" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/gsap.png" alt="GSAP" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/zod.png" alt="Zod" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/framer.png" alt="Framer Motion" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/daisyui.png" alt="DaisyUI" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/aui.png" alt="AUI" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/sadcn.png" alt="SADCN" width={200} height={200}></Image></span></Link>
      </div>
      

      <h1 className="text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700 py-8">Databases:</h1>

      <div className="flex space-x-8">
        
        <Link href="/"><span> <Image src= "/skills/mongodb.png" alt="MongoDB" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/supabase.png" alt="Supabase" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/firebase.png" alt="Firebase" width={200} height={200}></Image></span></Link>
      </div>

      </div>

    </div>
  );
}

export default Page;
