import Link from "next/link"
import Image from "next/image"


function page() {
  return (
    <div>

      <div>
      <h1>Web Tech Stacks:</h1>
      <Link href="/"><div> <Image src= "/skills/html.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/css.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/javascript.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/typescript.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/tailwind.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/react.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/nextjs.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/redux.jpg" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/nodejs.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/express.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      </div>

      <div>
      <h1>Programming Languages:</h1>
      <Link href="/"><div> <Image src= "/skills/c.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/c++.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/python.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/javascript.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/typescript.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      </div>

      <div>
      <h1>Femelier With:</h1>
      <Link href="/"><div> <Image src= "/skills/sass.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/gsap.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/zod.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/framer.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/daisyui.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/aui.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/sadcn.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      </div>

      <div>
      <h1>Databases:</h1>
      <Link href="/"><div> <Image src= "/skills/mongodb.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/supabase.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      <Link href="/"><div> <Image src= "/skills/firebase.png" alt="oaoa" width={200} height={200}></Image></div></Link>
      </div>



    </div>
  )
}

export default page
