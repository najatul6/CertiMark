
const ClearanceForm = () => {
  return (
    <div>
        <div className="absolute top-0 left-0 w-full h-full">
            {application?.certificateType === "testimonial" ? (
              // For Testimonial
              <div className="relative w-[560px] h-[400px]">
                {/* Student Name  */}
                <h6 className="absolute uppercase top-[145px] left-[128px] tracking-[2px] font-serif text-[12px] font-[800] italic text-blackDiamond">
                  Md. Najatul Islam
                </h6>

                {/* Father Name  */}
                {/* <h6 className="absolute capitalize top-[182px] right-[165px] font-playwrite text-[12px] font-bold text-blackDiamond">
                  Md. Mozibur Rahman
                </h6> */}

                {/* Mother Name  */}
                {/* <h6 className="absolute capitalize top-[202px] right-[162px] font-playwrite text-[12px] font-bold text-blackDiamond">
                  Mst. Khadija begum
                </h6> */}

                {/* Student Roll  */}
                {/* <h6 className="absolute capitalize top-[250px] left-[127px] font-playwrite text-[10px] font-bold text-blackDiamond">
                  490862
                </h6> */}

                {/* Registration Number  */}
                {/* <h6 className="absolute top-[125px] right-[57px] font-playwrite text-[7px] font-bold text-blackDiamond">
                1502041769
              </h6> */}

                {/* Session  */}
                {/* <h6 className="absolute top-[145px] right-[80px] font-playwrite text-[7px] font-bold text-blackDiamond">
                2019-20
              </h6> */}

                {/* Technology  */}
                {/* <h6 className="absolute capitalize top-[266px] left-[180px] font-playwrite text-[12px] font-bold text-blackDiamond">
                  Computer Technology
                </h6> */}

                {/* Held of Month  */}
                {/* <h6 className="absolute capitalize top-[293px] left-[65px] font-playwrite text-[10px] font-bold text-blackDiamond">
                  December,2019 - February, 2025
                </h6> */}

                {/* Board Name  */}
                {/* <h6 className="absolute capitalize top-[222px] right-[120px] font-playwrite text-[12px] font-bold text-blackDiamond">
                  Rangpur Polytechnic Institute, Rangpur
                </h6> */}

                {/* Result  */}
                {/* <h6 className="absolute capitalize top-[294px] right-[157px] font-playwrite text-[10px] font-bold text-blackDiamond">
                  3.72
                </h6> */}

                {/* Date of issue  */}
                {/* <h6 className="absolute capitalize top-[362px] left-[110px] font-playwrite text-[8px] font-bold text-blackDiamond">
                  November 11, 2025
                </h6> */}

                {/* Register Signature  */}
                {/* <img
                  src={compared}
                  alt="Comapred signature"
                  className="absolute bottom-[33px] left-[266px] w-[75px]"
                /> */}

                {/* Principal Signature  */}
                {/* <img
                  src={controller}
                  alt="Controller Signature"
                  className="absolute bottom-[35px] right-[85px] w-[75px]"
                /> */}
              </div>
            ) : (
              // For Clearance
              <div className="relative w-[560px] h-[400px]">
                {/* Serial Number  */}
                <h6 className="absolute top-[108px] left-[85px] tracking-[3px] font-montserrat text-[9px] font-bold text-blackDiamond">
                  {serialNumber}
                </h6>

                {/* Year  */}
                <h2 className="absolute top-[90px] left-[405px] font-tenor text-blackDiamond">
                  2024
                </h2>

                {/* Registration Number  */}
                <h6 className="absolute top-[125px] right-[57px] font-playwrite text-[7px] font-bold text-blackDiamond">
                  {application?.registrationNo}
                </h6>

                {/* Session  */}
                <h6 className="absolute top-[145px] right-[80px] font-playwrite text-[7px] font-bold text-blackDiamond">
                  {application?.yearOfCompletion}
                </h6>

                {/* Student Name  */}
                <h6 className="absolute capitalize top-[160px] right-[178px] font-playwrite text-[12px] font-bold text-blackDiamond">
                  {application?.name}
                </h6>

                {/* Father Name  */}
                <h6 className="absolute capitalize top-[182px] right-[165px] font-playwrite text-[12px] font-bold text-blackDiamond">
                  {application?.fatherName}
                </h6>

                {/* Mother Name  */}
                <h6 className="absolute capitalize top-[202px] right-[162px] font-playwrite text-[12px] font-bold text-blackDiamond">
                  {application?.motherName}
                </h6>

                {/* College Name  */}
                <h6 className="absolute capitalize top-[222px] right-[120px] font-playwrite text-[12px] font-bold text-blackDiamond">
                  Rangpur Polytechnic Institute, Rangpur
                </h6>

                {/* Student Roll  */}
                <h6 className="absolute capitalize top-[250px] left-[127px] font-playwrite text-[10px] font-bold text-blackDiamond">
                  {application?.studentId}
                </h6>

                {/* Technology  */}
                <h6 className="absolute capitalize top-[266px] left-[180px] font-playwrite text-[12px] font-bold text-blackDiamond">
                  {application?.technology}
                </h6>

                {/* Held of Month  */}
                <h6 className="absolute capitalize top-[293px] left-[65px] font-playwrite text-[10px] font-bold text-blackDiamond">
                  {heldOnMonth}
                </h6>

                {/* Result  */}
                <h6 className="absolute capitalize top-[294px] right-[157px] font-playwrite text-[10px] font-bold text-blackDiamond">
                  {result}
                </h6>

                {/* Publication of Result  */}
                <h6 className="absolute capitalize top-[345px] left-[175px] font-playwrite text-[8px] font-bold text-blackDiamond">
                  {publishDate}
                </h6>

                {/* Date of issue  */}
                <h6 className="absolute capitalize top-[362px] left-[110px] font-playwrite text-[8px] font-bold text-blackDiamond">
                  {dateOfIssue}
                </h6>
                {/* Compared By  */}
                <img
                  src={compared}
                  alt="Comapred signature"
                  className="absolute bottom-[33px] left-[266px] w-[75px]"
                />

                {/* Compared By  */}
                <img
                  src={controller}
                  alt="Controller Signature"
                  className="absolute bottom-[35px] right-[85px] w-[75px]"
                />
              </div>
            )}
            <div>
              
            </div>
          </div>
    </div>
  )
}

export default ClearanceForm