const ImageGroup = () => {
  return (
    <div>
      <label className="text-lg text-gray-400">Images</label>
      <div className=" pt-2 flex justify-center gap-1">
        <div className="w-14 h-14 bg-gray-400 cursor-pointer text-4xl text-white grid place-items-center">
          <i className="fi-rr-plus-small"></i>
        </div>
        <div className="w-14 h-14 bg-gray-400 cursor-pointer text-4xl text-white grid place-items-center">
          <i className="fi-rr-plus-small"></i>
        </div>
        <div className="w-14 h-14 bg-gray-400 cursor-pointer text-4xl text-white grid place-items-center">
          <i className="fi-rr-plus-small"></i>
        </div>
        <input
          id="file_1"
          className="hidden"
          type="file"
          accept=".jpg,.png,.jpeg,.heic"
        ></input>
        <input
          id="file_2"
          className="hidden"
          type="file"
          accept=".jpg,.png,.jpeg,.heic"
        ></input>
        <input
          id="file_3"
          className="hidden"
          type="file"
          accept=".jpg,.png,.jpeg,.heic"
        ></input>
      </div>
    </div>
  );
};
export default ImageGroup;