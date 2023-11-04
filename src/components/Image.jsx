import React from "react";

export default function Image({ image }) {
  const styles =
    "rounded-lg cursor-pointer hover:brightness-50 hover:bg-gray-200 z-10 hover:duration-150";
  return <img src={image.link} alt={image.name} className={image.checked ? styles + "brightness-50" : styles} />;
}
