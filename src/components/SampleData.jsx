const SampleData = () => {
  const sampleUsers = [    
    { name: 'Manas  Kush', aadhar: '9876-5432-1098', image: 'user2.jpg' },
    { name: 'Suryansh Patwal', aadhar: '1234-5678-9012', image: 'user1.jpg' },
    { name: 'Lomash Chaudhary', aadhar: '9876-5432-1098', image: 'user2.jpg' },

  ];

  return (
    <div className="flex justify-center items-center flex-wrap gap-6 p-8 bg-gray-100">
      {sampleUsers.map((user, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs text-center"
        >
          <img
            src={user.image}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500"
          />
          <h3 className="text-lg font-bold mb-2 text-gray-800">{user.name}</h3>
          <p className="text-gray-500 mb-4">Aadhaar: {user.aadhar}</p>
          <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600">
            Profile {user.aadhar}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SampleData;
