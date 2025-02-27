import React from 'react'

function HeroImage() {
    return (
        <>
            <section className="flex justify-center mt-10 px-4 lg:px-20">
                <div className="bg-blue-600 p-4 rounded-xl w-full lg:w-3/4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Docker Desktop</h3>
                            <input type="text" className="border p-2 rounded-md w-2/3" placeholder="Search for images, containers..." />
                        </div>
                        <div className="border-t pt-4">
                            <h4 className="text-gray-700 font-semibold">Containers</h4>
                            <div className="flex justify-between text-sm text-gray-500 mt-2">
                                <p>CPU Usage: <span className="text-green-600">1.06%</span></p>
                                <p>Memory Usage: <span className="text-green-600">127.45 MB</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroImage