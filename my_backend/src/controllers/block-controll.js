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
        y: 2,
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
    row2: [
      {
        id: 1,
        value: true,
      },
      {
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
    row3: [
      {
        id: 1,
        value: true,
      },
      {
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
    row4: [
      {
        id: 1,
        value: true,
      },
      {
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
    row5: [
      {
        id: 1,
        value: true,
      },
      {
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
    row6: [
      {
        id: 1,
        value: true,
      },
      {
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
    row7: [
      {
        id: 1,
        value: true,
      },
      {
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
    row8: [
      {
        id: 1,
        value: true,
      },
      {
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
    row9: [
      {
        id: 1,
        value: true,
      },
      {
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
    row10: [
      {
        id: 1,
        value: true,
      },
      {
        id: 2,
        value: true,
      },
      {
        id: 3,
        value: true,
      },
      {
        id: 4,
        value: true,
      },
      {
        id: 5,
        value: true,
      },
      {
        id: 6,
        value: true,
      },
      {
        id: 7,
        value: true,
      },
      {
        id: 8,
        value: true,
      },
      {
        id: 9,
        value: true,
      },
      {
        id: 10,
        value: true,
      },
    ],
  });
};
