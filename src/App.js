import { Header } from "./components/header";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { DataPage } from "./components/dataPage";

function App() {
  const [data, setData] = useState("loading");

  useEffect(() => {
    //can be done with axios as well
    fetch("https://front-end-test-bvhzjr6b6a-uc.a.run.app/")
      .then((res) => res.json())
      .then((jsonRes) => setData(jsonRes))
      .catch((error) => alert(error));
  }, []);

  return data !== "loading" ? (
    <div className="App flex-row bg-gray-100 min-h-full w-full absolute">
      <Header />
      <DataPage data={data} />
    </div>
  ) : (
    <Loader
      type="Oval"
      height={100}
      width={100}
      className="absolute inset-y-1/2 inset-x-1/2"
    />
  );
}

export default App;
