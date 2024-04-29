"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

function Page() {
  useEffect(() => {
    const duplicateList = () => {
      const ul = document.getElementById("logos");
      const duplicate = ul.cloneNode(true);
      duplicate.setAttribute("aria-hidden", "true");
      ul.parentNode.insertBefore(duplicate, ul.nextSibling);
    };

    const ul = document.getElementById("logos");
    ul.addEventListener("animationiteration", duplicateList);

    return () => {
      ul.removeEventListener("animationiteration", duplicateList);
    };
  }, []);

  //dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center

  return (
    <div className="dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <div className="">
        <h1 className="text-4xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700 py-8 items-center text-center">
          Web Tech Stacks:
        </h1>

        <div className="w-full inline-flex flex-nowrap overflow-hidden mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)">
          <ul
            id="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
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
                src="/skills/nextjs.png"
                alt="Next.js"
                width={100}
                height={100}
              ></Image>
            </li>
            <li>
              <Image
                className="w-20 md:w-32"
                src="/skills/redux.jpg"
                alt="Redux"
                width={100}
                height={100}
              ></Image>
            </li>
          </ul>
          <ul
            id="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
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
                src="/skills/nextjs.png"
                alt="Next.js"
                width={100}
                height={100}
              ></Image>
            </li>
            <li>
              <Image
                className="w-20 md:w-32"
                src="/skills/redux.jpg"
                alt="Redux"
                width={100}
                height={100}
              ></Image>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700 py-8 items-center text-center">
          Web Tech Stacks:
        </h1>

        <div className="w-full inline-flex flex-nowrap overflow-hidden mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)">
          <ul
            id="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
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
                src="/skills/nextjs.png"
                alt="Next.js"
                width={100}
                height={100}
              ></Image>
            </li>
            <li>
              <Image
                className="w-20 md:w-32"
                src="/skills/redux.jpg"
                alt="Redux"
                width={100}
                height={100}
              ></Image>
            </li>
          </ul>
          <ul
            id="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
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
                src="/skills/nextjs.png"
                alt="Next.js"
                width={100}
                height={100}
              ></Image>
            </li>
            <li>
              <Image
                className="w-20 md:w-32"
                src="/skills/redux.jpg"
                alt="Redux"
                width={100}
                height={100}
              ></Image>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700 py-8 items-center text-center">
          Web Tech Stacks:
        </h1>

        <div className="w-full inline-flex flex-nowrap overflow-hidden mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)">
          <ul
            id="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
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
                src="/skills/nextjs.png"
                alt="Next.js"
                width={100}
                height={100}
              ></Image>
            </li>
            <li>
              <Image
                className="w-20 md:w-32"
                src="/skills/redux.jpg"
                alt="Redux"
                width={100}
                height={100}
              ></Image>
            </li>
          </ul>
          <ul
            id="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
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
                src="/skills/nextjs.png"
                alt="Next.js"
                width={100}
                height={100}
              ></Image>
            </li>
            <li>
              <Image
                className="w-20 md:w-32"
                src="/skills/redux.jpg"
                alt="Redux"
                width={100}
                height={100}
              ></Image>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700 py-8 items-center text-center">
          Web Tech Stacks:
        </h1>

        <div className="w-full inline-flex flex-nowrap overflow-hidden mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)">
          <ul
            id="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
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
                src="/skills/nextjs.png"
                alt="Next.js"
                width={100}
                height={100}
              ></Image>
            </li>
            <li>
              <Image
                className="w-20 md:w-32"
                src="/skills/redux.jpg"
                alt="Redux"
                width={100}
                height={100}
              ></Image>
            </li>
          </ul>
          <ul
            id="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
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
                src="/skills/nextjs.png"
                alt="Next.js"
                width={100}
                height={100}
              ></Image>
            </li>
            <li>
              <Image
                className="w-20 md:w-32"
                src="/skills/redux.jpg"
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

export default Page;
