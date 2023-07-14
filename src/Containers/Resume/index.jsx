import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import NormalButton from '../../Components/Buttons/NormalButton';
import PageLoader from '../../Components/PageLoader';
import { useQuery } from '@apollo/client';
import { GET_RESUME } from '../../API/query';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
const Resume = () => {
  const [pageNumber] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const { loading, error, data } = useQuery(GET_RESUME, {
    variables: {
      id: process.env.RESUME_ID,
    },
  });

  const downloadPdf = async () => {
    const response = await fetch(data.asset.url);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Shashank-Shekhar.pdf';
    a.click();
  };

  return (
    <>
      {!loading && !error ? (
        <div className={'resume-page'} style={!loaded ? { display: 'none' } : {}}>
          {!loaded && <PageLoader />}
          <Document
            file={data.asset.url}
            renderMode='canvas'
            className='resume-preview'
            onLoadSuccess={() => setLoaded(true)}
          >
            <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
          <NormalButton
            value={'Download Resume'}
            type={'primary'}
            className={'resume-botton'}
            onClick={downloadPdf}
          />
        </div>
      ) : (
        <PageLoader />
      )}
    </>
  );
};

export default Resume;
