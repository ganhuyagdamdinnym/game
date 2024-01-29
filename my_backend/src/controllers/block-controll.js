import { BlockModel } from "../models/block.js";
export const Blocks = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const block = await BlockModel.findById(id);
  res.status(200).json(block);
};
export const HandleBlockFill = async (req, res) => {
  console.log("handleBlockFill is working");
};
export const handlelogin = async (req, res) => {
  const { username, password } = req.body;
  // console.log("body", req.body);
  const user = await BlockModel.findOne({ username: username });
  if (user.password == password) {
    res.status(200).json(user._id);
  }
};
export const putBlock = async (req, res) => {
  const {
    id,
    dragOver_x,
    dragOver_y,
    dragStart_x,
    dragStart_y,
    blocksCoordinate,
  } = req.body;
  console.log("id", id);

  console.log(dragOver_x, dragOver_y);
  console.log(dragStart_x, dragStart_y);
  console.log(blocksCoordinate);

  const changeX = dragOver_x - dragStart_x;
  const changeY = dragOver_y - dragStart_y;

  if (dragOver_x >= dragStart_x && dragOver_y >= dragStart_y) {
    const Block = await BlockModel.findById(id);
    let allCoordinate = Block.coordinate;
    // blocksCoordinate.filter((e) => {
    //   const xChange = e.x - dragStart_x;
    //   const yChange = e.y - dragStart_x;
    //   const xFill = xChange + dragOver_x;
    //   const yFill = yChange + dragOver_y;
    // });
    // blocksCoordinate.map(async (block) => {
    let status = false;
    blocksCoordinate.map(async (block) => {
      const xFill = block.x + changeX;
      const yFill = block.y + changeY;
      const elIndex = yFill * 10 + xFill;
      if (allCoordinate[elIndex].value == false) {
        status = true;
      }
    });

    if (status == false) {
      blocksCoordinate.map(async (block) => {
        const xFill = block.x + changeX;
        const yFill = block.y + changeY;
        const elIndex = yFill * 10 + xFill;
        allCoordinate[elIndex].value = false;
        //allCoordinate.map()
        const row = allCoordinate.filter((e) => e.x == yFill);
        const column = allCoordinate.filter((e) => e.y == xFill);
        const blockY = row.filter((e) => e.value === true);
        const blockX = column.filter((e) => e.value === true);
        console.log("axisX", blockX);
        console.log("axisY", blockY);
        if (blockX.length == 0) {
          allCoordinate = allCoordinate.map((e) => {
            if (e.y == xFill) {
              return { ...e, value: true };
              //console.log("ss", e);
            }
            return e;
          });
        }
        if (blockY.length == 0) {
          allCoordinate = allCoordinate.map((e) => {
            if (e.x == yFill) {
              return { ...e, value: true };
              // console.log("sssss", e);
            }
            return e;
          });
        }
      });
    }
    //});

    await BlockModel.findByIdAndUpdate(id, {
      coordinate: allCoordinate,
    });
    //console.log(allCoordinate);
    // await Promise.all(
    //   blocksCoordinate.map(async (block) => {
    //     const xChange = block.x - dragStart_x;
    //     const yChange = block.y - dragStart_x;
    //     const xFill = xChange + dragOver_x;
    //     const yFill = yChange + dragOver_y;
    //     const elIndex = (dragOver_y + yChange) * 10 + dragOver_x + xChange + 1;
    //     console.log("x---y", xFill, yFill);
    //     await BlockModel.updateOne(
    //       {
    //         _id: id,
    //         "coordinate.id": elIndex,
    //       },
    //       {
    //         $set: {
    //           "coordinate.$.value": false,
    //         },
    //       }
    //     );
    //     const Block = await BlockModel.findById(id);
    //     const row = Block.coordinate.filter((e) => e.x == yFill);
    //     const column = Block.coordinate.filter((e) => e.y == xFill);
    //     const blockX = row.filter((e) => e.value === true);
    //     const blockY = column.filter((e) => e.value === true);
    //     console.log("removex", blockX);
    //     console.log("removey", blockY);
    //     if (blockX.length == 0) {
    //       await BlockModel.updateMany(
    //         {
    //           _id: id,
    //           "coordinate.x": yFill,
    //         },
    //         {
    //           $set: {
    //             "coordinate.$.value": true,
    //           },
    //         }
    //       );
    //     }
    //     if (blockY.length == 0) {
    //       await BlockModel.updateMany(
    //         {
    //           _id: id,
    //           "coordinate.y": xFill,
    //         },
    //         {
    //           $set: {
    //             "coordinate.$.value": true,
    //           },
    //         }
    //       );
    //     }
    //   })
    // );
  }
  res.json({ message: "done" });
};
export const createAcc = async (req, res) => {
  const { username, password } = req.body;
  console.log("hi");
  await BlockModel.create({
    username: username,
    password: password,
    currentPoint: 0,
    highPoint: 0,
    coordinate: [
      {
        x: 0,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 0,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 0,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 0,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 0,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 0,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 0,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 0,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 0,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 0,
        y: 9,
        id: 10,
        value: true,
      },

      {
        x: 1,
        y: 0,
        id: 11,
        value: true,
      },
      {
        x: 1,
        y: 1,
        id: 12,
        value: true,
      },
      {
        x: 1,
        y: 2,
        id: 13,
        value: true,
      },
      {
        x: 1,
        y: 3,
        id: 14,
        value: true,
      },
      {
        x: 1,
        y: 4,
        id: 15,
        value: true,
      },
      {
        x: 1,
        y: 5,
        id: 16,
        value: true,
      },
      {
        x: 1,
        y: 6,
        id: 17,
        value: true,
      },
      {
        x: 1,
        y: 7,
        id: 18,
        value: true,
      },
      {
        x: 1,
        y: 8,
        id: 19,
        value: true,
      },
      {
        x: 1,
        y: 9,
        id: 20,
        value: true,
      },

      {
        x: 2,
        y: 0,
        id: 21,
        value: true,
      },
      {
        x: 2,
        y: 1,
        id: 22,
        value: true,
      },
      {
        x: 2,
        y: 2,
        id: 23,
        value: true,
      },
      {
        x: 2,
        y: 3,
        id: 24,
        value: true,
      },
      {
        x: 2,
        y: 4,
        id: 25,
        value: true,
      },
      {
        x: 2,
        y: 5,
        id: 26,
        value: true,
      },
      {
        x: 2,
        y: 6,
        id: 27,
        value: true,
      },
      {
        x: 2,
        y: 7,
        id: 28,
        value: true,
      },
      {
        x: 2,
        y: 8,
        id: 29,
        value: true,
      },
      {
        x: 2,
        y: 9,
        id: 30,
        value: true,
      },

      {
        x: 3,
        y: 0,
        id: 31,
        value: true,
      },
      {
        x: 3,
        y: 1,
        id: 32,
        value: true,
      },
      {
        x: 3,
        y: 2,
        id: 33,
        value: true,
      },
      {
        x: 3,
        y: 3,
        id: 34,
        value: true,
      },
      {
        x: 3,
        y: 4,
        id: 35,
        value: true,
      },
      {
        x: 3,
        y: 5,
        id: 36,
        value: true,
      },
      {
        x: 3,
        y: 6,
        id: 37,
        value: true,
      },
      {
        x: 3,
        y: 7,
        id: 38,
        value: true,
      },
      {
        x: 3,
        y: 8,
        id: 39,
        value: true,
      },
      {
        x: 3,
        y: 9,
        id: 40,
        value: true,
      },

      {
        x: 4,
        y: 0,
        id: 41,
        value: true,
      },
      {
        x: 4,
        y: 1,
        id: 42,
        value: true,
      },
      {
        x: 4,
        y: 2,
        id: 43,
        value: true,
      },
      {
        x: 4,
        y: 3,
        id: 44,
        value: true,
      },
      {
        x: 4,
        y: 4,
        id: 45,
        value: true,
      },
      {
        x: 4,
        y: 5,
        id: 46,
        value: true,
      },
      {
        x: 4,
        y: 6,
        id: 47,
        value: true,
      },
      {
        x: 4,
        y: 7,
        id: 48,
        value: true,
      },
      {
        x: 4,
        y: 8,
        id: 49,
        value: true,
      },
      {
        x: 4,
        y: 9,
        id: 50,
        value: true,
      },

      {
        x: 5,
        y: 0,
        id: 51,
        value: true,
      },
      {
        x: 5,
        y: 1,
        id: 52,
        value: true,
      },
      {
        x: 5,
        y: 2,
        id: 53,
        value: true,
      },
      {
        x: 5,
        y: 3,
        id: 54,
        value: true,
      },
      {
        x: 5,
        y: 4,
        id: 55,
        value: true,
      },
      {
        x: 5,
        y: 5,
        id: 56,
        value: true,
      },
      {
        x: 5,
        y: 6,
        id: 57,
        value: true,
      },
      {
        x: 5,
        y: 7,
        id: 58,
        value: true,
      },
      {
        x: 5,
        y: 8,
        id: 59,
        value: true,
      },
      {
        x: 5,
        y: 9,
        id: 60,
        value: true,
      },

      {
        x: 6,
        y: 0,
        id: 61,
        value: true,
      },
      {
        x: 6,
        y: 1,
        id: 62,
        value: true,
      },
      {
        x: 6,
        y: 2,
        id: 63,
        value: true,
      },
      {
        x: 6,
        y: 3,
        id: 64,
        value: true,
      },
      {
        x: 6,
        y: 4,
        id: 65,
        value: true,
      },
      {
        x: 6,
        y: 5,
        id: 66,
        value: true,
      },
      {
        x: 6,
        y: 6,
        id: 67,
        value: true,
      },
      {
        x: 6,
        y: 7,
        id: 68,
        value: true,
      },
      {
        x: 6,
        y: 8,
        id: 69,
        value: true,
      },
      {
        x: 6,
        y: 9,
        id: 70,
        value: true,
      },

      {
        x: 7,
        y: 0,
        id: 71,
        value: true,
      },
      {
        x: 7,
        y: 1,
        id: 72,
        value: true,
      },
      {
        x: 7,
        y: 2,
        id: 73,
        value: true,
      },
      {
        x: 7,
        y: 3,
        id: 74,
        value: true,
      },
      {
        x: 7,
        y: 4,
        id: 75,
        value: true,
      },
      {
        x: 7,
        y: 5,
        id: 76,
        value: true,
      },
      {
        x: 7,
        y: 6,
        id: 77,
        value: true,
      },
      {
        x: 7,
        y: 7,
        id: 78,
        value: true,
      },
      {
        x: 7,
        y: 8,
        id: 79,
        value: true,
      },
      {
        x: 7,
        y: 9,
        id: 80,
        value: true,
      },

      {
        x: 8,
        y: 0,
        id: 81,
        value: true,
      },
      {
        x: 8,
        y: 1,
        id: 82,
        value: true,
      },
      {
        x: 8,
        y: 2,
        id: 83,
        value: true,
      },
      {
        x: 8,
        y: 3,
        id: 84,
        value: true,
      },
      {
        x: 8,
        y: 4,
        id: 85,
        value: true,
      },
      {
        x: 8,
        y: 5,
        id: 86,
        value: true,
      },
      {
        x: 8,
        y: 6,
        id: 87,
        value: true,
      },
      {
        x: 8,
        y: 7,
        id: 88,
        value: true,
      },
      {
        x: 8,
        y: 8,
        id: 89,
        value: true,
      },
      {
        x: 8,
        y: 9,
        id: 90,
        value: true,
      },

      {
        x: 9,
        y: 0,
        id: 91,
        value: true,
      },
      {
        x: 9,
        y: 1,
        id: 92,
        value: true,
      },
      {
        x: 9,
        y: 2,
        id: 93,
        value: true,
      },
      {
        x: 9,
        y: 3,
        id: 94,
        value: true,
      },
      {
        x: 9,
        y: 4,
        id: 95,
        value: true,
      },
      {
        x: 9,
        y: 5,
        id: 96,
        value: true,
      },
      {
        x: 9,
        y: 6,
        id: 97,
        value: true,
      },
      {
        x: 9,
        y: 7,
        id: 98,
        value: true,
      },
      {
        x: 9,
        y: 8,
        id: 99,
        value: true,
      },
      {
        x: 9,
        y: 9,
        id: 100,
        value: true,
      },
    ],
  });
};
