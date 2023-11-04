import React from "react";

export default function Image({ image }) {
  return (
    <img
      src={image.link}
      alt={image.name}
      className="rounded-lg cursor-pointer hover:brightness-50 hover:bg-gray-200 z-10 hover:duration-150"
    />
  );
}
