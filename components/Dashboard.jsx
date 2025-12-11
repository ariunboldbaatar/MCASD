export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">MCA SCADA Dashboard</h1>
          <p className="text-sm text-gray-600">Demo dashboard — Next.js + Tailwind</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">Total progress</h2>
            <div className="mt-3 h-4 bg-slate-200 rounded">
              <div className="h-4 bg-blue-600 rounded" style={{width:'38%'}} />
            </div>
            <p className="text-xs text-gray-500 mt-2">38% complete</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">Active issues</h2>
            <p className="text-2xl font-bold text-red-600 mt-3">7</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">Stakeholder packages</h2>
            <p className="text-2xl font-bold text-blue-600 mt-3">12</p>
          </div>
        </section>

        <section className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-3">Tag List (sample)</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-gray-500">
                <th>Tag</th>
                <th>Value</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PLC_CHPP3_Pump_01</td>
                <td>ON</td>
                <td className="text-green-600">Healthy</td>
              </tr>
              <tr>
                <td>PLC_CHPP3_Level_02</td>
                <td>2.34 m</td>
                <td className="text-green-600">Healthy</td>
              </tr>
              <tr>
                <td>PLC_CHPP4_Temp_01</td>
                <td>75 °C</td>
                <td className="text-yellow-600">Warning</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}
