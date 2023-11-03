import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgColor, setbgColor] = useState("white");
  const [textColor, settextColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="p-6">
          <h1 className="text-3xl">Content</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            nostrum nulla est veniam debitis ratione dolore facere vel quibusdam
            eius nemo, enim voluptate rerum minima autem perferendis nesciunt.
            Molestiae, quia!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            nostrum nulla est veniam debitis ratione dolore facere vel quibusdam
            eius nemo, enim voluptate rerum minima autem perferendis nesciunt.
            Molestiae, quia!
          </p>
        </div>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-lg  px-2 py-2 rounded-3xl bg-slate-400"
            // style={{ backgroundColor: "white" }}
          >
            <button
              onClick={() => {
                setbgColor("black");
                settextColor("white");
              }}
              className="outline-none px-3 py-1 rounded-full  shadow-lg duration-200"
              style={{ backgroundColor: bgColor, color: textColor }}
            >
              Dark
            </button>
            <button
              onClick={() => {
                setbgColor("white");
                settextColor("black");
              }}
              className="outline-none px-3   py-1 rounded-full  shadow-lg duration-200"
              style={{ backgroundColor: textColor, color: bgColor }}
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
