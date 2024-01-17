export const Block = (props) => {
  const { id } = props;
  return <div className="w-[50px] h-[50px] bg-black"></div>;
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
