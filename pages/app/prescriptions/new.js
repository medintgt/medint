import LayoutAdmin from "@components/LayoutAdmin";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import download from "downloadjs";

const NewPrescription = () => {
  async function createPdf() {
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 30;
    page.drawText("MEDINT - Prescripción médica", {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    });

    const pdfBytes = await pdfDoc.save();

    download(pdfBytes, Math.random().toString().slice(2), "application/pdf");
    return;
  }
  return (
    <LayoutAdmin>
      <div>
        <p>
          Haga click en el botón para crear una nueva{" "}
          <code>Prescripción</code>
        </p>
        <button onClick={createPdf}>Crear PDF</button>
        <p className="small">(El navegador descargara un archivo PDF.)</p>
      </div>
    </LayoutAdmin>
  );
};

export default NewPrescription;
