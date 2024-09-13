import React from "react";

type MarqueeTypeParams = {
  children: React.ReactNode;
};

const Marquee = ({ children }: MarqueeTypeParams) => {
  return <h1>{children}</h1>;
};

export default Marquee;
