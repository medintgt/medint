const PrimaryButton = (props) => {
    return (
        <button type={props.type} className="cursor-pointer w-72 text-2xl bg-sky-800 h-12 rounded-full text-white text-center p-2" onClick={props.onclick}>{props.text}</button>
    )
}
export default PrimaryButton