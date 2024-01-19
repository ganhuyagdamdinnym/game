export const Block = (props) => {
  const { blockData } = props;
  return (
    <div className="flex flex-col gap-[1px] text-white">
      <div className="flex gap-[1px]">
        {blockData.row1?.map((e) => (
          <div className="bg-black h-[50px] w-[50px] "></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row2?.map((e) => (
          <div className="bg-black h-[50px] w-[50px] "></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row3?.map((e) => (
          <div className="bg-black h-[50px] w-[50px] "></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row4?.map((e) => (
          <div className="bg-black h-[50px] w-[50px] "></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row5?.map((e) => (
          <div className="bg-black h-[50px] w-[50px] "></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row6?.map((e) => (
          <div className="bg-black h-[50px] w-[50px] "></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row7?.map((e) => (
          <div className="bg-black h-[50px] w-[50px] "></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row8?.map((e) => (
          <div className="bg-black h-[50px] w-[50px] "></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row9?.map((e) => (
          <div className="bg-black h-[50px] w-[50px] "></div>
        ))}
      </div>
      <div className="flex gap-[1px]">
        {blockData.row10?.map((e) => (
          <div
            className={`${
              e.value ? "bg-black" : "bg-white"
            } h-[50px] w-[50px] `}
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
