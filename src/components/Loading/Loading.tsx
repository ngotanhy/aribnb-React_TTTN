import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="w-full h-100vh flex items-center justify-center ">
      <div className="flex items-center justify-center gap-4 animate__animated animate__bounce animate__infinite	infinite">
        <div className="w-10 h-10 rounded-full bg-black animate__animated animate__bounce"></div>
        <div className="w-10 h-10 rounded-full bg-black animate__animated animate__bounce animate__delay-1s animate__infinite	infinite  "></div>
        <div className="w-10 h-10 rounded-full bg-black animate__animated animate__bounce animate__delay-2s "></div>
        <div className="w-10 h-10 rounded-full bg-black animate__animated animate__bounce animate__delay-3s animate__infinite	infinite"></div>
      </div>
    </div>
  );
}
