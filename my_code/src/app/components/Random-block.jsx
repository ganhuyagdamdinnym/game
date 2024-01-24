import { useEffect, useState } from "react";
export const RandomBlock = (props) => {
  const { getblock: blocks, setGetblock, currentBlockRef } = props;
  // useEffect(() => {
  //   handleGetBlock();
  // }, [blocks]);
  const handleDragStart = (x, y) => {
    console.log("hibrominn", x, y);
    currentBlockRef.current = {
      x: x,
      y: y,
    };
  };
  return (
    <div className="w-[520px] h-60 bg-black flex justify-around items-center">
      {blocks?.slice(0, 3).map((block, index) => (
        <div draggable>
          <RenderBlock blocks={block} handleDragStart={handleDragStart} />
        </div>
      ))}
      {/* <div className="w-36 h-36 bg-black"></div>
      <div className="w-36 h-36 bg-black"></div> */}
    </div>
  );
};
const RenderBlock = ({ blocks: { block: blocks }, handleDragStart }) => {
  // console.log(blocks);
  return Array(3)
    .fill(0)
    .map((_, y) => (
      <div style={{ display: "flex" }}>
        {Array(3)
          .fill(0)
          .map((_, x) => (
            <div
              draggable
              onDragStart={(e) => handleDragStart(x, y)}
              className={`${
                isActiveBlock(x, y, blocks) ? "hidden" : "bg-white "
              } h-[40px] w-[40px] border `}
            ></div>
          ))}
      </div>
    ));
};
const isActiveBlock = (x, y, blocks) => {
  const result = blocks.filter((blockPos) => {
    if (x === blockPos.x && y === blockPos.y) return true;
    return false;
  });

  return result.length === 0;
};
