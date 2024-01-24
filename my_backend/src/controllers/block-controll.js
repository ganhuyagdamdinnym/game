import { BlockModel } from "../models/block.js";
export const Blocks = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const block = await BlockModel.findById(id);
  res.status(200).json(block);
};
export const handlelogin = async (req, res) => {
  const { username, password } = req.body;
  //console.log(username);
  console.log("body", req.body);
  const user = await BlockModel.findOne({ username: username });
  if (user.password == password) {
    res.status(200).json(user._id);
  }
};

export const putBlock = async (req, res) => {
  const { x, y, id } = req.body;
  const userBlock = await BlockModel.findById(id);
  if (y == 0) {
    console.log("here", x + 1, "---", id);
    const result = await BlockModel.updateOne(
      { _id: id, "row1.id": x + 1 },
      {
        $set: {
          "row1.$.value": false,
        },
      }
    );
    // await BlockModel.findByIdAndUpdate(id, {
    //   row1?[x].value:false
    // });
  }
  // console.log("hi", x);
  res.json({ message: "done" });
};
export const createAcc = async (req, res) => {
  const { username, password } = req.body;
  console.log("hi");
  await BlockModel.create({
    username: username,
    password: password,
    row1: [
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
        id: 6,
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
    ],
    row2: [
      {
        x: 1,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 1,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 1,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 1,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 1,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 1,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 1,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 1,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 1,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 1,
        y: 9,
        id: 10,
        value: true,
      },
    ],
    row3: [
      {
        x: 2,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 2,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 2,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 2,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 2,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 2,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 2,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 2,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 2,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 2,
        y: 9,
        id: 10,
        value: true,
      },
    ],
    row4: [
      {
        x: 3,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 3,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 3,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 3,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 3,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 3,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 3,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 3,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 3,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 3,
        y: 9,
        id: 10,
        value: true,
      },
    ],
    row5: [
      {
        x: 4,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 4,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 4,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 4,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 4,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 4,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 4,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 4,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 4,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 4,
        y: 9,
        id: 10,
        value: true,
      },
    ],
    row6: [
      {
        x: 5,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 5,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 5,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 5,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 5,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 5,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 5,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 5,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 5,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 5,
        y: 9,
        id: 10,
        value: true,
      },
    ],
    row7: [
      {
        x: 6,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 6,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 6,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 6,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 6,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 6,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 6,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 6,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 6,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 6,
        y: 9,
        id: 10,
        value: true,
      },
    ],
    row8: [
      {
        x: 7,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 7,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 7,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 7,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 7,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 7,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 7,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 7,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 7,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 7,
        y: 9,
        id: 10,
        value: true,
      },
    ],
    row9: [
      {
        x: 8,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 8,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 8,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 8,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 8,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 8,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 8,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 8,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 8,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 8,
        y: 9,
        id: 10,
        value: true,
      },
    ],
    row10: [
      {
        x: 9,
        y: 0,
        id: 1,
        value: true,
      },
      {
        x: 9,
        y: 1,
        id: 2,
        value: true,
      },
      {
        x: 9,
        y: 2,
        id: 3,
        value: true,
      },
      {
        x: 9,
        y: 3,
        id: 4,
        value: true,
      },
      {
        x: 9,
        y: 4,
        id: 5,
        value: true,
      },
      {
        x: 9,
        y: 5,
        id: 6,
        value: true,
      },
      {
        x: 9,
        y: 6,
        id: 7,
        value: true,
      },
      {
        x: 9,
        y: 7,
        id: 8,
        value: true,
      },
      {
        x: 9,
        y: 8,
        id: 9,
        value: true,
      },
      {
        x: 9,
        y: 9,
        id: 10,
        value: true,
      },
    ],
  });
};
