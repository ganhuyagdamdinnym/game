"use client"
import blocks from "../assets/blocks.json"
import { Block } from "../components/Block"
import { RandomBlock } from "../components/Random-block"
import { useEffect, useState } from "react"
import axios from "axios"
export default function Play() {
    const [blockData, setBlockData] = useState([])
    const fetchBlockData = async () => {
        try {
            const url = `http://localhost:8002/blocks`
            await axios.get(url).then((res) => setBlockData(res.data))
        } catch (err) {
            console.log(err)
        }
    }
    const handleDragStart = async () => {
        console.log(blockData)
    }
    useEffect(() => {
        fetchBlockData();
    }, [])
    return (
        <div style={{ backgroundImage: `url("/woodbg.png")` }} className="w-screen h-screen bg-cover flex flex-col justify-center items-center gap-10">

            <div className="w-[530px] h-[530px] bg-[#5F0606] border-[10px] border-[#870E0E] flex flex-wrap rounded-xl gap-[1px]">

                <Block blockData={blockData} />

            </div>
            <RandomBlock handleDragStart={handleDragStart} />
        </div>)
}