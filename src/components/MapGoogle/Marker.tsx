import React from "react";

type Props = {
  text: number;
  tooltip: string;
  $hover: any;
  lat?: number;
  lng?: number
};
const Marker = ({ text, tooltip, $hover,lat,lng }: Props) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  return (
    <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default Marker;
