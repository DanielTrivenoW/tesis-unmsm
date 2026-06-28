interface BreadcrumbProps {
  items: { label: string; href?: string }[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="bg-gray-50 border-b border-gray-200 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
        <ol className="flex items-center flex-wrap gap-1 text-xs sm:text-sm">
          <li>
            <a 
              href="https://cybertesis.unmsm.edu.pe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#003366] hover:text-[#8B0000] transition"
            >
              Cybertesis UNMSM
            </a>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className="text-gray-400">/</span>
              {item.href ? (
                <a 
                  href={item.href} 
                  className="text-[#003366] hover:text-[#8B0000] transition"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-600">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
