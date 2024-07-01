import { useLoaderData } from "react-router-dom";

const UpdateResult = () => {
  const {
    name,
    fatherName,
    motherName,
    birthDate,
    rollNo,
    registrationNo,
    department,
    semester,
    session,
    studentType,
    institute,
    subjects,
  } = useLoaderData();
  return (
    <div>
      <h2 className="mt-5 md:text-xl xl:text-2xl text-center text-stone-500">
        Update Students&apos;s Result
      </h2>
      <p className="w-9/12 md:w-1/2 xl:w-2/3 mx-auto border border-sky-500 mt-1 md:mt-2"></p>
      <form className="mt-10">
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
                defaultValue={name}
                type="text"
                name="name"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Fataher&apos;s name
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                placeholder="Type father's name"
                defaultValue={fatherName}
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
                defaultValue={motherName}
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
                Date of brith
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300 shadow-lg"
                defaultValue={birthDate}
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
                defaultValue={rollNo}
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
                defaultValue={registrationNo}
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
                defaultValue={department}
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
                defaultValue={semester}
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
                defaultValue={session}
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
                defaultValue={studentType}
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
                defaultValue={institute}
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
        {subjects?.map((data, index) => (
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
                  defaultValue={data?.subjectName}
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
                  defaultValue={data?.assignment}
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
                  defaultValue={data?.classTest}
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
                  defaultValue={data?.midterm}
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
                  defaultValue={data?.finalExam}
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
                  defaultValue={data?.code}
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <div className="mt-5 mb-10">
          <button className="btn btn-neutral ml-2" type="submit">
            Update Result
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateResult;
