import "./App.css";
import Navbar from "../../Navbar/Navbar";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-32 md:mt-40 flex-col">
        <div className="text-center text-3xl md:text-5xl  w-4/5 md:w-3/5 font-extrabold font-mono leading-tight tracking-tighter">
          Passionate software developer with a flair for creating efficient and
          user centric solutions.
        </div>
        <div className="text-center text-xl	md:text-base w-4/5 md:w-3/5 font-bold font-mono tracking-tighter my-5 text-neutral-500">
          Seasoned in [specific programming languages or technologies], adept at
          crafting innovative solutions that drive efficiency and exceed
          expectations.
        </div>
      </div>
    </>
  );
}

export default App;
