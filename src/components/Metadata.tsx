interface MetadataProps {
  abstract: string
  keywords?: string[]
  uri?: string
  collection?: string
}

const Metadata = ({ abstract, keywords, uri, collection }: MetadataProps) => {
  return (
    <section className="bg-gray-50 w-full border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#003366] mb-3 pb-2 border-b-2 border-[#D4AF37] inline-block">
              Resumen
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-white p-4 sm:p-5 rounded border border-gray-200">
              {abstract}
            </p>
          </div>

          {keywords && keywords.length > 0 && (
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#003366] mb-3 pb-2 border-b-2 border-[#D4AF37] inline-block">
                Palabras Clave
              </h2>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, index) => (
                  <a
                    key={index}
                    href={`https://cybertesis.unmsm.edu.pe/handle/20.500.12672/simple-search?query=${encodeURIComponent(keyword)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#003366]/10 text-[#003366] text-xs sm:text-sm px-3 py-1 rounded border border-[#003366]/20 hover:bg-[#003366] hover:text-white transition"
                  >
                    {keyword}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#003366] mb-3 pb-2 border-b-2 border-[#D4AF37] inline-block">
              Metadatos
            </h2>
            <div className="bg-white rounded border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 bg-gray-100 font-medium text-gray-600 w-32 sm:w-40">URI</td>
                    <td className="px-4 py-2">
                      <a 
                        href={uri || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#003366] hover:text-[#8B0000] break-all"
                      >
                        {uri || 'No disponible'}
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 bg-gray-100 font-medium text-gray-600">Colección</td>
                    <td className="px-4 py-2 text-gray-700">{collection || 'Tesis de Pregrado - FISI'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 bg-gray-100 font-medium text-gray-600">Aparece en</td>
                    <td className="px-4 py-2 text-gray-700">Tesis de Pregrado - EP Ingeniería de Software</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Metadata
