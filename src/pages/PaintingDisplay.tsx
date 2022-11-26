

import React, { MutableRefObject, useRef } from "react";
import Header from "../components/Header";
import Paintings from "../components/Paintings";

const PaintingDisplay = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <Header />
      <Paintings />
    </div>
  );
};

export default PaintingDisplay;