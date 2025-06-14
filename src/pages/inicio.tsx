const inicio = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-100">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a la Aplicación de Monitoreo Escolar</h1>
      <p className="text-lg mb-8">Esta aplicación te permite monitorear el rendimiento y la asistencia de los estudiantes.</p>
      <a href="/dashboard" className="px-6 py-3 bg-blue-600 text-black rounded hover:bg-blue-700 transition duration-300">
        Ir al Dashboard
      </a>
    </div>
  );
}

export default inicio;