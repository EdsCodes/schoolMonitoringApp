const studentsDetailed: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Student Detailed Page</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">John Doe</h2>
        <p className="text-gray-600"><strong>Age:</strong> 16</p>
        <p className="text-gray-600"><strong>Grade:</strong> 10th</p>
        <p className="text-gray-600"><strong>Email:</strong> john.doe@example.com</p>
        <p className="text-gray-600"><strong>Address:</strong> 123 Main St, Springfield</p>
      </div>
    </div>
  );

}

export default studentsDetailed;