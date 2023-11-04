import { useState } from "react";
import { data as imageData } from "../data/data";
import Navbar from "./Navbar";
import Image from "./Image";

export default function Galary() {
  const [data, setData] = useState(imageData);
  const commonStyle = "relative border-2 rounded-lg";

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

  const dataLength = data.filter((d) => d.checked).length;

  return (
    <div>
      <Navbar length={dataLength} handleDelete={handleDelete} />

      <div className="container mx-auto grid grid-cols-5 gap-2 mt-5">
        {data.map((image) => (
          <div
            key={image.id}
            className={
              data.indexOf(image) === 0
                ? "row-span-2 col-span-2 " + commonStyle
                : "" + commonStyle
            }
          >
            <input
              type="checkbox"
              className="absolute top-5 left-5 z-50 cursor-pointer"
              name="imageSelection"
              checked={image.checked}
              onChange={() => handleInputOnChange(image)}
            />
            <Image image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
