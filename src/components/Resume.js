import { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "./Waleed-Samouh-Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <div className="p-4 bg-dark slide-in-top">
        <div className="row">
          <div className="col-6">
            <h2 className="ff-jose fw-bold ls-2">Resume</h2>
          </div>
        </div>
        <hr></hr>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
          className="mb-3"
        >
          &nbsp;Download Resume
        </Button>
        <Row className="resume d-flex justify-content-center">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </div>
    </Container>
  );
}

export default Resume;

