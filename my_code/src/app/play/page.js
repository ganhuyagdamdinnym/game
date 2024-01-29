"use client";
import blocks from "../assets/blocks.json";
import { Block } from "../components/Block";
import { RandomBlock } from "../components/Random-block";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
export default function Play() {
  const dragStart_x = useRef();
  const dragStart_y = useRef();
  const coordinatBlocks = useRef();
  const params = useSearchParams();
  const id = params.get("id");
  // console.log(id);
  const [blockData, setBlockData] = useState([]);
  const [getblock, setGetblock] = useState([]);
  const [gamePoint, setGamePoint] = useState(0);
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
    console.log("x", dragStart_x.current);
    console.log("y", dragStart_y.current);
    console.log("coordinat", coordinatBlocks.current.length);
    const changeX = x - dragStart_x;
    const changeY = y - dragStart_y;
    setGamePoint(gamePoint + coordinatBlocks.current.length);
    try {
      const url = `http://localhost:8002/putBlock`;
      await axios.post(url, {
        id: id,
        dragOver_x: x,
        dragOver_y: y,
        dragStart_x: dragStart_x.current,
        dragStart_y: dragStart_y.current,
        blocksCoordinate: coordinatBlocks.current,
      });
      // setBlock
      // const url2 = `http://localhost:8002/HandleBlockFill`;
      // await axios.post(url2);
    } catch (err) {
      console.log(err);
    }
    fetchBlockData();
    //}
    // if(y=0){
    //   blockData.row1.map((e)=>(

    //   ))
    // }
    // setBlockData(blockData.row1[0].value == true);
    // console.log(blockData.row1[0].value);
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
      <div className="flex items-center gap-2">
        <div className=" bg-[#5F0606] border-[10px] border-[#870E0E] flex flex-wrap rounded-xl gap-[1px]  ">
          <Block blockData={blockData} handleDrop={handleDrop} />
        </div>
        <div className="w-20 h-10 bg-black text-white flex items-center justify-center text-2xl ">
          {gamePoint}
        </div>
      </div>

      <div>
        <RandomBlock
          handleDragStart={handleDragStart}
          getblock={getblock}
          setGetblock={setGetblock}
          dragStart_x={dragStart_x}
          dragStart_y={dragStart_y}
          coordinatBlocks={coordinatBlocks}
        />
      </div>
    </div>
  );
}
