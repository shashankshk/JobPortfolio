import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import pdfFile from '../../Assets/document/Shashank-Shekhar.pdf';
import NormalButton from '../../Components/Buttons/NormalButton';
import PageLoader from '../../Components/PageLoader';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
const Resume = () => {
  const [pageNumber] = useState(1);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <PageLoader />}
      <div className={'resume-page'} style={!loaded ? { display: 'none' } : {}}>
        <Document
          file={pdfFile}
          renderMode='canvas'
          className='resume-preview'
          onLoadSuccess={() => setLoaded(true)}
        >
          <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
        <NormalButton value={'Download Resume'} type={'primary'} className={'resume-botton'} />
      </div>
    </>
  );
};

export default Resume;
