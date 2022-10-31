import React from "react";

function Button({ name, link, id }) {
  return (
    <>
      <a id={id} href={link} className="bg-gray-200 hover:bg-gray-300 py-6 w-11/12 rounded-md">
        {name}
      </a>
    </>
  );
}

export default Button;