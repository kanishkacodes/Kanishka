import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from '@/components/Header';

//bg-grid-black/[0.2]

function page() {
  return (
    <div className=" h-[51rem] bg-[#fffff]  bg-grid-black/[0.2]">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <Header/>
      <h1 className="text-4xl md:text-7xl  pt-56 md:pt-40  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 items-center text-center">
        Tech Stacks
      </h1>
      <div className=" pl-0 pr-0 md:pl-56 md:pr-56 ">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-10 group">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:paused">
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/html.png"
              alt="HTML"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/css.png"
              alt="CSS"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/javascript.png"
              alt="JavaScript"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/typescript.png"
              alt="TypeScript"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/tailwind.png"
              alt="Tailwind CSS"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/react.png"
              alt="React.js"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/next-js-logo.png"
              alt="Next.js"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/Redux2.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/sass.png"
              alt="HTML"
              width={100}
              height={100}
            ></Image>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:paused"
          aria-hidden="true"
        >
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/html.png"
              alt="HTML"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/css.png"
              alt="CSS"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/javascript.png"
              alt="JavaScript"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/typescript.png"
              alt="TypeScript"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/tailwind.png"
              alt="Tailwind CSS"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/react.png"
              alt="React.js"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/next-js-logo.png"
              alt="Next.js"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/Redux2.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/sass.png"
              alt="HTML"
              width={100}
              height={100}
            ></Image>
          </li>
        </ul>
      </div>
      </div>
      <div className="group pl-0 pr-0 md:pl-56 md:pr-56">
      <div className="w-full  pt-15 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-10 group">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse group-hover:paused">
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/c.png"
              alt="HTML"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/c++.png"
              alt="CSS"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/express.png"
              alt="JavaScript"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/firebase.png"
              alt="TypeScript"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/framer.png"
              alt="Tailwind CSS"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/gsap.png"
              alt="React.js"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/mongodb.png"
              alt="Next.js"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/nodejs.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/python.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/sadcn.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/supabase.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/zod.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/aui.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/daisyui.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/mysql.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse group-hover:paused"
          aria-hidden="true"
        >
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/c.png"
              alt="HTML"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/c++.png"
              alt="CSS"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/express.png"
              alt="JavaScript"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/firebase.png"
              alt="TypeScript"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/framer.png"
              alt="Tailwind CSS"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/gsap.png"
              alt="React.js"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/mongodb.png"
              alt="Next.js"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/nodejs.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/python.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/sadcn.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/supabase.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/zod.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/aui.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/daisyui.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="w-20 md:w-32"
              src="/skills/mysql.png"
              alt="Redux"
              width={100}
              height={100}
            ></Image>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default page;
