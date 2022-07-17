import Link from "next/link";

const ShowAllLink = (props) => {
    return (
        <div>
            <Link href={props.link}>
                <a className="text-sky-800 cursor-pointer py-4">{props.text}</a>
            </Link>
        </div>
    );
};
export default ShowAllLink;