import PropTypes from "prop-types";

const FinalResult = ({item, totalSubjects}) => {
    const { assignment, classTest, midterm, finalExam } = item || {};
    const assignmentInteger = parseInt(assignment);
    const classTestInteger = parseInt(classTest);
    const midtermInteger = parseInt(midterm);
    const finalExamInteger = parseInt(finalExam);
    const totalMarks = assignmentInteger + classTestInteger + midtermInteger + finalExamInteger;
    const gpa = (totalMarks / 100) * 4;
    // console.log(typeof(totalSubjects));

    return (
        <div>
            
        </div>
    );
};

FinalResult.propTypes = {
    item: PropTypes.object,
    totalSubjects: PropTypes.number,
  };

export default FinalResult;