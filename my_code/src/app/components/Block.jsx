export const Block = (props) => {
  const { blockData, handleDrop } = props;

  return (
    <div className="flex flex-col gap-[1px] text-white">
      <div className="flex gap-[1px]">
        {blockData.row1?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              handleDrop(0, x);
            }}
            className={`${
              _.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px] `}
          ></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row2?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(1, x)}
            className={`${
              _.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px] `}
          ></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row3?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(2, x)}
            className={`${
              _.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px] `}
          ></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row4?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(3, x)}
            className={`${
              _.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px] `}
          ></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row5?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(4, x)}
            className={`${
              _.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px] `}
          ></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row6?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(5, x)}
            className={`${
              _.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px] `}
          ></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row7?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(6, x)}
            className={`${
              _.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px] `}
          ></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row8?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(7, x)}
            className={`${
              _.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px] `}
          ></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row9?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(8, x)}
            className="bg-black h-[40px] w-[40px]"
          ></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row10?.map((_, x) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(9, x)}
            className={`${
              _.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px] `}
          ></div>
        ))}
      </div>
    </div>
  );
};
const T = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 1,
    y: 0,
  },
  {
    x: 2,
    y: 0,
  },
  {
    x: 1,
    y: 1,
  },
  {
    x: 1,
    y: 2,
  },
];

// 0 0 0
// * 0 *
// * 0 *
