const HowItWork = () => {
  return (
    <div className="gradient-background">
    <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

        <div className="text-center">
            
            <h3 className="text-3xl mt-5 sm:text-5xl leading-normal font-extrabold tracking-tight text-white">
                How it <span className="text-lightTeal">Works?</span>
            </h3>

        </div>

        <div className="mt-20">
            <ul className="">

                <li className="text-left mb-10">
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col items-center justify-center mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                1
                            </div>
                            <span className="text-gray-500">STEP</span>
                        </div>
                        <div className="bg-gray-100 p-5 pb-10 ">
                            <h4 className="text-lg leading-6 font-semibold text-gray-900">Apply</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                                Apply for a certificate by filling out the form. When you will pay for this certificate the certificate will be generated.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="text-left mb-10">
                    <div className="flex flex-row items-start">
                        <div className="flex flex-col items-center justify-center mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                2
                            </div>
                            <span className="text-gray-500">STEP</span>
                        </div>
                        <div className="bg-gray-100 p-5 pb-10 ">
                            <h4 className="text-lg leading-6 font-semibold text-gray-900">Check Status</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                               Check application status by click on the application status button. You will get the status of your application.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="text-left mb-10">
                    <div className="flex flex-row items-start">
                        <div className="flex flex-col items-center justify-center mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                3
                            </div>
                            <span className="text-gray-500">STEP</span>
                        </div>
                        <div className="bg-gray-100 p-5 pb-10 ">
                            <h4 className="text-lg leading-6 font-semibold text-gray-900">Download</h4>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                                If your application is approved you will get the certificate. You can download the certificate from the download button.
                            </p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

    </div>
</div>
  )
}

export default HowItWork