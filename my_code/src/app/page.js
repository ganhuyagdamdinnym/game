"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [status, setStatus] = useState(false);
  const [namevalue, setNamevalue] = useState("");
  const [passwordvalue, setPasswordvalue] = useState("");
  const router = useRouter();
  const handleStatus = () => {
    setStatus(true);
    setNamevalue("");
    setPasswordvalue("");
  };
  const handleCreateNewAccound = async () => {
    setStatus(false);
    setNamevalue("");
    setPasswordvalue("");
    try {
      const url = `http://localhost:8002/createAcc`;
      await axios.post(url, {
        username: namevalue,
        password: passwordvalue,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handlelogin = async () => {
    try {
      const url = `http://localhost:8002/handlelogin`;
      await axios
        .post(url, {
          username: namevalue,
          password: passwordvalue,
        })
        .then((res) => router.push(`/play?id=${res.data}`));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{ backgroundImage: `url("/wood.png")` }}
      className="w-screen h-screen bg-cover flex flex-col gap-4 justify-center items-center"
    >
      {/* <div className="w-full h-full bg-[red]"></div> */}
      {status ? (
        <div
          style={{ background: `url("/woood.jpeg")` }}
          className="w-96 h-2/6 rounded-2xl flex flex-col gap-4 justify-center items-center"
        >
          <input
            onChange={(e) => setNamevalue(e.target.value)}
            value={namevalue}
            placeholder="Username"
            className="px-1  border-4 border-black rounded-xl"
          />
          <input
            onChange={(e) => setPasswordvalue(e.target.value)}
            value={passwordvalue}
            placeholder="Password"
            className="px-1 border-4 border-black rounded-xl"
          />
          <button
            onClick={() => handleCreateNewAccound()}
            style={{ backgroundImage: `url("/wood.png")` }}
            className="py-1 border-4 border-black px-2 rounded-xl"
          >
            Create
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4">
          <input
            onChange={(e) => setNamevalue(e.target.value)}
            value={namevalue}
            placeholder="Name"
            style={{ background: `url("/woood.jpeg")` }}
            className="px-1  border-4 border-black rounded-xl"
          />
          <input
            onChange={(e) => setPasswordvalue(e.target.value)}
            value={passwordvalue}
            placeholder="Password"
            style={{ background: `url("/woood.jpeg")` }}
            className="px-1  border-4 border-black rounded-xl"
          />
          <div>
            <button
              onClick={() => handlelogin()}
              style={{ background: `url("/woood.jpeg")` }}
              className=" px-6 py-2 rounded-3xl text-2xl border-[6px] border-black"
            >
              Log in
            </button>
          </div>
          <div>
            <button
              onClick={() => handleStatus()}
              style={{ background: `url("/woood.jpeg")` }}
              className=" px-6 py-2 rounded-3xl text-2xl border-[6px] border-black"
            >
              create accound
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
