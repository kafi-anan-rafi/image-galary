import React from "react";
import Image from "./Image";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function ImageList({ data, handleInputOnChange }) {

  return (
    <SortableContext items={data} strategy={verticalListSortingStrategy}>
      <div className="container grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-2 mt-5">
        {data.map((image, index) => (
          <Image
            key={image.id}
            image={image}
            handleInputOnChange={handleInputOnChange}
            index={index}
          />
        ))}
      </div>
    </SortableContext>
  );
}
