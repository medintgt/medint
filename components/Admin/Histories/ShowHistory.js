import Entry from "@components/Admin/Show/Elements/Entry";
import ShowImageGroup from "@components/Admin/Show/Elements/ImageGroup"
import SecondaryButton from "@components/Admin/Buttons/SecondaryButton"

const ShowTherapy = () => {
  return (
    <div
      className="my-4 max-w-md  md:w-96 h-auto p-3"
      method="POST"
      action="/products/edit/123123"
    >
      <Entry name="Patient" value="Elmer Chanquin (11208915)" />
      <Entry name="Reason" value="10 days back pain" />
      <Entry name="Subjective Data" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in dui eget felis dapibus laoreet. Nam non vulputate turpis. Pellentesque eleifend commodo pharetra." />
      <Entry name="Objective Data" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in dui eget felis dapibus laoreet. Nam non vulputate turpis. Pellentesque eleifend commodo pharetra." />
      <Entry name="Diagnosis" value="Lorem, Impsum, Dolor" />
      <Entry name="Treatment" value="Meds, Therapy, Neural" />
      <Entry name="Comments" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in dui eget felis dapibus laoreet. Nam non vulputate turpis. Pellentesque eleifend commodo pharetra." />
      <ShowImageGroup
        image1="/avatar5.png"
        image2="/avatar4.png"
        image3="/avatar4.png"
      />
      <div className="pt-4 grid place-items-center">
        <SecondaryButton type="submit" text="Edit" />
      </div>
    </div>
  );
};

export default ShowTherapy;
