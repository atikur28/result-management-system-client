const AddResult = () => {
  return (
    <div className="py-10">
      <h2 className="md:text-xl xl:text-2xl text-center text-stone-500">
        Add Students&apos;s Result
      </h2>
      <p className="w-9/12 md:w-1/2 xl:w-2/3 mx-auto border border-sky-500 mt-1 md:mt-2"></p>
      <form className="mt-10">
        {/* Student's Information */}
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          Student&apos;s Information :
        </h2>
        <div className="border rounded-xl px-2 pt-2 pb-5 shadow-lg drop-shadow-lg">
          {/* 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">Full name</h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="Type full name"
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
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="Type father's name"
                type="text"
                name="fatherName"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Registration NO
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="Type registration no"
                type="text"
                name="registrationNo"
                required
              />
            </div>
          </div>
          {/* 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Student&apos;s Department
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="Type student's department"
                type="text"
                name="department"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Student&apos;s Semester
              </h3>
              <select
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
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
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="2019-20"
                type="text"
                name="session"
                required
              />
            </div>
          </div>
        </div>
        {/* Student's Result Information */}
        <h2 className="text-xl md:text-2xl font-semibold mb-3 mt-10">
          Student&apos;s Result Information :
        </h2>
        <div className="border rounded-xl px-2 pt-2 pb-5 shadow-lg drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Subject&apos;s name
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="Type subject's name"
                type="text"
                name="subjectName1"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Assignment marks
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="Assignment marks"
                type="text"
                name="assignment1"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Class Test Marks
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="Class Test Marks"
                type="text"
                name="classTest1"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Midterm Marks
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="Midterm Marks"
                type="text"
                name="midterm1"
                required
              />
            </div>
            <div>
              <h3 className="md:text-lg font-semibold mb-1 ml-1">
                Final Exam Marks
              </h3>
              <input
                className="w-full py-2 px-2 rounded-xl border border-gray-300"
                placeholder="Final Exam Marks"
                type="text"
                name="finalExam1"
                required
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddResult;
