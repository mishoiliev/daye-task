import React, { useEffect, useState } from "react";

export const Header = (props) => {
  return (
    <header className="flex bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400 h-28 relative items-center">
      <div className="flex text-center align-middle ml-auto mr-auto font-mono text-5xl font-bold underline text-gray-800">
        Daye Task
      </div>
    </header>
  );
};
