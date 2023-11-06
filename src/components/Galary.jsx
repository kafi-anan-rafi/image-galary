import Navbar from "./Navbar";
import ImageList from "./ImageList";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { data as imageData } from "../data/data";

export default function Galary() {
  const [data, setData] = useState(imageData);

  const handleInputOnChange = (image) => {
    const newImage = { ...image, checked: !image.checked };
    const newData = [...data];
    const index = data.indexOf(image);
    newData[index] = newImage;
    setData(newData);
  };

  const handleDelete = () => {
    const newData = data.filter((d) => !d.checked);
    setData(newData);
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    setData((data) => {
      const oldIndex = data.findIndex((d) => d.id === active.id);
      const newIndex = data.findIndex((d) => d.id === over.id);
      return arrayMove(data, oldIndex, newIndex);
    });
  };

  const dataLength = data.filter((d) => d.checked).length;

  return (
    <div className="mx-10 mb-10 mt-5">
      <Navbar length={dataLength} handleDelete={handleDelete} />
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <ImageList data={data} handleInputOnChange={handleInputOnChange} />
      </DndContext>
    </div>
  );
}
