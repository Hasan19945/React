import React from "react";

const HoverFocus = () => {
  return (
    <>
      <div>
        <button className="w-40 bg-sky-400 hover:bg-sky-500 text-slate-50 rounded-full py-2 mx-1 shadow-slate-400 hover:shadow-lg">
          Save
        </button>
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 py-2 mx-1 rounded-lg px-5 focus:ring-4 focus:ring-yellow-300">
          Yellow
        </button>
      </div>
      <div className="mt-2">
        <input
          type="email"
          className="border border-gray-300 text-slate-900 w-1/3 rounded-lg block p-2 focus:outline-red-400 peer"
        />
        {/* peer class'ı bir önceki sibling elementi temsil eder */}
        <p className="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
          Please provide a valid email
        </p>
      </div>
    </>
  );
};

export default HoverFocus;
