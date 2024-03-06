const DoctorProfileUpdate = () => {
  return (
    <div className="w-full">
      <h1>Profile Information</h1>

      <form action="" className="w-full flex flex-col gap-4 mt-6">
        <div className="input-row">
          <label htmlFor="" className="block">
            Name*
          </label>
          <input type="text" className="update_input" />
        </div>

        <div>
          <label htmlFor="">Email*</label>
          <input type="text" className="update_input" />
        </div>

        <div>
          <label htmlFor="">Phone*</label>
          <input type="text" className="update_input" />
        </div>

        <div>
          <label htmlFor="">Bio*</label>
          <input type="text" className="update_input" />
        </div>

        <div>
          <div>
            <label htmlFor="">Gender</label>
            <select name="" id="">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="">Specialization*</label>
            <select name="" id="">
              <option value="">Select</option>
              <option value="">Surgeon</option>
              <option value="">NeuroSurgeon</option>
            </select>
          </div>

          <div>
            <label htmlFor="">Ticket Price*</label>
            <input type="number" defaultValue={0} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DoctorProfileUpdate;
