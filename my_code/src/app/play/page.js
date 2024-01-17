"use client"
import blocks from "../assets/blocks.json"
import { Block } from "../components/Block"
export default function Play() {
    console.log("hi", blocks)
    return (
        <div style={{ backgroundImage: `url("/woodbg.png")` }} className="w-screen h-screen bg-cover flex flex-col justify-center items-center gap-10">
            <div className="w-[500px] bg-white"></div>
            <div className="w-[530px] h-[530px] bg-[#5F0606] border-[10px] border-[#870E0E] flex flex-wrap rounded-xl gap-[1px]">
                {
                    blocks.map((e) => (
                        <Block id={e.id} />
                    ))
                }
            </div>
            <div className="w-[520px] h-36 bg-white">
            </div>
        </div>)
}