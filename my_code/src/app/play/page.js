"use client";
import Image from "next/image";
import { Block } from "../components/Block";
import { RandomBlock } from "../components/Random-block";
import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
export default function Play() {
  const router = useRouter();
  const dragStart_x = useRef();
  const dragStart_y = useRef();
  const coordinatBlocks = useRef();
  const currentRef = useRef(null);
  const BlockId = useRef();
  const params = useSearchParams();
  const id = params.get("id");
  const [blockData, setBlockData] = useState([]);
  const [getblock, setGetblock] = useState([]);
  const [blockStatus, setblockStatus] = useState(false);
  const [gearStatus, setGearStatus] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const fetchBlockData = async () => {
    try {
      const url = `http://localhost:8002/blocks/${id}`;
      const res = await axios.get(url);
      setBlockData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const Point = blockData.currentPoint;
  const [block1statusCount, setBlock1statusCount] = useState(0);
  const HandleProperBlock = () => {
    console.log("GET", getblock);
    let statusCount = blockData?.coordinate?.reduce(
      (statusCount, coordinate) => {
        const changeX = coordinate.x - 0;
        const changeY = coordinate.y - 0;
        getblock?.map((blocks) => {
          let block1status = false;
          let indexArray = [];
          let status0 = false;
          let status9 = false;
          blocks.block.map((e) => {
            const xFill = e.x + changeY;
            const yFill = e.y + changeX;
            const elIndex = yFill * 10 + xFill;
            indexArray.push(elIndex);
            if (blockData?.coordinate[elIndex]?.value != true) {
              block1status = true;
            }
          });
          indexArray.filter((e) => {
            if (e == 9) {
              status9 = true;
            } else if (e == 10) {
              status0 = true;
            } else if (e == 19) {
              status9 = true;
            } else if (e == 20) {
              status0 = true;
            } else if (e == 19) {
              status9 = true;
            } else if (e == 20) {
              status0 = true;
            } else if (e == 29) {
              status9 = true;
            } else if (e == 30) {
              status0 = true;
            } else if (e == 39) {
              status9 = true;
            } else if (e == 40) {
              status0 = true;
            } else if (e == 49) {
              status9 = true;
            } else if (e == 50) {
              status0 = true;
            } else if (e == 59) {
              status9 = true;
            } else if (e == 60) {
              status0 = true;
            } else if (e == 69) {
              status9 = true;
            } else if (e == 70) {
              status0 = true;
            } else if (e == 79) {
              status9 = true;
            } else if (e == 80) {
              status0 = true;
            } else if (e == 89) {
              status9 = true;
            } else if (e == 90) {
              status0 = true;
            } else if (e == 99) {
              status9 = true;
            } else if (e == 100) {
              status0 = true;
            }
          });
          if (status9 == true && status0 == true) {
            block1status = true;
          }
          if (block1status == false) {
            statusCount = statusCount + 1;
            // alert("hi");
            console.log("hi", statusCount);
          }
        });
        return statusCount;
      },
      0
    );
    if (statusCount == 0) {
      console.log("game over", getblock.length);
    }
  };
  // console.log("count", block1statusCount);
  const getblocks = async () => {
    const url = `http://localhost:8002/getblocks`;
    const res = await axios.get(url);
    setGetblock(res.data);
  };
  const handleDrop = async (y, x) => {
    alert(x, y);
    const blockid = BlockId.current;
    console.log("block", getblock);
    const newblockData = getblock.filter((block) => block.id !== blockid);
    console.log("new", newblockData);
    const changeX = x - dragStart_x;
    const changeY = y - dragStart_y;
    const count = coordinatBlocks.current.length;
    try {
      const url = `http://localhost:8002/putBlock`;
      const res = await axios.post(url, {
        id: id,
        dragOver_x: x,
        dragOver_y: y,
        dragStart_x: dragStart_x.current,
        dragStart_y: dragStart_y.current,
        blocksCoordinate: coordinatBlocks.current,
        count: count,
      });
      setGetblock(newblockData);
      //console.log("lenght", getblock);
      if (getblock.length == 1) {
        getblocks();
      }
    } catch (err) {
      console.log(err);
    }
    fetchBlockData();
  };
  const back = (ref) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setGearStatus(false);
    }
  };
  const handleRestart = async () => {
    try {
      const url = "http://localhost:8002/restart";
      await axios.post(url, {
        id: id,
      });

      window.location.reload();

      console.log("Success");
    } catch (err) {
      console.log(err);
    }
    // fetchBlockData();
  };
  useEffect(() => {
    fetchBlockData();
    getblocks();
  }, []);
  useEffect(() => {
    HandleProperBlock();
  }, [getblock]);
  return (
    <div
      onClick={() => back(currentRef)}
      style={{ backgroundImage: `url("/wood.png")` }}
      className="w-screen h-screen bg-cover flex flex-col justify-cente items-center gap-5"
    >
      <div className="w-full flex flex-row-reverse py-1 px-2">
        {gearStatus ? (
          <div
            ref={currentRef}
            className=" bg-white absolute border-black border-8 rounded-xl py-2 px-4 flex flex-col gap-4"
          >
            <button className="flex gap-2" onClick={() => handleRestart()}>
              <Image src="restart.svg" height={24} width={24} />
              <p>Restart</p>
            </button>
            <button className="flex gap-2">
              <Image src="logout.svg" height={24} width={24} />
              <p>Log out</p>
            </button>
          </div>
        ) : (
          <Image
            onClick={() => {
              setGearStatus(!gearStatus);
            }}
            src="gear.svg"
            height={24}
            width={24}
            className="absolute"
          />
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className=" bg-[#5F0606] border-[10px] border-[#870E0E] flex flex-wrap rounded-xl gap-[1px]  ">
          <Block blockData={blockData} handleDrop={handleDrop} />
        </div>
        <div className="w-20 h-10 bg-black text-white flex items-center justify-center text-2xl ">
          {Point}
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
          BlockId={BlockId}
        />
      </div>
    </div>
  );
}
