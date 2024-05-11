import PropTypes from "prop-types";
import FinalResult from "./FinalResult";

const CalculateCGPA = ({ subjects }) => {
  const totalSubjects = subjects.length;
  return (
    <div>
      {subjects?.map((item, index) => (
        <FinalResult
          key={index}
          item={item}
          totalSubjects={totalSubjects}
        ></FinalResult>
      ))}
    </div>
  );
};

CalculateCGPA.propTypes = {
  subjects: PropTypes.array,
};

export default CalculateCGPA;
