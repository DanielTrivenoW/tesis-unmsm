import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import ThesisCard from './components/ThesisCard'
import Metadata from './components/Metadata'
import Citation from './components/Citation'
import PDFViewer from './components/PDFViewer'
import Footer from './components/Footer'

const thesisData = {
  title: 'Detección de funciones vulnerables en código Javascript utilizando redes neuronales y análisis estructural del código fuente',
  author: 'TRIVEÑO RUFFNER, Daniel Huber',
  advisor: 'Mg. MACHADO VICENTE, Joel Fernando',
  date: '20 de enero del 2026',
  degree: 'Tesis para optar el grado de Bachiller en Ingeniería de Software',
  abstract: 'El creciente uso de JavaScript en aplicaciones web ha intensificado la necesidad de mejorar la detección de vulnerabilidades a nivel funcional. Aunque existen herramientas de análisis estático ampliamente utilizadas, estas presentan limitaciones en cuanto a precisión y profundidad semántica, generando una alta tasa de falsos positivos o negativos. Esta investigación propone un enfoque híbrido basado en aprendizaje profundo y análisis estructural del código fuente para identificar funciones potencialmente vulnerables. Específicamente, se integra una arquitectura de red neuronal con representaciones estructurales derivadas de árboles de sintaxis abstracta (AST) y flujos de datos para mejorar la clasificación de funciones inseguras. Se construye y entrena un modelo supervisado sobre un conjunto de funciones etiquetadas, evaluando su rendimiento frente a técnicas tradicionales. Como resultado, se busca demostrar una mayor precisión en la detección de vulnerabilidades reales, destacando el valor del análisis estructural como complemento al aprendizaje automático. Este trabajo constituye un aporte en el área de seguridad del software, particularmente en el desarrollo de soluciones efectivas para la protección de aplicaciones JavaScript.',
  keywords: ['Ingeniería de Software', 'Desarrollo de Software', 'Tecnología', 'Investigación'],
  uri: 'http://hdl.handle.net/20.500.12672/XXXXX',
  collection: 'Tesis de Pregrado - EP Ingeniería de Software',
}

const breadcrumbItems = [
  { label: 'Ingeniería', href: 'https://cybertesis.unmsm.edu.pe/communities/d2dd9c8c-0bfd-4502-aeb1-52184b55f950' },
  { label: 'Tesis de Pregrado' },
  { label: thesisData.title },
]

const pdfUrl = `${import.meta.env.BASE_URL}Tesis Bachiller Triveno Ruffner Daniel.pdf`

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="flex-grow w-full">
        <ThesisCard
          title={thesisData.title}
          author={thesisData.author}
          advisor={thesisData.advisor}
          date={thesisData.date}
          degree={thesisData.degree}
          pdfUrl={pdfUrl}
        />
        <Metadata
          abstract={thesisData.abstract}
          keywords={thesisData.keywords}
          uri={thesisData.uri}
          collection={thesisData.collection}
        />
        <Citation
          author={thesisData.author}
          year={thesisData.date}
          title={thesisData.title}
          institution="Universidad Nacional Mayor de San Marcos"
        />
        <PDFViewer pdfUrl={pdfUrl} />
      </main>
      <Footer />
    </div>
  )
}

export default App
