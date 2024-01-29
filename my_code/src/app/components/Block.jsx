export const Block = (props) => {
  const { blockData, handleDrop } = props;
  return (
    <div className="flex flex-col  text-white">
      <div className="flex gap-[1px] w-[410px] h-[410px] flex-wrap ">
        {blockData.coordinate?.map((block) => (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              handleDrop(block.x, block.y);
            }}
            className={`${
              block.value ? "bg-black" : "bg-white"
            } h-[40px] w-[40px]`}
          ></div>
        ))}
      </div>
    </div>
  );
};

// 0 0 0
// * 0 *
// * 0 *
