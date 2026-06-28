const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#003366] text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                <img src="public/fondo-editorial-unmsm.png" alt="Logo" className="w-10 h-10" />
                <div>
                  <p className="font-bold text-sm">UNMSM</p>
                  <p className="text-xs text-blue-200">Decana de América</p>
                </div>
              </div>
              <p className="text-xs text-blue-200">
                Universidad Nacional Mayor de San Marcos
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-sm mb-3 text-white">Repositorios</h3>
              <ul className="space-y-2 text-xs text-blue-200">
                <li>
                  <a href="https://cybertesis.unmsm.edu.pe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Cybertesis UNMSM
                  </a>
                </li>
                <li>
                  <a href="https://sisbib.unmsm.edu.pe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Biblioteca Central
                  </a>
                </li>
                <li>
                  <a href="https://repositorio.unmsm.edu.pe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Repositorio Institucional
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-sm mb-3 text-white">Facultad</h3>
              <ul className="space-y-2 text-xs text-blue-200">
                <li>
                  <a href="https://sistemas.unmsm.edu.pe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Portal FISI
                  </a>
                </li>
                <li>
                  <a href="https://aulavirtualsistemas.unmsm.edu.pe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Aula Virtual
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-sm mb-3 text-white">Contacto</h3>
              <ul className="space-y-2 text-xs text-blue-200">
                <li>Ciudad Universitaria</li>
                <li>Av. Germán Amezaga #375</li>
                <li>Lima, Perú</li>
                <li className="pt-2">
                  <a href="tel:+5116197000" className="hover:text-white transition">
                    (01) 619-7000
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-6 text-center">
            <p className="text-xs text-blue-200">
              © {currentYear} Universidad Nacional Mayor de San Marcos. Todos los derechos reservados.
            </p>
            <p className="text-xs text-blue-300 mt-1">
              Fundada en 1551 - Decana de América
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
