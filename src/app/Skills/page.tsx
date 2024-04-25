import Link from "next/link";
import Image from "next/image";

function Page() {
  return (
    <div>

      <h1>Web Tech Stacks:</h1>

      <div>
        <Link href="/"><span> <Image src= "/skills/html.png" alt="HTML" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/css.png" alt="CSS" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/javascript.png" alt="JavaScript" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/typescript.png" alt="TypeScript" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/tailwind.png" alt="Tailwind CSS" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/react.png" alt="React.js" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/nextjs.png" alt="Next.js" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/redux.jpg" alt="Redux" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/nodejs.png" alt="Node.js" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/express.png" alt="Express.js" width={200} height={200}></Image></span></Link>
      </div>

      <div>
        <h1>Programming Languages:</h1>
        <Link href="/"><span> <Image src= "/skills/c.png" alt="C" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/c++.png" alt="C++" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/python.png" alt="Python" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/javascript.png" alt="JavaScript" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/typescript.png" alt="TypeScript" width={200} height={200}></Image></span></Link>
      </div>

      <div>
        <h1>Familiar With:</h1>
        <Link href="/"><span> <Image src= "/skills/sass.png" alt="Sass" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/gsap.png" alt="GSAP" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/zod.png" alt="Zod" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/framer.png" alt="Framer Motion" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/daisyui.png" alt="DaisyUI" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/aui.png" alt="AUI" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/sadcn.png" alt="SADCN" width={200} height={200}></Image></span></Link>
      </div>

      <div>
        <h1>Databases:</h1>
        <Link href="/"><span> <Image src= "/skills/mongodb.png" alt="MongoDB" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/supabase.png" alt="Supabase" width={200} height={200}></Image></span></Link>
        <Link href="/"><span> <Image src= "/skills/firebase.png" alt="Firebase" width={200} height={200}></Image></span></Link>
      </div>

    </div>
  );
}

export default Page;
