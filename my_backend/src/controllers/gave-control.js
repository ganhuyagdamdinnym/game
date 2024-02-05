import { gaveBlockModel } from "../models/gaveblock.js";
export const getBlocks = async (req, res) => {
  const blockData = await gaveBlockModel.find();
  let currentIndex = blockData.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [blockData[currentIndex], blockData[randomIndex]] = [
      blockData[randomIndex],
      blockData[currentIndex],
    ];
  }
  const blocks = blockData.slice(0, 3);
  res.status(200).json(blocks);
  // console.log(blockData);
};
export const etBlocks = async (req, res) => {
  await gaveBlockModel.create({
    id: 7,
    properValue: true,
    block: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 1,
        y: 1,
      },
      // {
      //   x: 0,
      //   y: 1,
      // },
    ],
  });
  res.status(200).json("hi");
};
