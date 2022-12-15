import LayoutAdmin from "@components/LayoutAdmin";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import download from "downloadjs";
import { useState } from "react";
import axios from "axios";

const NewPrescription = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  async function previewPdf() {
    // Load the template
    const url =
      "https://storage.googleapis.com/medint/admin/content/prescription-template.pdf";
    let templateBytes;
    try {
      templateBytes = await axios
        .get(url, {
          responseType: "arraybuffer",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Method": "*"
          },
        })
        .then((res) => res.data);
    } catch (error) {
      // Handle the error here. For example, you can log the error or show an error message to the user.
      console.error(error);
    }

    const template = await PDFDocument.load(templateBytes);

    // Create a new PDF document that contains the template's pages
    const pdfDoc = await PDFDocument.create();
    const pages = template.getPages();
    pdfDoc.copyPages(template, pages);

    // Edit the text on the first page
    const page = pdfDoc.getPages()[0];
    const operators = page.getTextOperators();
    operators.forEach((op) => {
      if (op.string === "{{name}}") op.string = name;
      if (op.string === "{{address}}") op.string = address;
      if (op.string === "{{phoneNumber}}") op.string = phoneNumber;
    });

    // Save the PDF and open it in a new tab
    const pdfBytes = await pdfDoc.save();
    window.open(URL.createObjectURL(new Blob([pdfBytes])));
  }

  // Render the input fields and the button to preview the PDF
  return (
    <LayoutAdmin>
      <div className="grid justify-center">
        <p>
          Ingrese la información y luego genere la receta con el botón de
          Visualizar.
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}

          placeholder="Dirección"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Número de teléfono"
        />
        <button onClick={previewPdf}>Visualizar PDF</button>
      </div>
    </LayoutAdmin>
  );
};

export default NewPrescription;
