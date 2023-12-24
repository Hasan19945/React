import React from "react";

const FlexAndResponsive = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div className="flex flex-row flex-wrap mb-2">
        <div className="bg-fuchsia-200 basis-1/4">01</div>
        <div className="bg-fuchsia-300 basis-1/4">02</div>
        <div className="bg-fuchsia-400 basis-1/4">03</div>
        <div className="bg-fuchsia-500 basis-1/4">04</div>
        <div className="bg-fuchsia-600 basis-2/4">05</div>
        <div className="bg-fuchsia-700 basis-2/4">04</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {arr.map((item, i) => (
          <div key={i} className="bg-teal-500">
            {item}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexAndResponsive;
