import React from "react";
import Image from "next/image";
import Header from "@/components/Header";

const skills = [
  { src: "/skills/html.png", alt: "HTML" },
  { src: "/skills/css.png", alt: "CSS" },
  { src: "/skills/javascript.png", alt: "JavaScript" },
  { src: "/skills/typescript.png", alt: "TypeScript" },
  { src: "/skills/tailwind.png", alt: "Tailwind CSS" },
  { src: "/skills/React.png", alt: "React.js" },
  { src: "/skills/next-js-logo.png", alt: "Next.js" },
  { src: "/skills/Redux2.png", alt: "Redux" },
  { src: "/skills/sass.png", alt: "Sass" },
];

const moreSkills = [
  { src: "/skills/c.png", alt: "C" },
  { src: "/skills/c++.png", alt: "C++" },
  { src: "/skills/express.png", alt: "Express.js" },
  { src: "/skills/firebase.png", alt: "Firebase" },
  { src: "/skills/framer.png", alt: "Framer Motion" },
  { src: "/skills/gsap.png", alt: "GSAP" },
  { src: "/skills/mongodb.png", alt: "MongoDB" },
  { src: "/skills/nodejs.png", alt: "Node.js" },
  { src: "/skills/python.png", alt: "Python" },
  { src: "/skills/sadcn.png", alt: "SadCN" },
  { src: "/skills/supabase.png", alt: "Supabase" },
  { src: "/skills/zod.png", alt: "Zod" },
  { src: "/skills/aui.png", alt: "AUI" },
  { src: "/skills/daisyui.png", alt: "DaisyUI" },
  { src: "/skills/mysql.png", alt: "MySQL" },
];

const SkillList = ({ skills, reverse }) => (
  <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${reverse ? "animate-infinite-scroll-reverse" : "animate-infinite-scroll"} group-hover:paused`}>
    {skills.map((skill, index) => (
      <li key={index}>
        <Image className="w-20 md:w-32" src={skill.src} alt={skill.alt} width={100} height={100} />
      </li>
    ))}
  </ul>
);

const Page = () => (
  <div className="h-screen bg-[#fffff] bg-grid-black/[0.2]">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
    <Header />
    <h1 className="text-4xl md:text-7xl pt-56 md:pt-40 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 items-center text-center">
      Tech Stacks
    </h1>
    <div className="pl-0 pr-0 md:pl-56 md:pr-56">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-10 group">
        <SkillList skills={skills} />
        <SkillList skills={skills} />
      </div>
    </div>
    <div className="group pl-0 pr-0 md:pl-56 md:pr-56">
      <div className="w-full pt-15 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-10 group">
        <SkillList skills={moreSkills} reverse />
        <SkillList skills={moreSkills} reverse />
      </div>
    </div>
  </div>
);

export default Page;
