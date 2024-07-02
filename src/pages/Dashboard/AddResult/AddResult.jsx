import { useContext, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const AddResult = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [subjects, setSubjects] = useState([
    {
      subjectName: "",
      code: "",
      assignment: "",
      classTest: "",
      midterm: "",
      finalExam: "",
    },
  ]);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        subjectName: "",
        code: "",
        assignment: "",
        classTest: "",
        midterm: "",
        finalExam: "",
      },
    ]);
  };

  const deleteSubject = (index) => {
    // Ensure the deletion is only for even index (1-based: 2nd, 4th, etc.) and not for the 1st subject
    if (index > 0) {
      const newSubjects = subjects.filter((_, i) => i !== index);
      setSubjects(newSubjects);
    }
  };

  const handleSubjectInputChange = (index, event) => {
    const { name, value } = event.target;
    const newSubjects = [...subjects];

   
    // Validation checks
    let isValid = true;
    let warningMessage = "";

    if (name === "assignment" && value > 5) {
      isValid = false;
      warningMessage = "Assignment marks should be within 5.";
    } else if (name === "classTest" && value > 5) {
      isValid = false;
      warningMessage = "Class Test marks should be within 5.";
    } else if (name === "midterm" && value > 10) {
      isValid = false;
      warningMessage = "Midterm marks should be within 10.";
    } else if (name === "finalExam" && value > 80) {
      isValid = false;
      warningMessage = "Final Exam marks should be within 60.";
    }
    if(isValid){
      newSubjects[index][name] = value;
      setSubjects(newSubjects);
    }else{
      Swal.fire({
        icon:"warning",
        title:"invalid input",
        text:warningMessage,
      })
    }

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const birth = form.birth.value;
    const rollNo = form.rollNo.value;
    const registrationNo = form.registrationNo.value;
    const department = form.department.value;
    const semester = form.semester.value;
    const session = form.session.value;
    const studentType = form.studentType.value;
    const institute = form.institute.value;

    const studentResult = {
      name: name,
      fatherName: fatherName,
      motherName: motherName,
      birthDate: birth,
      rollNo: rollNo,
      registrationNo: registrationNo,
      teacherEmail: user?.email,
      department: department,
      semester: semester,
      session: session,
      studentType: studentType,
      institute: institute,
      subjects: subjects,
    };

    const resultInfo = await axiosSecure.post("/results", studentResult);
    if (resultInfo.data.insertedId) {
      Swal.fire({
        title: `You have added ${name}'s result`,
        showClass: {
          popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
        },
        hideClass: {
          popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
        },
      });
      form.reset();
      setSubjects([
        {
          subjectName: "",
          code: "",
          assignment: "",
          classTest: "",
          midterm: "",
          finalExam: "",
        },
      ]);
    }
  };

  return (
    <div className="">
      <h2 className="mt-5 md:text-xl xl:text-2xl text-center text-stone-500">
        Add Students&apos;s Result
      </h2>
      <p className="w-9/12 md:w-1/2 xl:w-2/3 mx-auto border border-sky-500 mt-1 md:mt-2"></p>
      <form className="mt-10" onSubmit={handleSubmit}>
        {/* Student's Information */}
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          Student&apos;s Information :
        </h2>
        <div className="border rounded-xl px-2 pt-2 pb-5 shadow-lg">
          {/* 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">Full name</h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                placeholder="Type full name"
                type="text"
                name="name"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Father&apos;s name
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                placeholder="Type father's name"
                type="text"
                name="fatherName"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Mother&apos;s name
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                placeholder="Type mother's name"
                type="text"
                name="motherName"
                required
              />
            </div>
          </div>
          {/* 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Date of birth
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                type="date"
                name="birth"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Roll number
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                placeholder="Type roll no"
                type="number"
                name="rollNo"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Registration NO
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                placeholder="Type registration no"
                type="number"
                name="registrationNo"
                required
              />
            </div>
          </div>
          {/* 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Student&apos;s Department
              </h3>
              <select
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                name="department"
                required
              >
                <option disabled selected>
                  Choose department
                </option>
                <option value="CSE">CSE department</option>
                <option value="BBA">BBA department</option>
                <option value="LLB">LLB department</option>
                <option value="EEE">EEE department</option>
                <option value="ECE">ECE department</option>
              </select>
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Student&apos;s Semester
              </h3>
              <select
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                name="semester"
                required
              >
                <option disabled selected>
                  Choose semester
                </option>
                <option value="1">First semester</option>
                <option value="2">Second semester</option>
                <option value="3">Third semester</option>
                <option value="4">Fourth semester</option>
                <option value="5">Fifth semester</option>
                <option value="6">Sixth semester</option>
                <option value="7">Seventh semester</option>
                <option value="8">Eighth semester</option>
              </select>
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Student&apos;s Session
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                placeholder="2019-20"
                type="text"
                name="session"
                required
              />
            </div>
          </div>
          {/* 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Type of student
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                placeholder="Regular/Irregular"
                type="text"
                name="studentType"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">Institute</h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                placeholder="Institute"
                type="text"
                name="institute"
                required
              />
            </div>
          </div>
        </div>

        {/* Student's Result Information */}
        <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">
          Student&apos;s Result Information :
        </h2>
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="border rounded-xl px-2 pt-2 pb-5 shadow-lg mt-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <h3 className="md:text-lg font-semibold mb-1 ml-1">
                  Subject&apos;s name
                </h3>
                <input
                  className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                  placeholder="Type subject's name"
                  type="text"
                  name="subjectName"
                  value={subject.subjectName}
                  onChange={(event) => handleSubjectInputChange(index, event)}
                  required
                />
              </div>
              <div>
                <h3 className="md:text-lg font-semibold mb-1 ml-1">
                  Assignment marks
                </h3>
                <input
                  className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                  placeholder="Assignment marks"
                  type="number"
                  name="assignment"
                  value={subject.assignment}
                  onChange={(event) => handleSubjectInputChange(index, event)}
                  required
                />
              </div>
              <div>
                <h3 className="md:text-lg font-semibold mb-1 ml-1">
                  Class Test Marks
                </h3>
                <input
                  className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                  placeholder="Class Test Marks"
                  type="number"
                  name="classTest"
                  value={subject.classTest}
                  onChange={(event) => handleSubjectInputChange(index, event)}
                  required
                />
              </div>
              <div>
                <h3 className="md:text-lg font-semibold mb-1 ml-1">
                  Midterm Marks
                </h3>
                <input
                  className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                  placeholder="Midterm Marks"
                  type="number"
                  name="midterm"
                  value={subject.midterm}
                  onChange={(event) => handleSubjectInputChange(index, event)}
                  required
                />
              </div>
              <div>
                <h3 className="md:text-lg font-semibold mb-1 ml-1">
                  Final Exam Marks
                </h3>
                <input
                  className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                  placeholder="Final Exam Marks"
                  type="number"
                  name="finalExam"
                  value={subject.finalExam}
                  onChange={(event) => handleSubjectInputChange(index, event)}
                  required
                />
              </div>
              <div>
                <h3 className="md:text-lg font-semibold mb-1 ml-1">
                  Subject&apos;s Code
                </h3>
                <input
                  className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                  placeholder="Subject's code"
                  type="text"
                  name="code"
                  value={subject.code}
                  onChange={(event) => handleSubjectInputChange(index, event)}
                  required
                />
              </div>
            </div>
            {/* Delete button for each subject form, starting from the 2nd subject */}
            {index > 0 && (
              <div className="flex justify-end mt-3">
                <button
                  type="button"
                  className="btn bg-red-400 hover:bg-red-500"
                  onClick={() => deleteSubject(index)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
        <div className="flex mt-5 mb-10 justify-between">
          <div>
            <button
              className="btn bg-cyan-400 hover:bg-cyan-400"
              type="button"
              onClick={addSubject}
            >
              Add Subject
            </button>
            <button className="btn btn-neutral ml-2" type="submit">
              Add Result
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddResult;
