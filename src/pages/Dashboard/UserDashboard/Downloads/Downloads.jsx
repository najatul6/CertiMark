import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
// import imgae from '../../../../assets/Certificate-of-Diploma-in-Engineering-1-2048.webp'
import './download.css'
const Downloads = () => {
  return (
    <div>
      <DashboardTitle title={"Downloads"} />
      {/* <img src={imgae} alt="Transcript Certificate" className="w-full h-auto" /> */}
      {/* Certificate Design  */}
      <div className="certificate">
        <div className="header">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <h1>Bangladesh Technical Education Board, Dhaka</h1>
          <h2>Diploma in Engineering Examination, 2014</h2>
        </div>

        <div className="details">
          <div className="left">
            <p>SL No- 2603867</p>
            <p>This is to certify that son/daughter of</p>
            <p>and</p>
            <p>of</p>
            <p>
              bearing roll no. 404497 duly passed the Four -Year Diploma in
              Engineering Examination in
            </p>
            <p>
              Civil Technology held in the month of December, 2014 - February,
              2015. He/she secured CGPA 3.63 on a scale of 4.00.
            </p>
            <p>Date of Publication of Result: May 12, 2015</p>
            <p>Date of Issue: November 11, 2015</p>
          </div>
          <div className="right">
            <p>Registration No. 369304</p>
            <p>Session 2010-11</p>
            <p>Md. Uzzal Molla</p>
            <p>Based Molla</p>
            <p>(Father)</p>
            <p>Sharifa Begum</p>
            <p>(Mother)</p>
            <p>Narsingdi Polytechnic Institute, Narsingdi</p>
          </div>
        </div>

        <div className="footer">
          <p>Compared by</p>
          <p>Controller of Examinations</p>
          <p>This Certificate is issued without any alteration or erasure</p>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
