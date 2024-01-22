import { gaveBlockModel } from "../models/gaveblock.js";
//import { useState } from "react";
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
  res.status(200).json(blockData);
  console.log(blockData);
};
export const etBlocks = async (req, res) => {
  //const id = "65aa66cdfdcfc14500da7ebe";
  await gaveBlockModel.create({
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
    ],
  });
  res.status(200).json("hi");
};
