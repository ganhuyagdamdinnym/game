"use client"
import blocks from "./assets/blocks.json"
//import Image from "next/image"
import { useRouter } from "next/navigation"
export default function Home() {
  const router = useRouter()
  const playButton = () => {
    router.push("/play")
    console.log("hi", blocks)
  }
  return (
    <div style={{ backgroundImage: `url("/woodbg.png")` }} className="w-screen h-screen bg-cover flex justify-center items-center">
      <div>
        <button onClick={() => playButton()} style={{ background: `url("/wood4.jpeg")` }} className=" px-6 py-2 rounded-3xl text-2xl border-[6px] border-black">Play</button>
      </div>
    </div>
  )
}
