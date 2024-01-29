import { useEffect, useState } from "react";
export const RandomBlock = (props) => {
  const {
    getblock: blocks,
    // setGetblock,
    dragStart_x,
    dragStart_y,
    coordinatBlocks,
  } = props;
  // useEffect(() => {
  //   handleGetBlock();
  // }, [blocks]);
  const handleDragStart = (blocks) => {
    // console.log("hi", blocks);
    coordinatBlocks.current = blocks;

    // console.log("blocks", blocks);
  };
  return (
    <div className="w-[520px] h-40 bg-black flex justify-around items-center">
      {blocks?.slice(0, 3).map((block, index) => (
        <RenderBlock
          blocks={block}
          handleDragStart={handleDragStart}
          dragStart_x={dragStart_x}
          dragStart_y={dragStart_y}
        />
      ))}
      {/* <div className="w-36 h-36 bg-black"></div>
      <div className="w-36 h-36 bg-black"></div> */}
    </div>
  );
};
const RenderBlock = ({
  blocks: { block: blocks },
  handleDragStart,
  dragStart_x,
  dragStart_y,
}) => {
  return (
    <div draggable onDragStart={(e) => handleDragStart(blocks)}>
      {Array(3)
        .fill(0)
        .map((_, y) => (
          <div style={{ display: "flex" }}>
            {Array(3)
              .fill(0)
              .map((_, x) => (
                <div
                  onMouseDown={() => {
                    // alert(y);
                    dragStart_y.current = y;
                    dragStart_x.current = x;
                  }}
                  className={`${
                    isActiveBlock(x, y, blocks) ? "invisible" : "bg-white "
                  } h-[40px] w-[40px] border `}
                ></div>
              ))}
          </div>
        ))}
    </div>
  );
};
const isActiveBlock = (x, y, blocks) => {
  const result = blocks.filter((blockPos) => {
    if (x === blockPos.x && y === blockPos.y) return true;
    return false;
  });

  return result.length === 0;
};
