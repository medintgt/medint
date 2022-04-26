import Image from "next/image"
import therapiePic from "../../../public/building.jpg";

export const TherapieCard = (props) => {
    return (
        <section className="bg-white shadow-xl p-4 grid grid-cols-2 rounded-md">
            <div className="flex p-2">
                <Image 
                src={props.image}
                alt="Therapie"
                width="192"
                height="108"
                />
            </div>
            <div>
                <h2 className="text-xl">{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </section>
    )
}