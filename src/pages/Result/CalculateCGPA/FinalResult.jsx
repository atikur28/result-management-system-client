import PropTypes from "prop-types";

const FinalResult = ({ item }) => {
  const { assignment, classTest, midterm, finalExam } = item || {};

  const gradingScale = [
    { min: 80, max: 100, grade: "A+" },
    { min: 75, max: 79, grade: "A-" },
    { min: 70, max: 74, grade: "A" },
    { min: 65, max: 69, grade: "B+" },
    { min: 60, max: 64, grade: "B" },
    { min: 55, max: 59, grade: "B-" },
    { min: 50, max: 54, grade: "C+" },
    { min: 45, max: 49, grade: "C" },
    { min: 40, max: 44, grade: "C-" },
    { min: 0, max: 39, grade: "F" },
  ];
  const assignmentMarks = parseInt(assignment) || 0;
  const classTestMarks = parseInt(classTest) || 0;
  const midtermMarks = parseInt(midterm) || 0;
  const finalExamMarks = parseInt(finalExam) || 0;
  const totalMarks = assignmentMarks + classTestMarks + midtermMarks + finalExamMarks;
  
  let grade = "F";
 
  for (let i = 0; i < gradingScale.length; i++) {
    if (totalMarks >= gradingScale[i].min && totalMarks <= gradingScale[i].max) {
      grade = gradingScale[i].grade;
      break;
    }
  }

//   console.log("TotalMarks:", marks, "GPA:", gpa);

  return (
    <div>
      {grade}
    </div>
  );
};

FinalResult.propTypes = {
  item: PropTypes.object,
  data: PropTypes.node,
  totalMarks: PropTypes.number
};

export default FinalResult;
