import React, {useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../../documents/Resume.pdf'
import {Section, ResumeWrap} from './ResumeElements'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Section >
        <ResumeWrap>
            <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            </ResumeWrap>
        </Section>
        
    )
}   

export default Resume
