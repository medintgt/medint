// @elmerchanquin
// I received assistance from an AI language model (such as Assistant) in understanding
// and implementing this code. ChatGPT by OpenAI

import LayoutAdmin from "@components/LayoutAdmin";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { useState } from "react";
import axios from "axios";
import download from "downloadjs";

const NewPrescription = () => {
  // Initialize the state variables for the input fields
  const [dpi, setDpi] = useState("3029987800108");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [medicalDescription, setMedicalDescription] = useState("");
  const [nextDate, setNextDate] = useState("");

  async function savePrescription() {
    console.log("Guardando...")
  }
  async function previewPdf() {
    // Load the template
    let prescriptionTemplate =
      "https://storage.googleapis.com/medint/public/prescription-template.pdf";
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
    const helveticaFont = await template.embedFont(StandardFonts.HelveticaBold);
    // Edit the text on the first page
    const pages = template.getPages();
    const firstPage = pages[0];
    let height = firstPage.getSize().height;
    firstPage.drawText(dpi, {
      x: 72,
      y: height / 2 + 270,
      size: 12,
      font: helveticaFont,
      color: rgb(0.52, 0.52, 0.52),
    });
    firstPage.drawText(name, {
      x: 72,
      y: height / 2 + 255,
      size: 12,
      font: helveticaFont,
      color: rgb(0.52, 0.52, 0.52),
    });
    firstPage.drawText(date, {
      x: 405,
      y: height / 2 + 286,
      size: 12,
      font: helveticaFont,
      color: rgb(0.52, 0.52, 0.52),
    });
    const medicalDescriptionLines = medicalDescription.split(/(.{1,78}(?:\s|$))/g);
    console.log(medicalDescriptionLines)
    const medicalDescriptionY = parseFloat(height / 2 + 170);
    const lineHeight = 12;
    for (let i = 0; i < medicalDescriptionLines.length; i++) {
      firstPage.drawText(medicalDescriptionLines[i], {
        x: 72,
        y: medicalDescriptionY - i * lineHeight,
        size: 12,
        font: helveticaFont,
        color: rgb(0.52, 0.52, 0.52),
      });
    }
    

    firstPage.drawText("Próxima cita: " + nextDate, {
      x: 207,
      y: 80,
      size: 12,
      font: helveticaFont,
      color: rgb(0.52, 0.52, 0.52),
    });

    // Save the PDF and open it in a new tab
    const pdfBytes = await template.save();
    // Trigger the browser to download the PDF document
    window.open(
      URL.createObjectURL(new Blob([pdfBytes], { type: "application/pdf" }))
    );
  }

    // Render the input fields and the button to preview the PDF
    return (
      <LayoutAdmin>
        <div className="grid justify-center">
          <p className="mx-auto w-72">
            Ingrese la información y luego genere la receta con el botón de
            Visualizar.
          </p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            className="mx-auto my-2 w-72 py-1 px-2 border rounded-md border-gray-400"
          />
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Fecha"
            className="mx-auto my-2 w-72 py-1 px-2 border rounded-md border-gray-400"
          />
          <textarea
            onChange={(e) => setMedicalDescription(e.target.value)}
            placeholder="Descripción médica"
            rows="10"
            cols="50"
            className="mx-auto my-2 w-72 py-1 px-2 border rounded-md border-gray-400"
            value={medicalDescription}
          >
          </textarea>
          <input
            type="text"
            value={nextDate}
            onChange={(e) => setNextDate(e.target.value)}
            placeholder="Fecha de próxima cita"
            className="mx-auto my-2 w-72 py-1 px-2 border rounded-md border-gray-400"
          />
          <button
            onClick={savePrescription}
            className="mx-auto mt-2 w-72 py-2 px-4 bg-sky-800 text-white rounded-md"
          >
            Guardar
          </button>
          <button
            onClick={previewPdf}
            className="mx-auto mt-2 w-72 py-2 px-4 border-sky-800 text-sky-800 rounded-md border-2"
          >
            Previsualizar
          </button>
        </div>
      </LayoutAdmin>
    );
  
};

export default NewPrescription;
