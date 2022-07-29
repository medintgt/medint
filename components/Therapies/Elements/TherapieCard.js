import Image from "next/image"
import therapiePic from "../../../public/building.jpg";

export const TherapieCard = (props) => {
    return (
        <section className="bg-white shadow-xl p-4 rounded-md">
            <div>
                <h2 className="text-xl">{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </section>
    )
}