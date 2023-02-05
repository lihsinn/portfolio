// import React, { useEffect, useState } from "react";

// const ProjectResume = ({ dates, type, position, bullets }) => {
//   const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));

//   return (
//     <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
//       <div className="text-lg w-2/5">
//         <h2>{dates}</h2>
//         <h3 className="text-sm opacity-50">{type}</h3>
//       </div>
//       <div className="w-3/5">
//         <h2 className="text-lg font-bold">{position}</h2>
//         {bulletsLocal && bulletsLocal.length > 0 && (
//           <ul className="list-disc">
//             {bulletsLocal.map((bullet, index) => (
//               <li key={index} className="text-sm my-1 opacity-70">
//                 {bullet}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
// import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
// import pdf from "../../data";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink ="https://github.com/lihsinn/portfolio/raw/main/data/resume.pdf";
  // "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";



const ProjectResume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (

    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      {/* <div className="text-lg w-2/5">
        <h2>OK</h2>
        <h3 className="text-sm opacity-50">DDD</h3>
      </div> */}
      <div className="w-3/5">
        {/* <h2 className="text-lg font-bold">DD</h2> */}
        <Container fluid className="resume-section">
          <Particle />
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={'../../data/resume.pdf'}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>

          <Row className="resume">
            <Document file={resumeLink} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.25 : 0.55} />
            </Document>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={'../../data/resume.pdf'}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
};


export default ProjectResume;
