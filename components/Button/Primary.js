import Link from "next/link";

const PrimaryButton = (props) => {
    return (
        <Link href={props.link}>
        <a>
        <button className="ml-4 text-white py-2 px-8 border-main border-2 bg-main rounded-full">
          {props.text}
        </button>
        </a>
        </Link>
    );
};
export default PrimaryButton;