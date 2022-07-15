const Select = (props) => {
const options = props.options;

    return (
    <div>
      <label className="text-lg text-gray-400">{props.label}</label>
      <div className=" pt-2 grid place-items-center">
        <select
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name=""
          id=""
        >
            {
          options.map(option => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))
        }
        </select>
      </div>
    </div>
  );
};

export default Select;
