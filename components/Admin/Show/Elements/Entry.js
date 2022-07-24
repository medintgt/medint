const Entry = (props) => {
  return (
    <div>
        <h3 className="text-lg text-gray-400">{props.name}</h3>
        <div className="pt-2 grid place-items-center">
        <p className="text-lg mx-auto w-72 py-1 px-2 font-bold">{props.value}</p>
        </div>
    </div>
  );
};

export default Entry