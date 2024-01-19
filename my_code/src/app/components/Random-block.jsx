export const RandomBlock = (props) => {
  const { handleDragStart } = props;
  return (
    <div
      className="w-[520px] h-60 bg-white"
      draggable
      onDragStart={(e) => handleDragStart()}
    ></div>
  );
};
