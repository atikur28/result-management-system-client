const AddResult = () => {
  return (
    <div className="py-10">
      <h2 className="md:text-xl xl:text-2xl text-center text-stone-500">
        Add Students&apos;s Result
      </h2>
      <p className="w-9/12 md:w-1/2 xl:w-2/3 mx-auto border border-sky-500 mt-1 md:mt-2"></p>
      <form className="mt-10">
        {/* 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <h3 className="text-lg font-semibold mb-1 ml-1">Full name</h3>
            <input
              className="w-full py-2 px-2 rounded-xl border border-gray-300"
              placeholder="Type full name"
              type="text"
              name="name"
              required
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 ml-1">Fataher&apos;s name</h3>
            <input
              className="w-full py-2 px-2 rounded-xl border border-gray-300"
              placeholder="Type father's name"
              type="text"
              name="fatherName"
              required
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 ml-1">Registration NO</h3>
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
            <h3 className="text-lg font-semibold mb-1 ml-1">
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
            <h3 className="text-lg font-semibold mb-1 ml-1">
              Student&apos;s Semester
            </h3>
            <select className="w-full py-2 px-2 rounded-xl border border-gray-300" required>
              <option disabled>Choose semester</option>
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
            <h3 className="text-lg font-semibold mb-1 ml-1">Student&apos;s Session</h3>
            <input
              className="w-full py-2 px-2 rounded-xl border border-gray-300"
              placeholder="2019-20"
              type="text"
              name="session"
              required
            />
          </div>
        </div>
        {/* 3 */}
      </form>
    </div>
  );
};

export default AddResult;
