import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-700 text-white flex items-center justify-between px-6 py-4 shadow-md">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">Visitor Management Reports</h1>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-gray-200 p-6 hidden md:block shadow-lg">
          <ul>
            <li className="mb-4"><a href="#" className="hover:text-gray-400">Dashboard</a></li>
            <li className="mb-4"><a href="#" className="hover:text-gray-400">Visitor Log</a></li>
            <li className="mb-4"><a href="#" className="hover:text-gray-400">Appointments</a></li>
            <li className="mb-4"><a href="#" className="hover:text-gray-400">Reports</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Visitor Reports</h2>

            {/* Filters */}
            <div className="bg-white p-4 rounded shadow mb-6 flex flex-wrap gap-4 items-center border border-gray-200">
              <input type="date" className="border border-gray-300 p-2 rounded focus:ring focus:ring-blue-200" />
              <input type="date" className="border border-gray-300 p-2 rounded focus:ring focus:ring-blue-200" />
              <select className="border border-gray-300 p-2 rounded focus:ring focus:ring-blue-200">
                <option>Plant Name</option>
              </select>
              <select className="border border-gray-300 p-2 rounded focus:ring focus:ring-blue-200">
                <option>Visitor Type</option>
              </select>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow">Search</button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow">Clear</button>
            </div>

            {/* Detailed Report Table */}
            <div className="bg-white p-6 rounded shadow border border-gray-200 overflow-x-auto">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Check-In Check-Out Report</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-300 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">Plant Name</th>
                    <th className="px-4 py-2 border">Visitor Name</th>
                    <th className="px-4 py-2 border">Visitor Type</th>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Check-In</th>
                    <th className="px-4 py-2 border">Check-Out</th>
                    <th className="px-4 py-2 border">Stay Time</th>
                    <th className="px-4 py-2 border">Checked By</th>
                    <th className="px-4 py-2 border">Captured Image</th>
                    <th className="px-4 py-2 border">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {[{"plant": "Warehouse Plant", "name": "Mr. Rajesh Raghav", "type": "Contractor", "date": "2023-10-10", "checkIn": "10:15 AM", "checkOut": "12:45 PM", "stayTime": "2h 30m", "checkedBy": "Purushoth", "image": "/visitor1.jpg", "address": "123 Street, City"}].map((visitor, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="px-4 py-2 border">{visitor.plant}</td>
                      <td className="px-4 py-2 border">{visitor.name}</td>
                      <td className="px-4 py-2 border">{visitor.type}</td>
                      <td className="px-4 py-2 border">{visitor.date}</td>
                      <td className="px-4 py-2 border">{visitor.checkIn}</td>
                      <td className="px-4 py-2 border">{visitor.checkOut}</td>
                      <td className="px-4 py-2 border">{visitor.stayTime}</td>
                      <td className="px-4 py-2 border">{visitor.checkedBy}</td>
                      <td className="px-4 py-2 border">
                        <Image src={visitor.image} alt="Captured" width={50} height={50} className="rounded-full" />
                      </td>
                      <td className="px-4 py-2 border">{visitor.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
