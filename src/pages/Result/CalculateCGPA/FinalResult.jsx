import PropTypes from "prop-types";

const FinalResult = ({ item, data, totalMarks, cgpa }) => {
  const { assignment, classTest, midterm, finalExam } = item || {};

  const assignmentInteger = parseInt(assignment);
  const classTestInteger = parseInt(classTest);
  const midtermInteger = parseInt(midterm);
  const finalExamInteger = parseInt(finalExam);
  const marks = assignmentInteger + classTestInteger + midtermInteger + finalExamInteger;
  const gpa = (marks / 100) * 4;

//   console.log("TotalMarks:", marks, "GPA:", gpa);

  return (
    <div>
      
    </div>
  );
};

FinalResult.propTypes = {
  item: PropTypes.object,
  data: PropTypes.node,
  totalMarks: PropTypes.number
};

export default FinalResult;
