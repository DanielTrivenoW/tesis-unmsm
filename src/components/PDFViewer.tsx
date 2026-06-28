interface PDFViewerProps {
  pdfUrl: string
}

const IS_PROD = import.meta.env.PROD

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const section = (children: React.ReactNode) => (
    <section className="bg-gray-100 w-full border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-base sm:text-lg font-bold text-[#003366] mb-4 pb-2 border-b-2 border-[#D4AF37] inline-block">
            Vista previa del documento
          </h2>
          {children}
        </div>
      </div>
    </section>
  )

  if (!IS_PROD) {
    return section(
      <div className="bg-white rounded border border-gray-200 p-8 text-center shadow-sm">
        <p className="text-gray-500 text-sm mb-4">
          La vista previa está disponible solo en la versión publicada.
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#004080] transition"
        >
          Abrir PDF en nueva pestaña
        </a>
      </div>
    )
  }

  const absolutePdfUrl = `${window.location.origin}${pdfUrl}`
  const googleViewerSrc = `https://docs.google.com/viewer?url=${encodeURIComponent(absolutePdfUrl)}&embedded=true`

  return section(
    <>
      <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
        <iframe
          src={googleViewerSrc}
          title="Vista previa de la tesis"
          className="w-full border-0"
          style={{ height: '80vh', minHeight: '500px' }}
        />
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Si el documento no carga,{' '}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#003366] underline"
        >
          ábrelo en una nueva pestaña
        </a>
        {' '}o descárgalo con el botón de arriba.
        {' '}Si al descargarlo aparece en blanco, ábrelo con Adobe Acrobat u otro lector de PDF, no con el navegador.
      </p>
    </>
  )
}

export default PDFViewer
