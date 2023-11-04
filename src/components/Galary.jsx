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
      <div className="container grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-2 mt-5">
        {data.map((image) => (
          <div
            key={image.id}
            className={
              data.indexOf(image) === 0
                ? "md:row-span-2 md:col-span-2 " +
                  commonStyle
                : "" + commonStyle
            }
          >
            <input
              type="checkbox"
              className="absolute top-5 left-5 z-50 cursor-pointer w-4 h-4"
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
