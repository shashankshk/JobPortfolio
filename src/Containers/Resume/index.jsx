import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import pdfFile from '../../Assets/document/Shashank-Shekhar.pdf';
import NormalButton from '../../Components/Buttons/NormalButton';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='resume-page'>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode='canvas'
        className='resume-preview'
      >
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      <NormalButton value={'Download Resume'} type={'primary'} className={'resume-botton'} />
    </div>
  );
};

export default Resume;