import LayoutAdmin from "@components/LayoutAdmin";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { useState } from "react";
import axios from "axios";

const NewPrescription = () => {
  // Initialize the state variables for the input fields
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [medicalDescription, setMedicalDescription] = useState("");
  const [nextDate, setNextDate] = useState("");

  async function previewPdf() {
    // Load the template
    let prescriptionTemplate = "https://storage.googleapis.com/medint/public/prescription-template.pdf";
    let templateBytes;
    try {
      templateBytes = await axios
        .get(prescriptionTemplate, {
          responseType: "arraybuffer",
        })
        .then((res) => res.data);
    } catch (error) {
      // Error handling, shows error on console.
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
      if (op.string === "{{date}}") op.string = date;
      if (op.string === "{{medicalDescription}}")
        op.string = medicalDescription;
      if (op.string === "{{nextDate}}") op.string = nextDate;
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
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Fecha"
        />
        <input
          type="text"
          value={medicalDescription}
          onChange={(e) => setMedicalDescription(e.target.value)}
          placeholder="Descripción médica"
        />
        <input
          type="text"
          value={nextDate}
          onChange={(e) => setNextDate(e.target.value)}
          placeholder="Fecha siguiente"
        />
        <button onClick={previewPdf}>Visualizar PDF</button>
      </div>
    </LayoutAdmin>
  );
};

export default NewPrescription;
