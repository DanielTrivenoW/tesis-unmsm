interface CitationProps {
  author: string
  year: string
  title: string
  institution: string
}

const Citation = ({ author, year, title, institution }: CitationProps) => {
  const citationAPA = `${author} (${year}). ${title}. ${institution}.`
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(citationAPA)
  }

  return (
    <section className="bg-white w-full border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-base sm:text-lg font-bold text-[#003366] mb-3 pb-2 border-b-2 border-[#D4AF37] inline-block">
            Cómo citar
          </h2>
          <div className="bg-gray-50 p-4 rounded border border-gray-200 relative group">
            <p className="text-sm sm:text-base text-gray-700 italic pr-10">
              {citationAPA}
            </p>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-[#003366] transition opacity-0 group-hover:opacity-100"
              title="Copiar citación"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Citation
