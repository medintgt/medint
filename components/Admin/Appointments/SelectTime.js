export const SelectTime = (props) => {
    return (
        <div id={props.id} className="py-1 w-full px-2 border rounded-md border-gray-400 my-2 cursor-pointer text-center text-lg" onClick={props.onclick}>
            {props.time}
        </div>
    )
}