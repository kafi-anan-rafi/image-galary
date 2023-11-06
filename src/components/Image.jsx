import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

export default function Image({ image, handleInputOnChange, index }) {
  const styles =
    "rounded-lg cursor-pointer hover:contrast-50 z-10 hover:duration-150 border-2";
  const commonStyle = "relative group rounded-lg";

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className={
        index === 0
          ? "md:row-span-2 md:col-span-2 " + commonStyle
          : "" + commonStyle
      }
    >
      <input
        type="checkbox"
        className={
          image.checked
            ? "absolute visible group:block top-5 left-5 z-50 cursor-pointer w-4 h-4"
            : "absolute hidden group-hover:block top-5 left-5 z-50 cursor-pointer w-4 h-4"
        }
        checked={image.checked}
        onChange={() => handleInputOnChange(image)}
      />
      <img
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        src={image.link}
        alt={image.name}
        className={
          image.checked
            ? styles +
              "brightness-50 opacity-50 hover:contrast-50 duration-150 border-2"
            : styles
        }
      />
    </div>
  );
}
