const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a href="https://www.unmsm.edu.pe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
              <img src={`${import.meta.env.BASE_URL}images.jpg`} alt="Logo UNMSM" className="h-12  flex items-center justify-center flex-shrink-0" />
            </div>
            <div className="">
              <h1 className="text-sm sm:text-base font-bold text-[#003366] leading-tight">
                Universidad Nacional Mayor de San Marcos
              </h1>
              <p className="text-xs text-gray-500">Decana de América</p>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <a href="https://cybertesis.unmsm.edu.pe" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#8B0000] transition">
              Cybertesis
            </a>
            <a href="https://sisbib.unmsm.edu.pe" target="_blank" rel="noopener noreferrer" className="text-[#003366] hover:text-[#8B0000] transition">
              Biblioteca
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#003366] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <a href="https://sistemas.unmsm.edu.pe" target="_blank" rel="noopener noreferrer" className="text-white text-xs sm:text-sm font-medium hover:text-blue-200 transition">
              Facultad de Ingeniería de Sistemas e Informática
            </a>
            <span className="text-blue-200 text-xs hidden sm:block">
              Escuela Profesional de Ingeniería de Software
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
