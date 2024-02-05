import { BlockModel } from "../models/block.js";
export const Blocks = async (req, res) => {
  const { id } = req.params;
  const block = await BlockModel.findById(id);
  res.status(200).json(block);
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
  try {
    const {
      id,
      dragOver_x,
      dragOver_y,
      dragStart_x,
      dragStart_y,
      blocksCoordinate,
      count,
    } = req.body;
    // console.log("id", id);
    // console.log(dragOver_x, dragOver_y);
    // console.log(dragStart_x, dragStart_y);
    // console.log(blocksCoordinate);
    const changeX = dragOver_x - dragStart_x;
    const changeY = dragOver_y - dragStart_y;
    if (dragOver_x >= dragStart_x && dragOver_y >= dragStart_y) {
      const Block = await BlockModel.findById(id);
      let allCoordinate = Block.coordinate;
      let status = false;
      let status9 = false;
      let status0 = false;
      let indexArray = [];
      blocksCoordinate.map(async (block) => {
        const xFill = block.x + changeX;
        const yFill = block.y + changeY;
        const elIndex = yFill * 10 + xFill;
        console.log("index", elIndex);
        indexArray.push(elIndex);
        console.log("hi", allCoordinate[elIndex]);
        if (allCoordinate[elIndex]?.value != true) {
          status = true;
        }
      });
      console.log("bro min ", indexArray);
      indexArray.filter((e) => {
        if (e == 9) {
          status9 = true;
        } else if (e == 10) {
          status0 = true;
        } else if (e == 19) {
          status9 = true;
        } else if (e == 20) {
          status0 = true;
        } else if (e == 19) {
          status9 = true;
        } else if (e == 20) {
          status0 = true;
        } else if (e == 29) {
          status9 = true;
        } else if (e == 30) {
          status0 = true;
        } else if (e == 39) {
          status9 = true;
        } else if (e == 40) {
          status0 = true;
        } else if (e == 49) {
          status9 = true;
        } else if (e == 50) {
          status0 = true;
        } else if (e == 59) {
          status9 = true;
        } else if (e == 60) {
          status0 = true;
        } else if (e == 69) {
          status9 = true;
        } else if (e == 70) {
          status0 = true;
        } else if (e == 79) {
          status9 = true;
        } else if (e == 80) {
          status0 = true;
        } else if (e == 89) {
          status9 = true;
        } else if (e == 90) {
          status0 = true;
        } else if (e == 99) {
          status9 = true;
        } else if (e == 100) {
          status0 = true;
        }
      });
      if (status9 == true && status0 == true) {
        status = true;
      }
      if (status == false) {
        blocksCoordinate.map(async (block) => {
          const xFill = block.x + changeX;
          const yFill = block.y + changeY;
          const elIndex = yFill * 10 + xFill;
          allCoordinate[elIndex].value = false;
          const row = allCoordinate.filter((e) => e.x == yFill);
          const column = allCoordinate.filter((e) => e.y == xFill);
          const blockY = row.filter((e) => e.value === true);
          const blockX = column.filter((e) => e.value === true);
          // console.log("axisX", blockX);
          // console.log("axisY", blockY);
          if (blockX.length == 0 && blockY.length == 0) {
            allCoordinate = allCoordinate.map((e) => {
              if (e.y == xFill) {
                return { ...e, value: true };
              }
              return e;
            });
            allCoordinate = allCoordinate.map((e) => {
              if (e.x == yFill) {
                return { ...e, value: true };
              }
              return e;
            });
          } else if (blockY.length == 0) {
            allCoordinate = allCoordinate.map((e) => {
              if (e.x == yFill) {
                return { ...e, value: true };
              }
              return e;
            });
          } else if (blockX.length == 0) {
            allCoordinate = allCoordinate.map((e) => {
              if (e.y == xFill) {
                return { ...e, value: true };
              }
              return e;
            });
          }
        });
      } else {
        return res.status(405).json({ message: "Failed" });
      }
      const Block2 = await BlockModel.findById(id);
      const Point = Block2.currentPoint;
      console.log("point", Point);
      await BlockModel.findByIdAndUpdate(id, {
        coordinate: allCoordinate,
        currentPoint: Point + count,
      });
    }

    res.json({ message: "succesfully done" });
  } catch (err) {
    res.json({ message: "wrong move" });
  }
};
export const restart = async (req, res) => {
  const { id } = req.body;
  // const body = req.body;
  console.log("hi", id);
  await BlockModel.findByIdAndUpdate(id, {
    currentPoint: 0,
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
  res.status(200).json("success");
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
