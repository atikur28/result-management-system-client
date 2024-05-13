import PropTypes from "prop-types";
import FinalResult from "./FinalResult";
import { useEffect, useState } from "react";

const CalculateCGPA = ({ subjects, data }) => {
  const [failedSubject, setFailedSubject] = useState(null);

  let totalMarks = 0;
  let totalGradePoints = 0;
  // const subjectTotals = {};
  const totalSubjects = subjects.length;

  const gradingScale = [
    { marks: 80, gradePoint: 4.0 },
    { marks: 70, gradePoint: 3.5 },
    { marks: 60, gradePoint: 3.0 },
    { marks: 50, gradePoint: 2.5 },
    { marks: 40, gradePoint: 2.0 },
    { marks: 0, gradePoint: 0.0 },
  ];

  subjects.forEach((subject) => {
    const assignment = parseInt(subject.assignment);
    const classTest = parseInt(subject.classTest);
    const midterm = parseInt(subject.midterm);
    const finalExam = parseInt(subject.finalExam);

    const subjectTotalMarks = assignment + classTest + midterm + finalExam;
    totalMarks += subjectTotalMarks;
    // subjectTotals[subject.subjectName] = subjectTotalMarks;

    let gradePoint = 0;
    for (let i = 0; i < gradingScale.length; i++) {
      if (subjectTotalMarks >= gradingScale[i].marks) {
        gradePoint = gradingScale[i].gradePoint;
        break;
      }
    }

    totalGradePoints += gradePoint;
  });

  useEffect(() => {
    const failedSubject = subjects.find((subject) => {
      const assignment = parseInt(subject.assignment);
      const classTest = parseInt(subject.classTest);
      const midterm = parseInt(subject.midterm);
      const finalExam = parseInt(subject.finalExam);

      const subjectTotalMarks = assignment + classTest + midterm + finalExam;

      // Return true if subjectTotalMarks is less than 40
      return subjectTotalMarks < 40;
    });

    setFailedSubject(failedSubject);
  }, [subjects]);

  const cgpa = (totalGradePoints / totalSubjects).toFixed(2);

  // console.log(testingPassed);

  return (
    <div>
      <div className="overflow-x-auto w-11/12 lg:w-4/5 xl:w-2/4 mx-auto my-10 rounded-t-sm border">
        <table className="w-full bg-gray-200">
          <tr>
            <th
              colSpan={4}
              className="text-lg md:text-2xl bg-green-600 rounded-t-sm py-1 text-white font-medium"
            >
              Result Information
            </th>
          </tr>
          <tr className="font-medium border-b-2 border-white">
            <td className="border-r-2 border-white pl-2">Name</td>
            <td className="pl-2 border-r-2 border-white">{data?.name}</td>
            <td className="pl-2 border-r-2 border-white">Roll</td>
            <td className="pl-2">{data?.rollNo}</td>
          </tr>
          <tr className="font-medium border-b-2 border-white">
            <td className="border-r-2 border-white pl-2">Father&apos;s Name</td>
            <td className="pl-2 border-r-2 border-white">{data?.fatherName}</td>
            <td className="pl-2 border-r-2 border-white">Session</td>
            <td className="pl-2">{data?.session}</td>
          </tr>
          <tr className="font-medium border-b-2 border-white">
            <td className="border-r-2 border-white pl-2">Mother&apos;s Name</td>
            <td className="pl-2 border-r-2 border-white">{data?.motherName}</td>
            <td className="pl-2 border-r-2 border-white">Department</td>
            <td className="pl-2">{data?.department}</td>
          </tr>
          <tr className="font-medium border-b-2 border-white">
            <td className="border-r-2 border-white pl-2">Date of Birth</td>
            <td className="pl-2 border-r-2 border-white">{data?.birthDate}</td>
            <td className="pl-2 border-r-2 border-white">Semester</td>
            <td className="pl-2">{data?.semester}</td>
          </tr>
          <tr className="font-medium border-b-2 border-white">
            <td className="border-r-2 border-white pl-2">Institute</td>
            <td className="pl-2 border-r-2 border-white">{data?.institute}</td>
            <td className="pl-2 border-r-2 border-white">Type</td>
            <td className="pl-2">{data?.studentType}</td>
          </tr>
          <tr className="font-medium border-white">
            <td className="border-r-2 border-white pl-2">Result</td>
            <td className="pl-2 border-r-2 border-white">
              {!failedSubject && <span className="text-green-600">Passed</span>}
              {failedSubject && (
                <span className="text-red-600">Incomplete</span>
              )}
            </td>
            <td className="pl-2 border-r-2 border-white">CGPA</td>
            <td className="pl-2">
              {!failedSubject && <span>{cgpa}</span>}
              {failedSubject && (
                <span className="text-red-600">Incomplete</span>
              )}
            </td>
          </tr>
        </table>
      </div>
      <h2 className="text-lg md:text-2xl text-center rounded-t-sm font-medium mb-3">
        Result Information
      </h2>
      <div className="overflow-x-auto w-11/12 lg:w-4/5 xl:w-2/4 mx-auto rounded-t-sm border">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-500 text-[16px] text-white font-semibold">
              <td className="border-r-2 border-white">Code</td>
              <td className="border-r-2 border-white">Subject</td>
              <td>Grade Point</td>
            </tr>
          </thead>
          <tbody>
            {subjects?.map((item, index) => (
              <tr key={index} className="font-medium bg-gray-200 border-b-2 border-white">
              <td className="border-r-2 border-white">{item?.code}</td>
              <td className="border-r-2 border-white">{item?.subjectName}</td>
              <td><FinalResult item={item}></FinalResult></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CalculateCGPA.propTypes = {
  subjects: PropTypes.array,
  data: PropTypes.array,
};

export default CalculateCGPA;
