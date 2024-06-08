import { HoverImageLinks } from "@/components/HoverImageLinks";
import Header from "@/components/Header";

function page() {
  return (
    <div>
      <Header />
      <div className=" h-screen bg-[#fffff] bg-grid-black/[0.1] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-7xl flex items-center justify-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8  text-center">
          Work Experience
        </h1>
        <HoverImageLinks />
      </div>
    </div>
  );
}

export default page;
