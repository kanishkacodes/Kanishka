"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import Image from "next/legacy/image";

const words = `Images of broken light which dance before me like a million eyes They call me on and on across the universe`;

function MainHero() {
  return (
    <div>
      <div>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-5xl"
          >
            {/* Click on my{" "}
            <Link href="https://github.com/kanishkacodes">
              <span className="border-b border-slate-500 from-red-300 to-red-500">
                Portfolio
              </span>
            </Link>
            <br /> */}
            <TextGenerateEffect words={words} />
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-xl"
          >
            <div className="flex justify-center space-x-4">
              <Link href="https://www.linkedin.com/in/kumarkanishka/">
                <Image
                  src="/flaticon/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://github.com/kanishkacodes">
                <Image
                  src="/flaticon/github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://twitter.com/knishkakumar">
                <Image
                  src="/flaticon/twitter.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.instagram.com/knishkakumar/">
                <Image
                  src="/flaticon/instagram.png"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="mailto:kanishka.bitm@gmail.com">
                <Image
                  src="/flaticon/Untitled.png"
                  alt="Email"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </motion.h1>
        </LampContainer>
      </div>
    </div>
  );
}

export default MainHero;
