import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="139" cy="126" r="123" />
      <rect x="0" y="262" rx="4" ry="4" width="280" height="30" />
      <rect x="0" y="305" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="405" rx="4" ry="4" width="102" height="32" />
      <rect x="134" y="400" rx="23" ry="23" width="146" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;
