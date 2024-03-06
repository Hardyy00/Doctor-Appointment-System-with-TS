const DoctorProfileUpdate = () => {
  return (
    <div className="w-full text-textColor">
      <h1 className="font-[800] text-[1.2rem]">Profile Information</h1>

      <form action="" className="w-full flex flex-col gap-4 mt-6">
        <div className="input-row">
          <label htmlFor="" className="block">
            Name*
          </label>
          <input type="text" className="update_input" required />
        </div>

        <div className="">
          <label htmlFor="" className="block">
            Email*
          </label>
          <input type="email" className="update_input" required />
        </div>

        <div>
          <label htmlFor="" className="block">
            Phone*
          </label>
          <input type="number" className="update_input" required />
        </div>

        <div>
          <label htmlFor="" className="block">
            Bio*
          </label>
          <input type="text" className="update_input" required />
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="border ">
            <label htmlFor="" className="block">
              Gender
            </label>
            <select name="" id="" className="select">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="">
            <label htmlFor="" className="block" >
              Specialization*
            </label>
            <select name="" id="" className="select">
              <option value="">Select</option>
              <option value="">Surgeon</option>
              <option value="">NeuroSurgeon</option>
            </select>
          </div>

          <div>
            <label htmlFor="" className="block" >
              Ticket Price*
            </label className="select">
            <input type="number" defaultValue={0} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DoctorProfileUpdate;
