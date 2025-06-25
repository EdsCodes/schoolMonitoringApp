const inicio = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to monitoring schooll App</h1>
      <p className="text-lg mb-8">Where you can manage all the courses, students, teachers and inscriptions.</p>
      <a href="/dashboard" className="px-6 py-3 bg-blue-600 text-black rounded hover:bg-blue-700 transition duration-300">
        Go to Dashboard
      </a>
    </div>
  );
}

export default inicio;