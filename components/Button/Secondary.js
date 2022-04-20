import Link from "next/link";

const SecondaryButton = (props) => {
    return (
        <Link href={props.link}>
        <a>
        <button className="ml-4 text-main py-2 px-8 border-main border-2 rounded-full">
          {props.text}
        </button>
        </a>
        </Link>
    );
};
export default SecondaryButton;