const SecondaryButton = (props) => {
    return (
        <button type={props.type} className="cursor-pointer w-72 text-2xl h-12 rounded-full text-sky-800 text-center p-2 border-2 border-sky-800">{props.text}</button>
    )
}
export default SecondaryButton