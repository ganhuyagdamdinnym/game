"use client";
import blocks from "../assets/blocks.json";
import { Block } from "../components/Block";
import { RandomBlock } from "../components/Random-block";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
export default function Play() {
  const params = useSearchParams();
  const id = params.get("id");
  // console.log(id);
  const [blockData, setBlockData] = useState([]);
  const [getblock, setGetblock] = useState([]);
  const fetchBlockData = async () => {
    try {
      const url = `http://localhost:8002/blocks/${id}`;
      await axios.get(url).then((res) => setBlockData(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const getblocks = async () => {
    const url = `http://localhost:8002/getblocks`;
    await axios.get(url).then((res) => setGetblock(res.data));
  };
  const handleDragStart = async (e, blocks) => {
    alert("aa");
  };
  const handleDrop = async (y, x) => {
    alert("dragOver " + y + "---" + x);
    try {
      const url = `http://localhost:8002/putBlock`;
      await axios.post(url, {
        id: id,
        y: y,
        x: x,
      });
    } catch (err) {
      console.log(err);
    }
    fetchBlockData();
    // if(y=0){
    //   blockData.row1.map((e)=>(

    //   ))
    // }
    setBlockData(blockData.row1[0].value == true);
    console.log(blockData.row1[0].value);
  };
  // console.log(getblock);
  useEffect(() => {
    fetchBlockData();
    getblocks();
  }, []);
  return (
    <div
      style={{ backgroundImage: `url("/woodbg.png")` }}
      className="w-screen h-screen bg-cover flex flex-col justify-center items-center gap-10"
    >
      <div className=" bg-[#5F0606] border-[10px] border-[#870E0E] flex flex-wrap rounded-xl gap-[1px]">
        <Block blockData={blockData} handleDrop={handleDrop} />
      </div>
      <RandomBlock
        handleDragStart={handleDragStart}
        getblock={getblock}
        setGetblock={setGetblock}
      />
    </div>
  );
}
