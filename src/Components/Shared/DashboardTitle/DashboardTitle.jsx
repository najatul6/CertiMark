import PropTypes from "prop-types";

const DashboardTitle = ({ title }) => {
  return (
    <div className="mb-10">
      <div className="divider divider-info capitalize text-xl md:text-2xl font-montserrat font-bold text-center  text-white">
      <span className="text-lightTeal">&#x2609;</span> {title} <span className="text-lightTeal">&#x2609;</span>
      </div>
      <div className="w-3/4 mx-auto my-10 bg-lightTeal rounded-xl h-1"></div>
    </div>
  );
};

DashboardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashboardTitle;
