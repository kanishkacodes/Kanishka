import { HoverImageLinks } from "@/components/HoverImageLinks"
import Header from "@/components/Header"

function page() {
  return (
    <div>
      <Header/>
      <div className=" h-[40rem] flex flex-col items-center justify-center">
      <HoverImageLinks />
      </div>
    </div>
  )
}

export default page
