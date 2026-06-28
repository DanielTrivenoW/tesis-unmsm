interface ThesisCardProps {
  title: string
  author: string
  advisor: string
  date: string
  degree: string
  pdfUrl: string
}



const ThesisCard = ({ title, author, advisor, date, degree, pdfUrl }: ThesisCardProps) => {
  return (
    <section className="bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
              <div className="w-32 h-40 sm:w-40 sm:h-52 bg-gray-100 border border-gray-300 rounded shadow-sm flex flex-col items-center justify-center p-3">
                <svg className="w-12 h-12 text-[#003366] mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">PDF</span>
              </div>
              <div className="flex gap-2 mt-4">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#003366] text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-[#004080] transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Ver
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center gap-1 bg-[#8B0000] text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-[#6B0000] transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar
                </a>
              </div>
            </div>

            <div className="flex-grow">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#003366] mb-4 leading-tight">
                {title}
              </h1>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium sm:min-w-[100px]">Autor(es):</span>
                  <span className="text-sm sm:text-base text-gray-800">{author}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium sm:min-w-[100px]">Asesor:</span>
                  <span className="text-sm sm:text-base text-gray-800">{advisor}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium sm:min-w-[100px]">Fecha:</span>
                  <span className="text-sm sm:text-base text-gray-800">{date}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium sm:min-w-[100px]">Grado:</span>
                  <span className="text-sm sm:text-base text-gray-800">{degree}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThesisCard
