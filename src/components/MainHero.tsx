"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

const words = `Oxygen gets you high. In a catastrophic emergency you are the`;

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
        <TextGenerateEffect words={words} />
        <br />
        Click on my <Link href= "https://github.com/kanishkacodes"><span className="border-b border-slate-500 from-red-300 to-red-500">Portfolio</span></Link> 
      </motion.h1>
      
      
    </LampContainer>

        </div>
      
    </div>
  )
}

export default MainHero
