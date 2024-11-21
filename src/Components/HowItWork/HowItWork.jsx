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
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-lightTeal text-white border-4 border-white text-xl font-semibold">
                               01
                            </div>
                            <span className="text-white">STEP</span>
                        </div>
                        <div className="border-2 rounded-xl p-5 pb-10 ">
                            <h4 className="text-lg leading-6 font-semibold text-lightTeal">Apply</h4>
                            <p className="mt-2 text-base leading-6 text-teal">
                                Apply for a certificate by filling out the form. When you will pay for this certificate the certificate will be generated.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="text-left mb-10">
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col items-center justify-center mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-lightTeal text-white border-4 border-white text-xl font-semibold">
                                02
                            </div>
                            <span className="text-white">STEP</span>
                        </div>
                        <div className="border-2 rounded-xl p-5 pb-10 ">
                            <h4 className="text-lg leading-6 font-semibold text-lightTeal">Check Status</h4>
                            <p className="mt-2 text-base leading-6 text-teal">
                               Check application status by click on the application status button. You will get the status of your application.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="text-left mb-10">
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col items-center justify-center mr-5">
                            <div
                                className="flex items-center justify-center h-20 w-20 rounded-full bg-lightTeal text-white border-4 border-white text-xl font-semibold">
                                03
                            </div>
                            <span className="text-white">STEP</span>
                        </div>
                        <div className="border-2 rounded-xl p-5 pb-10 ">
                            <h4 className="text-lg leading-6 font-semibold text-lightTeal">Download</h4>
                            <p className="mt-2 text-base leading-6 text-teal">
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