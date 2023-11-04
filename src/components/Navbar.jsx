import React from "react";

export default function Navbar({ length, handleDelete }) {
  return (
    <nav className="border-b-2">
      <div className="flex justify-between items-center mb-5">
        {length > 0 ? (
          <div className="flex items-center text-xl font-bold">
            <input
              type="checkbox"
              checked={true}
              readOnly
              id=""
              className="mr-1"
            />
            {length} {length > 1 ? "Files" : "File"} Selected
          </div>
        ) : (
          <p className="text-xl font-bold">Galary</p>
        )}

        {length > 0 ? (
          <p
            className="text-red-500 cursor-pointer hover:underline"
            onClick={handleDelete}
          >
            Delete {length > 1 ? "files" : "file"}
          </p>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
