
const OverView = () => {
  return (
    <div>
         <h2 className="font-bold" >
            Dashboard Overview
          </h2>

          <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards for overview section */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Pending Applications</h3>
              <p className="text-gray-600">24</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Verified Certificates</h3>
              <p className="text-gray-600">120</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>Total Users</h3>
              <p className="text-gray-600">342</p>
            </div>
          </section>
    </div>
  )
}

export default OverView