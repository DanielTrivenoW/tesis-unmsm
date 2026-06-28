interface PDFViewerProps {
  pdfUrl: string
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  return (
    <section className="bg-gray-100 w-full border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-base sm:text-lg font-bold text-[#003366] mb-4 pb-2 border-b-2 border-[#D4AF37] inline-block">
            Vista previa del documento
          </h2>

          <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
            <iframe
              src={pdfUrl}
              title="Vista previa de la tesis"
              className="w-full border-0"
              style={{ height: '80vh', minHeight: '500px' }}
            />
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Si el documento no se muestra,{' '}
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-[#003366] underline">
              ábrelo en una nueva pestaña
            </a>
            {' '}o descárgalo desde el botón de arriba.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PDFViewer
