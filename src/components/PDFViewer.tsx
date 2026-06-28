import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`

interface PDFViewerProps {
  pdfUrl: string
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const previousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1))
  }

  const nextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages))
  }

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5))
  }

  return (
    <section className="bg-gray-100 w-full border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-base sm:text-lg font-bold text-[#003366] mb-4 pb-2 border-b-2 border-[#D4AF37] inline-block">
            Vista previa del documento
          </h2>

          <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-[#003366] text-white px-3 sm:px-4 py-2 sm:py-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={zoomOut}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white/20 rounded hover:bg-white/30 transition text-xs sm:text-sm"
                  aria-label="Alejar"
                >
                  −
                </button>
                <span className="text-xs sm:text-sm w-12 text-center">{Math.round(scale * 100)}%</span>
                <button
                  onClick={zoomIn}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white/20 rounded hover:bg-white/30 transition text-xs sm:text-sm"
                  aria-label="Acercar"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={previousPage}
                  disabled={pageNumber <= 1}
                  className="px-2 sm:px-3 py-1 bg-white/20 rounded hover:bg-white/30 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                >
                  ‹ Ant
                </button>
                <span className="text-xs sm:text-sm min-w-[60px] text-center">
                  {pageNumber} / {numPages || '-'}
                </span>
                <button
                  onClick={nextPage}
                  disabled={pageNumber >= numPages}
                  className="px-2 sm:px-3 py-1 bg-white/20 rounded hover:bg-white/30 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                >
                  Sig ›
                </button>
              </div>
            </div>

            <div className="overflow-x-auto bg-gray-800 min-h-[350px] sm:min-h-[500px]">
              <div className="flex justify-start sm:justify-center p-2 sm:p-4 min-w-max">
                <Document
                  file={pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex flex-col items-center justify-center h-[350px] sm:h-[500px]">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mb-3"></div>
                      <p className="text-gray-400 text-sm">Cargando documento...</p>
                    </div>
                  }
                  error={
                    <div className="flex flex-col items-center justify-center h-[350px] sm:h-[500px] text-center p-4">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-gray-300 font-medium text-sm mb-2">Documento no disponible</p>
                      <p className="text-gray-500 text-xs">Agrega tu PDF en <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-300">public/tesis.pdf</code></p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="shadow-lg"
                  />
                </Document>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PDFViewer
