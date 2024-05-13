import PropTypes from "prop-types";

const FinalResult = ({ item }) => {
  const { assignment, classTest, midterm, finalExam } = item || {};

  const gradingScale = [
    { marks: 80, grade: "A" },
      { marks: 70, grade: "B" },
      { marks: 60, grade: "C" },
      { marks: 50, grade: "D" },
      { marks: 40, grade: "E" },
      { marks: 0, grade: "F" }
  ];

  const assignmentMarks = parseInt(assignment) || 0;
  const classTestMarks = parseInt(classTest) || 0;
  const midtermMarks = parseInt(midterm) || 0;
  const finalExamMarks = parseInt(finalExam) || 0;
  const totalMarks = assignmentMarks + classTestMarks + midtermMarks + finalExamMarks;
  
  let grade = "F";
  for (let i = 0; i < gradingScale.length; i++) {
    if (totalMarks >= gradingScale[i].marks) {
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
