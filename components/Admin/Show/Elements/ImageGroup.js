import React from "react";
import Image from "next/image";

const ShowImageGroup = (props) => {
  
  return (
    <div>
      <label className="text-lg text-gray-400">Images</label>
      <div className=" pt-2 flex justify-center gap-1">
        <div className="w-14 h-14 bg-gray-400 cursor-pointer text-4xl text-white grid place-items-center">
          <Image 
          src={props.image1}
          alt="Image 1"
          width={100}
          height={100}
          />
        </div>
        <div className="w-14 h-14 bg-gray-400 cursor-pointer text-4xl text-white grid place-items-center">
        <Image 
          src={props.image2}
          alt="Image 2"
          width={100}
          height={100}
          />
        </div>
        <div className="w-14 h-14 bg-gray-400 cursor-pointer text-4xl text-white grid place-items-center">
        <Image 
          src={props.image3}
          alt="Image 3"
          width={100}
          height={100}
          />
        </div>
      </div>
    </div>
  );
};
ShowImageGroup.defaultProps = {
  image1: "/img/boxedbg.png",
  image2: "/img/boxedbg.png",
  image3: "/img/boxedbg.png"
}
export default ShowImageGroup;