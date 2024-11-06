import PropTypes from "prop-types";

const DashboardTitle = ({ title }) => {
  return (
    <div className="mb-10">
      <div className="divider divider-info text-xl md:text-2xl  font-bold text-center  text-white">
      <span className="text-lightTeal">&#x2609;</span> {title} <span className="text-lightTeal">&#x2609;</span>
      </div>
    </div>
  );
};

DashboardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashboardTitle;
