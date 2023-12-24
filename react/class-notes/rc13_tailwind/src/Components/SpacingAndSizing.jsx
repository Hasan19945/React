import React from "react";

const SpacingAndSizing = () => {
  return (
    <>
      <div>
        <h3 className="text-2xl">Spacing and Sizing</h3>
        <button className="bg-blue-500 text-white p-4 m-1">Tıkla</button>
        <button className="bg-blue-500 text-white px-4">Tıkla</button>
        <button className="bg-blue-500 text-white ml-4">Tıkla</button>
        <button className="bg-blue-500 text-white my-4 px-4 p-2">Tıkla</button>
      </div>
      <div className="my-2">
        <button className="bg-green-500 text-white mx-4 px-4 py-2 border rounded-md border-red-500 ">
          Tıkla
        </button>
        <button className="bg-green-500 text-white mx-4 px-4 py-2 rounded-[10px] border-[3px] border-orange-500">
          Tıkla
        </button>
        <button className="bg-green-500 text-white mx-4 px-4 py-4 rounded-full">
          Tıkla
        </button>
      </div>
      <div>
        <button className="w-20 bg-indigo-300 rounded-full py-2 mx-1">
          Tıkla
        </button>
        <button className="w-1/2 bg-indigo-300 rounded-full py-2 mx-1">
          Tıkla
        </button>
        <button className="w-[300px] bg-indigo-300 rounded-full py-2 mx-1">
          Tıkla
        </button>
        <button className="max-w-lg min-w-[100px] w-2/3 bg-indigo-300 rounded-full py-2 mx-1">
          Tıkla
        </button>
      </div>
    </>
  );
};

export default SpacingAndSizing;
